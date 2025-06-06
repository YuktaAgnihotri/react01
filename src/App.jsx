import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Contact from './components/contact'
import Services from './components/services'
import { Route,Routes } from 'react-router'
import back from './assets/download .jpg'
import Test from './components/test'
function App() {
 const mystyle={
  backgroundImage: `url(${back})`,
   backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",

 }

  return (
  <div style={mystyle}>
    <div className=' p-15'>
    <Navbar/>
 
   <Routes>
    <Route  path="/" element={<Home/>}></Route>
     <Route  path="/contact" element={<Contact/>}></Route>
      <Route  path="/services" element={<Services/>}></Route>
   </Routes>
  </div>
  </div>
  )
}

export default App
