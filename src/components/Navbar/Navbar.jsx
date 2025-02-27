import React, { useContext } from 'react';
import UserProfile from '../Profile/UserProfile';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

function Navbar() {
    const {user} = useContext(AuthContext);
    
    return (
        <>
        
                <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Website Name/Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            
                                <span className="font-bold text-lg">DreamTour</span>
                            
                            </Link>
                        </div>
                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-4">
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                            <Link to="/all_spot" className="text-gray-600 hover:text-gray-900">All Tourists Spot</Link>
                            { user && 
                                <>
                                    <Link to="/add_spot" className="text-gray-600 hover:text-gray-900">Add Tourists Spot</Link>
                                    <Link to="/mylist" className="text-gray-600 hover:text-gray-900">My List</Link>
                                </>
                            }

                        </div>
                        {/* Authentication Links */}
                        {user ? <UserProfile user={user}/> :
                            <div className="hidden md:flex items-center space-x-4">
                                <Link to="/login" className="btn btn-warning">Login</Link>
                                <Link to="/register" className="btn btn-primary">Register</Link>
                            </div>
                        }
    

                        


                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
  
    );
}

export default Navbar;
