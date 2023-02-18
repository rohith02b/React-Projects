import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Search from './components/Search'
import Home from './components/Home'

const App = () => {


  const [search, setSearch] = useState("")

  return (
    <>
      <Navbar keyword={search} method={setSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search keyword={search} />} />
      </Routes>
    </>
  )
}

export default App
