import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState = {
    list: [],
    loading: false,
    error: null
}

export const fetchCollaborators = createAsyncThunk('collaborators/fetchCollaborators', () => {
    return axios.get('http://localhost:3000/collaborators')
                .then(res => { return res.data })    
})

const collaboratorsSlice = createSlice({
    name: 'collaborators',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollaborators.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchCollaborators.fulfilled, (state, action) => {
                state.loading = false
                state.list = action.payload
            })
            .addCase(fetchCollaborators.rejected, (state, action) => {
                console.log(action.error);
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { } = collaboratorsSlice.actions

export default collaboratorsSlice.reducer