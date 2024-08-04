// rafc

import React from 'react'

export const HandleEvent = () => {
    // TH1: Hàm ko có tham số
    const logger = () => {
        alert('Hello BC 9')
    }

    // TH2: Hàm có tham số
    const showMessage = (message) => {
        alert(message)
    }

    //Note: Tất cả các sự kiện (event) trong react đều trả về 1 tham số event

    return (
        <div className="container mt-5">
            <h1>HandleEvent</h1>
            {/* TH1: hàm ko có tham số */}
            <button className="btn btn-success" onClick={logger}>
                Logger
            </button>

            {/* TH2: hàm có tham số */}
            <button
                className="btn btn-success ms-5"
                onClick={(event) => {
                    showMessage('Hello Nguyen Van A')
                    console.log('event: ', event)
                    console.log('target', event.target)
                }}
            >
                Show Message
            </button>
        </div>
    )
}
