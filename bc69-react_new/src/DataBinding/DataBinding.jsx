// rafc
import React from 'react'

export const DataBinding = () => {
    const fullName = 'Nguyen Van A'

    const sum = (a, b) => a + b

    // giá trị boolean => không hiển thị
    const isLogin = true

    return (
        <div className="container mt-5">
            <h1>DataBinding</h1>
            <p className="fs-3 fw-bold">Tên tôi là: {fullName} </p>
            <p>Tổng của 10 + 20: {sum(10, 20)}</p>
            <p>{isLogin}</p>
        </div>
    )
}
