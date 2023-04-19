import PartsTable from '@/components/parts/PartsTable'
import { axiosIns } from '@/libs/axios'
import React from 'react'
import { useQuery } from 'react-query'

function Products() {
    // useQuery(axiosIns.get('/CarPart'), {
    //     onSuccess: (res) => { console.log(res) }
    // })

    return (
        <div>
            
            <PartsTable />

        </div>
    )
}

export default Products