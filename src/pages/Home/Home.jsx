 
import Banner from './Banner/Banner'
import TouristCard from '../../components/TouristCard'
import PricingSection from './Pricing/PricingSection'
 
function DestinationSection() {
    const destinations = [
        {
            name: 'Paris, France',
            image: 'https://via.placeholder.com/400',
            description: 'Experience the romance of Paris, visit iconic landmarks like the Eiffel Tower and Louvre Museum.'
        },
        {
            name: 'Kyoto, Japan',
            image: 'https://via.placeholder.com/400',
            description: 'Discover the beauty of traditional Japanese culture, explore historic temples and gardens.'
        },
        {
            name: 'New York City, USA',
            image: 'https://via.placeholder.com/400',
            description: 'Experience the energy of the Big Apple, visit world-famous attractions like Times Square and Central Park.'
        }
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-8">Explore Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destinations.map((destination, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                            <p className="text-gray-600 mb-4">{destination.description}</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

 


const Home = () => {
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