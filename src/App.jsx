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
import TouristSpotDetails from './pages/TouristSpotDetails/TouristSpotDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFoundPage from './ui/NotFoundPage';


const App = () => {
  return (
    <>
           <Router>
              <Navbar />
              <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/all_spot"  element={<AlltouristSpot/>} />
                <Route path="/add_spot"  element={<PrivateRoute><AddTouristsSpot/></PrivateRoute>} />
                <Route path="/mylist"  element={<PrivateRoute><Mylist/></PrivateRoute>} />
                <Route path="/edit_spot/:id"  element={<PrivateRoute><EditTouristSpot/></PrivateRoute>} />
                <Route path="/spot_details/:id"  element={<PrivateRoute><TouristSpotDetails/></PrivateRoute>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register"  element={<Register/> } />
                <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
              <Footer />
          </Router>
    </>

  )
}

export default App