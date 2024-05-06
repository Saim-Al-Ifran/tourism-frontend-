import React from 'react'
import Banner from './Banner/Banner'
import TouristCard from '../../components/TouristCard'


const Home = () => {
  return (
     <>
        <Banner/>
        <div class="container mx-auto py-8">
            <h2 class="text-3xl font-bold mb-[4rem] text-center">Popular Tourist Spots</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
            </div>

       </div>
     </>
  )
}

export default Home