import React, { useState, useEffect } from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import Footer from './components/ui/Footer/Footer'
import { MemeFormStoredConnected } from './components/functional/MemeForm/MemeForm'
import { useDispatch} from 'react-redux'
import { MemeSvgViewer } from './components/ui/MemeSvgViewer/MemeSvgViewer'
import { Route, Routes, useParams, useLocation } from 'react-router-dom'
import Editor from './pages/editor'
import MemeThumbnail, { MemeThumbnailStoreConnected } from './components/ui/MemeThumbnail/MemeThumbnail'

const App = () => {
  
  //chargement de datas post 1er montage (fetch si besoin) 
  useEffect(() => {
    //const d = useDispatch();
    //d.fetchAllRessources()
  }, [])
  return (
    <div className="App">
      <FlexV3Grow>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<div><h1>Hello a tous</h1></div>}/>
          <Route path='/thumbnail' element={<MemeThumbnailStoreConnected/>} />
          <Route path='/meme' element={<Editor/>}/>
          <Route path='/meme/:id' element={ <Editor/>}/>

        </Routes>
        <Footer/>
      </FlexV3Grow>
    </div>
  )
}

export default App