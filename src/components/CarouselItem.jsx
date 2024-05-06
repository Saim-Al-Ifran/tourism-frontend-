import {  Typography, Button } from "@material-tailwind/react";

const CarouselItem = ({title,description,image}) => {
  return (
   <>
         <div className="relative h-full w-full">
        <img
          src={image}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             {title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            {description}
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
  
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default CarouselItem