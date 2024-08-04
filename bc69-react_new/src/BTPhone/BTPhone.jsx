// rafc
import React, { useState } from 'react'
import dataPhone from './dataPhone.json'
import { ProductList } from './ProductList'
import { ProductDetail } from './ProductDetail'

export const BTPhone = () => {
    console.log('dataPhone: ', dataPhone)
    const [prdDetail, setPrdDetail] = useState({
        maSP: 1,
        tenSP: 'VinSmart Live',
        manHinh: 'AMOLED, 6.2, Full HD+',
        heDieuHanh: 'Android 9.0 (Pie)',
        cameraTruoc: '20 MP',
        cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
        ram: '4 GB',
        rom: '64 GB',
        giaBan: 5700000,
        hinhAnh: './images/vsphone.jpg',
    })

    const handlePrdDetail = (prd) => {
        console.log('prd: ', prd)
        setPrdDetail(prd)
    }

    console.log('prdDetail: ', prdDetail)
    return (
        <div className="container mt-5">
            <h1>BTPhone</h1>
            <ProductList dataPhone={dataPhone} handlePrdDetail={handlePrdDetail} />
            <div className="mt-5">
                <ProductDetail prdDetail={prdDetail} />
            </div>
        </div>
    )
}
