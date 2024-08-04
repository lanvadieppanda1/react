// rafc

import React from 'react'

export const Header = (props) => {
    console.log('props: ', props)
    // const student = undefined
    // student?.age

    // props.func?.()

    // if (props.func) {
    //     props.func()
    // }

    return (
        <div className="p-5" style={{ backgroundColor: props?.bgColor }}>
            Header
        </div>
    )
}

// optional channing
