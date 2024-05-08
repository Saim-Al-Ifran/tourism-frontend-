import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

  
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const EditTouristSpot = () => {

    const handleAddSpot = ()=>{
        toast("Wow so easy!")
    }

  return (
    <>
    <ToastContainer/>
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
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Tourists Spot Name
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="Tourists Spot Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
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
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    User Email
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="User Email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    User Name
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="User Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                </div>
                <Button className="mt-6" fullWidth onClick={handleAddSpot}>
                    Update spot
                </Button>
                </form>
        </Card>
    </div>

    </>
  )
}

export default EditTouristSpot