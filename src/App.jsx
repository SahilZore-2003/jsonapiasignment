import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Components/Register/Register"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import User from "./Components/User/User"
import Cart from "./Components/Cart/Cart"


function App() {



  return (
    <BrowserRouter>
      <Navbar />
      <User />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
