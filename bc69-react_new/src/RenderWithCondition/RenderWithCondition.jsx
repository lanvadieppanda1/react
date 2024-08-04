// rafc
import React from 'react'

export const RenderWithCondition = () => {
    const isLogin = true

    const isShowMessage = true

    const number = 0 // false

    const value = NaN
    // falsy: false, 0, "", undefined, null, NaN

    const renderLogin = () => {
        if (isLogin) {
            return <p>Nguyễn Văn A</p>
        }

        return <button className="btn btn-success">Đăng nhập</button>
    }
    return (
        <div className="container mt-5">
            <h1>Render With Condition</h1>
            <>
                {/* {isLogin ? (
                    <>
                        <p>Nguyễn Văn A</p>
                    </>
                ) : (
                    <button className="btn btn-success">Đăng nhập</button>
                )} */}

                {renderLogin()}
            </>
            {/* {isShowMessage ? <p>Hello Cybersoft</p> : null} */}
            {isShowMessage && <p>Hello Cybersoft</p>}

            {!!number && <p>Number là: {number}</p>}

            {!!value && <p>abc</p>}
        </div>
    )
}

// A && B => A
