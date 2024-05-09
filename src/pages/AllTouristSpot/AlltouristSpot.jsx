import  { useEffect, useState } from 'react';
import TouristCard from '../../components/TouristCard';
import axios from 'axios';

const AlltouristSpot = () => {
   
    const [sortBy, setSortBy] = useState('ascending');
    const [touristSpots, setTouristSpots] = useState([]);
    const [loading,setLoading] = useState(true);
  
  
    const fetchTouristSpots = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/tourist_spots`);
          setTouristSpots(response.data);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching tourist spots:', error);
      }
  };
  
    useEffect(() => {
        fetchTouristSpots();
    }, []);
  
    // const sortTouristSpots = () => {
    //     // Create a copy of touristSpots array to avoid mutating the original array
    //     const sortedTouristSpots = [...touristSpots];
    //     // Sort the array based on average_cost
    //     sortedTouristSpots.sort((a, b) => {
    //         if (sortBy === 'ascending') {
    //             return a.average_cost - b.average_cost;
    //         } else {
    //             return b.average_cost - a.average_cost;
    //         }
    //     });
    //     // Return the sorted array
    //     return sortedTouristSpots;
    // };

    return (
        <>
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-[4rem] text-center">All Tourist Spots</h2>
                {/* Sorting option */}
                <div className="mb-4 flex justify-center">
                    <select
                        className="bg-white text-gray-900 border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="ascending">Sort by Cost (Low to High)</option>
                        <option value="descending">Sort by Cost (High to Low)</option>
                    </select>
                </div>
        
 
                {loading ? 
                      <div className="w-full flex items-center justify-center">
                        <span className="loading loading-bars loading-lg"></span>
                     </div>
                :
               (
                 <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
                       { touristSpots.map(touristSpot=> <TouristCard touristSpot={touristSpot}/>)}
                 </div> 
                 )
              }
      
              
                </div>
           
        </>
    );
};

export default AlltouristSpot;
