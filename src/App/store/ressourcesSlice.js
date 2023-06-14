import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { REST_ADR, ressourcesURL } from '../config/config';

const initialState = {
    images:[],
    memes:[]
}

const ressourcesSlice = createSlice({
  name: 'ressources',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('ressources/fetchRessources/fulfilled', (state, action)=>{
        state.images.splice(0);
        state.images.push(...action.payload.images)
        state.memes.splice(0)
        state.memes.push(...action.payload.memes)
    })
    builder.addCase('current/save/fulfilled', (state, action) => {
        const position = state.memes.findIndex(m=>m.id===action.payload)
        if (position > -1){state.memes[position] = action.payload}
        else { state.memes.push(action.payload)}
    })
  }
});

//export const {} = ressourcesSlice.actions
export const fetchAllResources = createAsyncThunk('ressources/fetchRessources', 
    async ()=>{
        const promiseImages = await fetch(`${REST_ADR}${ressourcesURL.images}`)
        const promiseMemes = await fetch(`${REST_ADR}${ressourcesURL.memes}`)
        const jsoI =  await promiseImages.json()
        const jsoM = await promiseMemes.json()
        //console.log(jso)
        return {memes: jsoM, images: jsoI}
    })
  
export default ressourcesSlice.reducer