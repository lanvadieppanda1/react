import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    luaChon: true, // true:tài, false:xỉu
    xucXac: [
        // '../../public/img/video_19_game_xuc_xac/1.png',
        // '../../public/img/video_19_game_xuc_xac/2.png',
        // '../../public/img/video_19_game_xuc_xac/3.png',
        // '../../public/img/video_19_game_xuc_xac/4.png',
        // '../../public/img/video_19_game_xuc_xac/5.png',
        // '../../public/img/video_19_game_xuc_xac/6.png',
        {
            diem: 1,
            img: '../../public/img/video_19_game_xuc_xac/1.png'
        },
        {
            diem: 2,
            img: '../../public/img/video_19_game_xuc_xac/2.png'
        },
        {
            diem: 3,
            img: '../../public/img/video_19_game_xuc_xac/3.png'
        }

    ],
    tongSoLanChoi: 0,
    soLanThang: 0,
};


const BTSucXacSlice = createSlice({
    name: "BTSucXac",
    initialState,
    reducers: {
        toggleLuaChon: (state, action) => {
            // state.luaChon = !state.luaChon;
            state.luaChon = action.payload;
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
                    src: `images/${number}.png`,
                    diem: number,
                }
            })
            // console.log('newXucXac: ', newXucXac)
            console.log('tongDiem: ', tongDiem)
            state.xucXac = newXucXac
            state.tongSoLanChoi += 1

            // Xử lý kết quả
            if (tongDiem === 3 || tongDiem === 18) return

        },
    }
})

export const { reducer: BTXucSacReducer, actions: BTXucSacActions } = BTSucXacSlice