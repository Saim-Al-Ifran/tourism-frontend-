import React, { useContext, useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

function AddTouristsSpot() {
    const {user} = useContext(AuthContext);
    const{email,displayName} = user;
    const [formData, setFormData] = useState({
        image: '',
        tourists_spot_name: '',
        country_name: '',
        location: '',
        short_description: '',
        average_cost: '',
        seasonality: '',
        travel_time: '',
        total_visitors_per_year: '',
        user_email:email,
        user_name:displayName
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
  
    const handleAddSpot = async() => {
 

        const response = await axios.post('http://localhost:3000/tourist_spots', formData);
        console.log(response);
        if(response.status === 201){
            toast.success("Spot added successfully!");
        }
          
        setFormData({
            image: '',
            tourists_spot_name: '',
            country_name: '',
            location: '',
            short_description: '',
            average_cost: '',
            seasonality: '',
            travel_time: '',
            total_visitors_per_year: '',
        });
    };

    return (
        <>
            <ToastContainer/>
            <div className="container mx-auto flex items-center justify-center mb-[3rem] mt-[3rem]">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Add Tourists Spot
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Share your favorite tourist spots with us!
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Image URL
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="https://example.com/image.jpg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                            />
                           <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Spot name
                            </Typography>
                           <Input
                                size="lg"
                                placeholder="Tourists Spot Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="tourists_spot_name"
                                value={formData.tourists_spot_name}
                                onChange={handleInputChange}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Country Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Country Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="country_name"
                                value={formData.country_name}
                                onChange={handleInputChange}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Location
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Location"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Short Description
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Short Description"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="short_description"
                                value={formData.short_description}
                                onChange={handleInputChange}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Average Cost
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Average Cost"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="average_cost"
                                value={formData.average_cost}
                                onChange={handleInputChange}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Seasonality
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Seasonality"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="seasonality"
                                value={formData.seasonality}
                                onChange={handleInputChange}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Travel Time
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Travel Time"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="travel_time"
                                value={formData.travel_time}
                                onChange={handleInputChange}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Total Visitors Per Year
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Total Visitors Per Year"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                name="total_visitors_per_year"
                                value={formData.total_visitors_per_year}
                                onChange={handleInputChange}
                            />

                        </div>
                        <Button className="mt-6" fullWidth onClick={handleAddSpot}>
                            Add spot
                        </Button>
                    </form>
                </Card>
            </div>
        </>
    );
}

export default AddTouristsSpot;
