import React from 'react'

export const ProductItem = (props) => {
    const { phone, handlePrdDetail } = props
    console.log('handlePrdDetail: ', handlePrdDetail)
    return (
        <div className="card">
            <img src={phone.hinhAnh} alt="..." style={{ height: 400 }} />
            <div className="card-body">
                <p>{phone.tenSP}</p>
                <button
                    className="btn btn-success mt-3"
                    onClick={() => {
                        handlePrdDetail(phone)
                    }}
                >
                    Xem chi tiết
                </button>
            </div>
        </div>
    )
}
