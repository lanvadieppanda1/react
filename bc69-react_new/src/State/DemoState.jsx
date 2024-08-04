// rafc

import React, { useState } from 'react'

// hooks: Về bản chất nó vẫn func, đặt tên theo quy tắc có từ khóa use
// trong func bình thường: ko thể sử dụng đc hook
// trong hook có thể sử dụng đc 1 hook khác

// custom hook: hook tự chính mình định nghĩa

export const DemoState = () => {
    let isLogin = false
    const [state1, setState1] = useState(() => {
        // logic
        console.log('DEMO INITIALSTATE')
        return { name: 'abc' }
    })
    console.log('state1: ', state1)

    let [state, setState] = useState(false)
    console.log('state: ', state)

    const handleLogin = () => {
        // isLogin = true
        // console.log({ isLogin })
        setState(true)
        // state = true
        // console.log('state: ', state)
    }

    // 1. Khi muốn cập nhật lại UI dựa trên tương tác của user => tạo 1 cái state để quản lý UI đó
    // 2. Để tạo 1 state => sử dụng hook useState
    // 3. useState => trả về 1 mảng gồm 2 phần tử
    // Phẩn tử thứ 0: Gọi state => Dùng để render UI
    // Phần tử thứ 1: Gọi hàm setState => Dùng để thay đổi giá trị của state
    // Khi giá trị state đc thay đổi thông qua hàm setState => Component sẽ đc render lại => UI sẽ đc thay đổi
    // 4. Khi gọi hàm setState => truyền vào 1 giá trị mới # với giá trị state hiện tại => Component sẽ đc render lại
    // 5. Trong 1 func có thể tạo nhiều state
    // 6. Cú pháp:
    // const [state, setState] = useState(initialState)
    // Ở lần render đầu tiên của component state sẽ đc gán giá trị = initialState
    // initialState: string, number, boolean, object, array, function
    // trong trường hợp initialState là func => state = giá trị trả về của func đó,
    // và func này chỉ đc gọi duy nhất 1 lần ở lần render đầu tiên của component

    // Ví dụ

    const [number, setNumber] = useState(1)
    console.log('number: ', number)

    const handleNumber = () => {
        setNumber(number + 1)
    }

    const [fontSize, setFontSize] = useState(16)

    console.log('RENDER')
    return (
        <div className="container mt-5">
            <h1>Demo State</h1>

            {state ? (
                <div>
                    <p>Nguyen Van A</p>
                    <button className="btn btn-success" onClick={handleLogin}>
                        Đăng xuất
                    </button>
                </div>
            ) : (
                <button className="btn btn-success" onClick={handleLogin}>
                    Đăng nhập
                </button>
            )}

            <div className="mt-3">
                <h2>Ví dụ State</h2>
                <p className="fs-3">Number: {number}</p>
                <button className="btn btn-success" onClick={handleNumber}>
                    + Number
                </button>

                <div className="mt-3">
                    <p style={{ fontSize }}>Hello BC 69</p>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            setFontSize(fontSize + 2)
                        }}
                    >
                        change font size
                    </button>
                </div>
            </div>
        </div>
    )
}

// func
const demoFunc = () => {
    // useDemoHook()
}

// hook
const useDemoHook = () => {
    // useDemoHookABC()
}
