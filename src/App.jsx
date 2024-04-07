import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomeIndex from './Pages/Home/HomeIndex'
import AboutIndex from './Pages/About/AboutIndex'
import RestaurantPage from './Pages/RestaurantPage/RestaurantPage'
import OrderPage from './Pages/RestaurantPage/OrderPage/OrderPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route index element = {<HomeIndex/>}/>
        <Route  path="about" element={ <AboutIndex/>} />
        <Route  path="restaurantPage" element={ <RestaurantPage/>} />
        <Route  path="OrderPage" element={ <OrderPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
