import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const TouristCard = ({touristSpot}) => {
  const {image,short_description,average_cost,tourists_spot_name,_id} = touristSpot;
  return (
    <>

    <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
        <img
            src={image}
            alt="card-image"
        />
        </CardHeader>
        <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
              {tourists_spot_name}
        </Typography>
        <Typography>
                {short_description}
        </Typography>
        <Typography variant="h6" color='light-green'>
            Average-cost : <span>{average_cost} TK</span>
        </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link to={`/spot_details/${_id}`}>
           <Button>View details</Button>
        </Link>
        
        </CardFooter>
    </Card>

    </>
  )
}

export default TouristCard