 
import Banner from './Banner/Banner'
import TouristCard from '../../components/TouristCard'
import PricingSection from './Pricing/PricingSection'
import DestinationSection from './PopularDestination/DestinationSection'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axios from 'axios'
 



const Home = () => {
  const {user} = useContext(AuthContext);
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading,setLoading] = useState(true);


  const fetchTouristSpots = async () => {
    try {
        const response = await axios.get('http://localhost:3000/tourist_spots');
        setTouristSpots(response.data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching tourist spots:', error);
    }
};

  useEffect(() => {
      fetchTouristSpots();
  }, []);
  console.log(touristSpots);
   
  return (
     <>
        <Banner/>
        <div class="container mx-auto py-8">
            <h2 class="text-3xl font-bold mb-[4rem] text-center">Popular Tourist Spots</h2>
        
              {loading ? 
                      <div className="w-full flex items-center justify-center">
                        <span className="loading loading-bars loading-lg"></span>
                     </div>
                :
               (
                 <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
                       {touristSpots.map(touristSpot=> <TouristCard touristSpot={touristSpot}/>)}
                 </div> 
                 )
              }
              
   
 
   
            
            <PricingSection/>
            <DestinationSection/>

       </div>
     </>
  )
}

export default Home