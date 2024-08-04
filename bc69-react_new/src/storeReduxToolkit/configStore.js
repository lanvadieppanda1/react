import { configureStore } from '@reduxjs/toolkit'
import { btShoeReducer } from '../store/BTShoe/reducer'
import { btXucXacReducer } from './BTXucXac/slice'
import { btFormReducer } from './BTForm/slice'

export const store = configureStore({
    reducer: {
        btShoeReducer,
        btXucXacReducer,
        btFormReducer,
    },
    // devTools: false, defaultValue : true
})
