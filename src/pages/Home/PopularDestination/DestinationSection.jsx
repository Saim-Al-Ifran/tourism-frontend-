function DestinationSection() {
    const destinations = [
        {
            name: 'Kuala Lumpur, Malaysia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Moonrise_over_kuala_lumpur.jpg/640px-Moonrise_over_kuala_lumpur.jpg',
            description: 'Experience the romance of Kuala Lumpur, visit iconic landmarks like the Eiffel Tower and Louvre Museum.'
        },
        {
            name: 'Ha Long Bay, Vietnam',
            image: 'https://static.vinwonders.com/production/Ha-Long-Bay-banner.jpg',
            description: 'Discover the beauty of Ha Long Bay, explore historic temples and gardens.'
        },
        {
            name: 'Bangkok, Thailand',
            image: 'https://www.holidify.com/images/bgImages/BANGKOK%20.jpg',
            description: 'Experience the energy of the Big Apple, visit world-famous attractions like Times Square and Central Park.'
        }
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destinations.map((destination, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                            <p className="text-gray-600 mb-4">{destination.description}</p>
                            <button className="btn btn-primary">Visit here</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default DestinationSection;