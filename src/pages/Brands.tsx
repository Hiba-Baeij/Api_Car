import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrands } from '../store/brands'
import Grid from '@mui/material/Grid'
import { Box, Button, Card } from '@mui/material'
import { borderRadius } from '@mui/system'
import { AppDispatch, RootState } from '../store'
import { BrandItem } from '@/api/Brand/dto'


export default function Brands() {
  const brands = useSelector<RootState, BrandItem[]>((state) => state.brand.brands)
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBrands());
  }, [])

  return (
    <>
      <React.Suspense fallback={'Loading '}>

        <div className='grid grid-cols-6 gap-4 p-4'>
          {brands.map((b: BrandItem) => {
            return (

              <Card key={b.id} className='p-4 flex items-center justify-center relative' sx={{ borderRadius: '15px' }} elevation={5}>
                <img width={150} src={`/brands/${b.name}.png`} alt="" />

                <Box sx={{ transition: '0.5s' }} className="absolute h-full w-full brand-info bg-white flex justify-center items-center text-2xl bg-opacity-70 opacity-0 hover:opacity-100 backdrop-blur-sm ">
                  <Button size='large' color='primary' sx={{ borderRadius: '15px', fontSize: '20px', fontWeight: "bold" }}>

                    عرض القطع
                  </Button>
                </Box>
              </Card>

            )
          })}
        </div>


      </React.Suspense>

    </>
  )
}
