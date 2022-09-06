import { createSlice } from '@reduxjs/toolkit'

export const darkmodeSlice = createSlice({

    name: 'darkmode',
    
    initialState:{
        value: false
    },

    reducers: {
        update: state => {
            state.value = !state.value;
        }
    }

})


export const {update} = darkmodeSlice.actions;

export default darkmodeSlice.reducer