import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = (props) =>{
  console.log(props.imageProp)
  const imageProp = props.imageProp
  return(
    <div>
      <h1>Gallery</h1>
      <div className='img-div'>
      {
        imageProp.map((element) =>{
          return <img id="img"src = {element.img} alt="" />
        })
      }
      </div>
    </div>
  )

}

export default App