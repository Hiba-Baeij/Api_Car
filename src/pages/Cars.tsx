import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'

import AddCar from '@/components/cars/AddCar'
import CarsList from '@/components/cars/CarsList'
import { GetAllCar } from '@/api/Car/dto'
import { Autocomplete, Card, TextField } from '@mui/material'
import { CountryItem } from '@/api/Country/dto'
import { CarAPI } from '@/api/Car'
import { useQuery } from 'react-query'
import { CarActions } from '@/store/cars'
import { axiosIns } from '@/libs/axios'
export default function Cars() {
    const countries = useSelector<RootState, CountryItem[]>(state => state.country.countries)
    const brands = useSelector<RootState, CountryItem[]>(state => state.brand.brands)
    const [modifyItem, setModifyItem] = useState<GetAllCar | null>(null)

    const fetchCars = async () => {
        try {
            const { data } = await axiosIns.get<GetAllCar[]>(CarAPI.base)
            return data;
        }
        catch (er) {
            throw (er)
        }
    }

    useQuery('car', fetchCars, {
        onSuccess: (data) => {
            dispatch(CarActions.setCarsList(data));
        }
    })


    const dispatch = useDispatch<AppDispatch>()



    const cars = useSelector<RootState, GetAllCar[]>(state => state.car.cars)
    return (
        <div>
            <Card className='p-4 ' elevation={0} >

                <div className="flex items-center gap-5">
                    <TextField label='ابحث عن سيارة معينة' className='w-96' />


                    <Autocomplete

                        disablePortal
                        options={countries}
                        sx={{ width: 300 }}
                        getOptionLabel={(o) => o.name}
                        renderInput={(params) => <TextField {...params} label="الدولة" />}
                    />
                    <Autocomplete
                        disablePortal
                        options={brands}
                        sx={{ width: 300 }}
                        getOptionLabel={(o) => o.name}
                        renderInput={(params) => <TextField {...params} label="الشركة المصنعة" />}
                    />

                    <AddCar carModifyDto={modifyItem} ></AddCar>
                </div>
            </Card>

            <div className='mt-4 px-4'>
                <CarsList onDetails={(car) => { setModifyItem(car) }} carsList={cars}></CarsList>
            </div>
        </div>
    )
}
