import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AddCarDTO, GetAllCar } from '@/api/Car/dto';
import { Autocomplete, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { BrandItem } from '@/api/Brand/dto';
import { useState, useEffect } from 'react'
import Upload from '../Upload';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Add, Close } from '@mui/icons-material';
import { CarActions } from '@/store/cars';
import { useQuery } from 'react-query';

const validationSchema = yup.object({
    name: yup.string().required('اسم السيارة مطلوب'),
    brandId: yup.string().required('ماركة السيارة مطلوبة'),
    model: yup.number().required().min(1970),
})

interface propsType {
    carModifyDto: GetAllCar | null
}

export default function FormDialog({ carModifyDto }: propsType) {
    const showModal = useSelector<RootState, boolean>((state) => state.car.carFormModal);
    const brands = useSelector<RootState, BrandItem[]>((state) => state.brand.brands)
    const dispatch = useDispatch<AppDispatch>()
    const carForm = useFormik({
        initialValues: {
            ...new AddCarDTO()
        },
        validationSchema,
        onSubmit: (values) => {
            // dispatch(addCar(values))
        },

    })

    const deleteCar = () => {
        useQuery({})
    }

    useEffect(() => {
        if (carModifyDto !== null && carModifyDto.id) {
            dispatch(CarActions.setCarModal(true));
            carForm.setValues({
                brandId: carModifyDto.brandId,
                name: carModifyDto.name,
                carCategoryId: carModifyDto.carCategoryId,
                imageUrl: carModifyDto.image,
                model: carModifyDto.model
            })

        }
    }, [carModifyDto])



    return (
        <div>
            <Button variant="text" onClick={() => dispatch(CarActions.setCarModal(true))}  >
                إضافة سيارة
                <Add></Add>
            </Button>

            <Dialog open={showModal} >

                <form onSubmit={carForm.handleSubmit} >
                    <div className="flex justify-between items-center pl-4">

                        <DialogTitle
                        >إضافة سيارة

                        </DialogTitle>


                        <IconButton onClick={() => dispatch(CarActions.setCarModal(false))}><Close /></IconButton>
                    </div>
                    <DialogContent className='flex flex-col min-w-[31.25rem] p-2 gap-4 '>

                        <FormControl className='py-4 my-5 ' sx={{ marginTop: '10px' }}  >
                            <InputLabel id="brand-id-label">الشركة المصنعة</InputLabel>
                            <Select
                                name='brandId'
                                value={carForm.values.brandId}
                                onChange={(e) => carForm.setFieldValue('brandId', e.target.value)}
                                labelId="brand-id-label"
                                label="الشركة المصنعة"
                                error={carForm.touched.brandId}
                            >
                                {
                                    brands.map((b) => <MenuItem key={b.id} value={b.id}>{b.name}</MenuItem>)
                                }
                            </Select>
                            <small>{carForm.touched.brandId && carForm.errors.brandId}</small>
                        </FormControl>
                        <TextField name='name' id='car-name' label='اسم السيارة' value={carForm.values.name} onChange={carForm.handleChange} error={carForm.touched.name} helperText={carForm.touched.name && carForm.errors.name}
                        />
                        <TextField name='model' id='car-model' helperText='سنة التصنيع' label='موديل السيارة' value={carForm.values.model} onChange={carForm.handleChange} error={carForm.touched.model} />

                        <div>

                            <Upload label="صورة السيارة" name='image' url={carForm.values.imageUrl} onChange={(e: any) => {
                                carForm.setFieldValue('image', e.file)
                            }} />
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dispatch(CarActions.setCarModal(false))}>الغاء</Button>
                        <Button type='submit'>إضافة السيارة</Button>
                        <Button onClick={() => deleteCar}>حذف السيارة</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div >
    );
}
