import { configureStore } from '@reduxjs/toolkit';
import { btShoeReducer } from './BTShoe/reducer'
import { BTXucSacReducer } from './BTSucXac/slice';


export const store = configureStore({
    reducer: {
        btShoeReducer,
        BTXucSacReducer
    },
    //true,false tắt mở devtool redux để bảo mật
    // devTools: false, defaultValue: true
})