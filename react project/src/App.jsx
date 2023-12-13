import { useState } from 'react'
import './App.css'

function App() {


  return (
   <Routes>
<Router  path='/' element={<h1>My Home</h1>}/>
<Router  path='*' element={<h1>404 </h1>}/>

   </Routes>
  )
}

export default App
