import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomeIndex from './Pages/Home/HomeIndex'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route index element = {<HomeIndex/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
