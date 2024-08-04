import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 10,
    luaChon: true, // true: Tài, false: Xỉu
    xucXac: [
        {
            src: '../images/1.png',
            diem: 1,
        },
        {
            src: '../images/2.png',
            diem: 2,
        },
        {
            src: '../images/3.png',
            diem: 3,
        },
    ],
    tongSoLanChoi: 0,
    soLanThang: 0,
}

const btXucXacSlice = createSlice({
    name: 'btXucXac',
    initialState,
    reducers: {
        handleLuaChon: (state, action) => {
            console.log('action: ', action)
            state.luaChon = action.payload
        },
        handleXucXac: (state, action) => {
            console.log('action: ', action)
            // const number = Math.floor(Math.random() * 6 + 1)
            // console.log('number: ', number)

            let tongDiem = 0

            const newXucXac = [...Array(3)].map(() => {
                const number = Math.floor(Math.random() * 6 + 1)
                tongDiem += number
                return {
                    src: `../images/${number}.png`,
                    diem: number,
                }
            })
            // console.log('newXucXac: ', newXucXac)
            console.log('tongDiem: ', tongDiem)
            state.xucXac = newXucXac
            state.tongSoLanChoi += 1

            // Xử lý kết quả
            if (tongDiem === 3 || tongDiem === 18) return

            // TỔNG ĐIỂM TÀI (4 - 10) VÀ LỰA CHỌN CỦA USER LÀ TÀI
            if (tongDiem >= 4 && tongDiem <= 10 && state.luaChon) {
                state.soLanThang += 1
                return
            }

            // TỔNG ĐIỂM TÀI (11 - 17) VÀ LỰA CHỌN CỦA USER LÀ XỈU
            if (tongDiem >= 11 && tongDiem <= 17 && !state.luaChon) {
                state.soLanThang += 1
            }
        },
    },
    extraReducers: (builder) => {
        // xử lý action bất đồng bộ
    },
})

export const { reducer: btXucXacReducer, actions: btXucXacActions } = btXucXacSlice
