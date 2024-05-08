 
import Banner from './Banner/Banner'
import TouristCard from '../../components/TouristCard'
import PricingSection from './Pricing/PricingSection'
import DestinationSection from './PopularDestination/DestinationSection'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
 

 


const Home = () => {
  const {user} = useContext(AuthContext);
   
  return (
     <>
        <Banner/>
        <div class="container mx-auto py-8">
            <h2 class="text-3xl font-bold mb-[4rem] text-center">Popular Tourist Spots</h2>
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
   
            </div>
            <PricingSection/>
            <DestinationSection/>

       </div>
     </>
  )
}

export default Home