// rafc
import React from 'react'
import { LuaChon } from './LuaChon'
import { XucXac } from './XucXac'
import { KetQua } from './KetQua'
import { useDispatch, useSelector } from 'react-redux'
import { btXucXacActions } from '../storeReduxToolkit/BTXucXac/slice'

// context

export const BTXucXac = () => {
    const { luaChon } = useSelector((state) => state.btXucXacReducer)
    const dispatch = useDispatch()

    return (
        <div className="container mt-3">
            <h1>BT Xúc Xắc</h1>
            <h2 className="fs-2 fw-bold text-center mt-4">Game đổ xúc xắc</h2>
            <div className="d-flex px-5 justify-content-between mt-5">
                <LuaChon
                    text="Tài"
                    selected={luaChon}
                    handleLuaChon={() => dispatch(btXucXacActions.handleLuaChon(true))}
                />
                <XucXac />
                <LuaChon
                    text="Xỉu"
                    selected={!luaChon}
                    handleLuaChon={() => dispatch(btXucXacActions.handleLuaChon(false))}
                />
            </div>

            <KetQua />
            <div className="text-center">
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        dispatch(btXucXacActions.handleXucXac())
                    }}
                >
                    <span className="p-5 fs-3">Play</span>
                </button>
            </div>
        </div>
    )
}
