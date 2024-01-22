import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import imageData from './components/DataComponent'
import imageData from './Components/DataComponent.jsx'
import AppClass from './AppClass.jsx'


let data = imageData()

let root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    {/* <App imageProp = {data}></App> */}
    <AppClass imageprop = {data}></AppClass>
  </React.StrictMode>,
)