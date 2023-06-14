import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme'
import { REST_ADR, ressourcesURL } from '../config/config'

const initialState = emptyMeme

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update:(state, action)=>{
        Object.assign(state, action.payload)
    },
    clear:(state, action)=>{
        Object.assign(state, emptyMeme)
    }
  },
  extraReducers: (builder)=> {
    builder.addCase('current/save/fulfilled', (state, action) => {
        Object.assign(state, action.payload)
    })
  }
});

export const { update, clear } = currentSlice.actions

export const postMeme = createAsyncThunk('current/save',
    async (meme)=>{
        const url=`${REST_ADR}${ressourcesURL.memes}${undefined!==meme.id?'/'+meme.id: ''}`;
        const promiseMeme = await fetch(url, {
            method: undefined!==meme.id?'PUT':'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(meme)
        })
        return await promiseMeme.json()
    })  

export default currentSlice.reducer