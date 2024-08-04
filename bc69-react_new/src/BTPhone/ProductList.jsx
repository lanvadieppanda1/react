import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductList = (props) => {
    console.log('props: ', props)
    const { handlePrdDetail } = props
    return (
        <div className="row">
            {props.dataPhone.map((phone) => {
                return (
                    <div className="col-4" key={phone.maSP}>
                        {/* <div className="card">
                            <img src={phone.hinhAnh} alt="..." style={{ height: 400 }} />
                            <div className="card-body">
                                <p>{phone.tenSP}</p>
                                <button className="btn btn-success mt-3">Xem chi tiết</button>
                            </div>
                        </div> */}
                        <ProductItem phone={phone} handlePrdDetail={handlePrdDetail} />
                    </div>
                )
            })}
        </div>
    )
}
