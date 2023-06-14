import { configureStore, combineReducers } from '@reduxjs/toolkit'
import currentReducer, {saveCurrent} from './currentSlice'
import ressourcesReducer, {fetchAllResources} from './ressourcesSlice'
import {emptyMeme} from 'orsys-tjs-meme'

const store = configureStore({
    reducer: combineReducers({
        ressources:ressourcesReducer,
        current: currentReducer
    }),
    devTools: true
})

store.dispatch(fetchAllResources())
//store.dispatch(saveCurrent(emptyMeme))
export default store