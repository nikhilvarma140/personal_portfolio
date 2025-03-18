import { configureStore } from '@reduxjs/toolkit';
import stateReducer from "./../state/state"

const store = configureStore({
    reducer:{
        state:stateReducer,
    }
})

export default store;