import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import './style.css'
import Home from './pages/Home/Home';
import AlltouristSpot from './pages/AllTouristSpot/AlltouristSpot';
import AddTouristsSpot from './pages/AddTouristSpot/AddTouristSpot';
import Mylist from './pages/Mylist/Mylist';
import EditTouristSpot from './pages/EditTouristSpot/EditTouristSpot';


const App = () => {
  return (
    <>
           <Router>
              <Navbar />
              <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/all_spot"  element={<AlltouristSpot/>} />
                <Route path="/add_spot"  element={<AddTouristsSpot/>} />
                <Route path="/mylist"  element={<Mylist/>} />
                <Route path="/edit_spot/:id"  element={<EditTouristSpot/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register"  element={<Register/> } />
         
                {/* <Route path="*" element={<NotFoundPage/>}/> */}
              </Routes>
              <Footer />
          </Router>
    </>

  )
}

export default App