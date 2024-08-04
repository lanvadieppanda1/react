// rafc
import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

export const XucXac = () => {
    const { xucXac } = useSelector((state) => state.btXucXacReducer)
    console.log('xucXac: ', xucXac)
    return (
        <div className="d-flex gap-3">
            {xucXac.map((item, index) => {
                return (
                    <img
                        key={nanoid()}
                        style={{ width: 80, height: 80 }}
                        src={item.src}
                        alt="..."
                    />
                )
            })}
        </div>
    )
}
