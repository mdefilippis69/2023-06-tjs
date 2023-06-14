import React from 'react'
import { useSelector } from "react-redux";
import {MemeSVGViewer} from 'orsys-tjs-meme'

export const MemeSvgViewer=(props)=> {
    const storeProps=useSelector(storeState=>{
        return {meme: storeState.current, image:storeState.ressources.images.find(img => img.id === storeState.current.imageId)}
    })
    return <MemeSVGViewer
            {...props}
            {...storeProps}/>
  }
