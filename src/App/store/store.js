import { configureStore, combineReducers } from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import ressourcesReducer, {fetchAllResources} from './ressourcesSlice'

const store = configureStore({
    reducer: combineReducers({
        ressources:ressourcesReducer,
        current: currentReducer
    }),
    devTools: true
})

store.dispatch(fetchAllResources())
export default store