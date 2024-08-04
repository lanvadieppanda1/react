// rafc
import React from 'react'
import { useSelector } from 'react-redux'

export const KetQua = () => {
    const { luaChon, tongSoLanChoi, soLanThang } = useSelector((state) => state.btXucXacReducer)
    return (
        <div className="text-center fs-3 fw-bold">
            <p>
                Bạn chọn: <span className="text-danger">{luaChon ? 'Tài' : 'Xỉu'}</span>
            </p>
            <p>Số bàn thắng: {soLanThang}</p>
            <p>Tổng số bàn chơi: {tongSoLanChoi}</p>
        </div>
    )
}
