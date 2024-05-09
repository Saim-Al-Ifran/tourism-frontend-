import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mylist = () => {
    const {user} = useContext(AuthContext);
    const [touristSpots, setTouristSpots] = useState([]);
    const [loading,setLoading] = useState(true);
    const { id } = useParams();
    
    const{email} = user;
  
    const fetchTouristSpots = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/tourist_spots?email=${email}`);
          setTouristSpots(response.data);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching tourist spots:', error);
      }
  };
   
    useEffect(() => {
        fetchTouristSpots();
    }, []);

   
    const handleDeleteSpot = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this tourist spot?");
        if (confirmDelete) {
            try {
                const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/tourist_spots/${id}`);
                
                if(result.status === 200){
                      fetchTouristSpots();
                      toast.success("Tourist spot deleted successfully!");
                }
              
            } catch (error) {
                console.error('Error deleting tourist spot:', error);
                toast.error("Failed to delete tourist spot. Please try again later.");
            }
        }
    }
    
  return (
      <>
      <ToastContainer/>
            <h2 class="text-3xl font-bold mt-[3rem]  text-center">My tourist Spots</h2>
            {touristSpots.length === 0 && <h1 className="text-center mt-[5rem] mb-[5rem] font-semibold">No data found!</h1>}
            { loading ? 
                    <div className="w-full flex items-center justify-center mt-[6rem] mb-[6rem]">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                 :
                 touristSpots.length > 0 &&
                 (
                    

                   <div className="overflow-x-auto mb-[4rem] mt-[4rem]">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
 
                            </th>
                            <th>Image</th>
                            <th>Tourist spot</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
   
                         {
                            touristSpots.map(touristSpot=>(
                                <tr>
                                <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                </th>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        {/* <img src={touristSpots?.image} /> */}
                                        <img src={touristSpot.image} alt="" />
                                    </div>
                                    </div>
     
                                </div>
                                </td>
                                <td>
                                {touristSpot.tourists_spot_name}
     
                                </td>
                                <td>{touristSpot.country_name}</td>
                                <th>
                                    <Link to={`/edit_spot/${touristSpot._id}`}>
                                        <Button color="green" className="mr-2"><i class="fa-solid fa-pen-to-square"></i> Edit</Button> 
                                    </Link>
                                  
                                   <Button color="red" onClick={()=> handleDeleteSpot(touristSpot._id)}><i class="fa-solid fa-trash"></i> Delete</Button>
                                </th>
                             </tr>
                            ))
                        }
                        
                

                        </tbody>
 
                        
                    </table>
            </div> 
                 ) 
            }
   
      </>
  )
}

export default Mylist