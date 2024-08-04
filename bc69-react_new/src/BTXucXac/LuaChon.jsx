// rafc
import React from 'react'
import cn from 'classnames'

export const LuaChon = (props) => {
    const { text, selected, handleLuaChon } = props
    return (
        <div
            className={cn('rounded d-flex align-items-center justify-content-center', {
                'bg-success': !selected,
                'bg-warning': selected,
            })}
            style={{ width: 200, height: 200, cursor: 'pointer' }}
            onClick={handleLuaChon}
        >
            <p className="text-white fw-bold fs-2">{text}</p>
        </div>
    )
}
