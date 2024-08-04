import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductList = (props) => {
    console.log('props: ', props)

    const { data } = props

    return (
        <div>
            <div className="row">
                {data.map((shoe) => {
                    return (
                        <div className="col-4 mt-3" key={shoe.id}>
                            {/* <div className="card">
                                <img className="img-fluid" src={shoe.image} alt="..." />
                                <div className="card-body">
                                    <p className="fw-bold mb-3">{shoe.name}</p>
                                    <p>{shoe.price}</p>
                                </div>
                            </div> */}
                            <ProductItem shoe={shoe} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
