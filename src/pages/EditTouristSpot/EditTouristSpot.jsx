import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTouristSpot = () => {
    const { id } = useParams();
    const [touristSpot, setTouristSpot] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const [image, setImageUrl] = useState('');
    const [tourists_spot_name, setSpotName] = useState('');
    const [country_name, setCountryName] = useState('');
    const [location, setLocation] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [average_cost, setAverageCost] = useState('');
    const [seasonality, setSeasonality] = useState('');
    const [travel_time, setTravelTime] = useState('');
    const [total_visitors_per_year, setTotalVisitors] = useState('');
  
    const fetchTouristSpot = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/tourist_spots/${id}`);
            const data = response.data;
            setTouristSpot(data);
            setImageUrl(data.image);
            setSpotName(data.tourists_spot_name);
            setCountryName(data.country_name);
            setLocation(data.location);
            setShortDescription(data.short_description);
            setAverageCost(data.average_cost);
            setSeasonality(data.seasonality);
            setTravelTime(data.travel_time);
            setTotalVisitors(data.total_visitors_per_year);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tourist spots:', error);
        }
    };

    useEffect(() => {
        fetchTouristSpot();
    }, [id]);

    const handleEditSpot = async() => {
        try {
            const updatedData = {
                image,
                tourists_spot_name,
                country_name,
                location,
                short_description,
                average_cost,
                seasonality,
                travel_time,
                total_visitors_per_year
            };

            const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/tourist_spots/${id}`, updatedData);
            if(result.status === 200){
                 toast.success("Tourist spot updated successfully!");
            }
            console.log(result);
           
        } catch (error) {
            console.error('Error updating tourist spot:', error);
            toast.error("Failed to update tourist spot. Please try again later.");
        }
     
    }




    return (
        <>
            <ToastContainer />
            <div className="container mx-auto flex items-center justify-center mb-[3rem] mt-[3rem]">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Edit Tourists Spot
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Share your favorite tourist spots with us!
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Input
                                size="lg"
                                placeholder="https://example.com/image.jpg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={image}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Tourists Spot Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={tourists_spot_name}
                                onChange={(e) => setSpotName(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Country Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={country_name}
                                onChange={(e) => setCountryName(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Location"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Short Description"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={short_description}
                                onChange={(e) => setShortDescription(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Average Cost"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={average_cost}
                                onChange={(e) => setAverageCost(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Seasonality"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={seasonality}
                                onChange={(e) => setSeasonality(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Travel Time"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={travel_time}
                                onChange={(e) => setTravelTime(e.target.value)}
                            />
                            <Input
                                size="lg"
                                placeholder="Total Visitors Per Year"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={total_visitors_per_year}
                                onChange={(e) => setTotalVisitors(e.target.value)}
                            />
                        </div>
                        <Button className="mt-6" fullWidth onClick={handleEditSpot}>
                            Update spot
                        </Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default EditTouristSpot;
