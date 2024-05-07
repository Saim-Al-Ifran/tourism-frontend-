import React from 'react'
import TouristCard from '../../components/TouristCard'

const AlltouristSpot = () => {
    
  return (
     <>
             <div class="container mx-auto py-8">
            <h2 class="text-3xl font-bold mb-[4rem] text-center">All Tourist Spots</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
                <TouristCard/>
            </div>

       </div>
     </>
  )
}

export default AlltouristSpot