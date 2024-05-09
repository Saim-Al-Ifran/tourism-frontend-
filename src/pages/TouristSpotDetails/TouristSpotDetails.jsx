import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const TouristSpotDetails = () => {

    const {id} = useParams();
    const [touristSpot, setTouristSpot] = useState(null);
    const [loading,setLoading] = useState(true);
  

    const fetchTouristSpot = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/tourist_spots/${id}`);
          setTouristSpot(response.data);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching tourist spots:', error);
      }
  };
  
    useEffect(() => {
        fetchTouristSpot();
    }, []);
    
    

    return (
        <>
       

        {loading ?  
            <div className="w-full flex items-center justify-center mt-[5rem] mb-[5rem]">
                <span className="loading loading-infinity loading-lg"></span>
           </div>
      : (
                <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4 text-center">{touristSpot?.tourists_spot_name}</h2>
            <div className="max-w-lg mx-auto">
                <img src={touristSpot?.image} alt='akhono' className="rounded-lg mb-4" />
                <p className="text-lg mb-2"><strong>Country: </strong> {touristSpot?.country_name}</p>
                <p className="text-lg mb-2"><strong>Location:</strong> {touristSpot?.location}</p>
                <p className="text-lg mb-2"><strong>Spot name:</strong> {touristSpot?.tourists_spot_name}</p>
                <p className="text-lg mb-2"><strong>Short Description:</strong> {touristSpot?.short_description}</p>
                <p className="text-lg mb-2"><strong>Average Cost:</strong> {touristSpot?.average_cost} TK</p>
                <p className="text-lg mb-2"><strong>Seasonality:</strong> {touristSpot?.seasonality}</p>
                <p className="text-lg mb-2"><strong>Travel Time:</strong> {touristSpot?.travel_time}</p>
                <p className="text-lg mb-2"><strong>Total Visitors Per Year:</strong> {touristSpot?.total_visitors_per_year}</p>
                 <Link to="/">
                     <Button>Go Home</Button>
                 </Link>
              
            </div>
            
        </div>
      )}

        </> 
    );
};

export default TouristSpotDetails;
