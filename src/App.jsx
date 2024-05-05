import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import './style.css'
const App = () => {
  return (
    <>
           <Router>
              <Navbar />
              <Routes>
                {/* <Route path="/"  element={<Home/>} /> */}
                <Route path="/login" element={<Login/>} />
                <Route path="/register"   element={<Register/> } />
         
                {/* <Route path="*" element={<NotFoundPage/>}/> */}
              </Routes>
              <Footer />
          </Router>
    </>

  )
}

export default App