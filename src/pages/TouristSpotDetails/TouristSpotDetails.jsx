import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpotDetails = () => {
    
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Shundarban</h2>
            <div className="max-w-lg mx-auto">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt='akhono' className="rounded-lg mb-4" />
                <p className="text-lg mb-2"><strong>Country: </strong>Nepal</p>
                <p className="text-lg mb-2"><strong>Location:</strong> Shundarban</p>
                <p className="text-lg mb-2"><strong>Spot name:</strong> Sajek Valley</p>
                <p className="text-lg mb-2"><strong>Short Description:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi ipsum repellendus distinctio, odio autem magnam quia obcaecati temporibus, itaque error vero labore maiores sunt unde ipsam. Nostrum, expedita quo!</p>
                <p className="text-lg mb-2"><strong>Average Cost:</strong> $200</p>
                <p className="text-lg mb-2"><strong>Seasonality:</strong> Rainy season</p>
                <p className="text-lg mb-2"><strong>Travel Time:</strong> 10hr</p>
                <p className="text-lg mb-2"><strong>Total Visitors Per Year:</strong> 5000</p>
                 <Link to="/">
                     <Button>Go Home</Button>
                 </Link>
              
            </div>
            
        </div>
    );
};

export default TouristSpotDetails;
