import { Carousel} from "@material-tailwind/react";
 
import CarouselItem from "../../../components/CarouselItem";
 

 
const Banner = () => {

 

  return (
    <>
  
    <Carousel className="rounded-xl mt-[3rem] mb-[4rem]"  >
       <CarouselItem 
          image="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Discover Your Dream Home"
          description="Experience the allure of finding your perfect home. It's not just about the physical beauty, but the promise of a new chapter, the sense of belonging, and the comfort of a place to call your own. Let us guide you through the journey of finding a space that resonates with your aspirations and desires."
       />

       <CarouselItem
          image="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Welcome to Your Real Estate Journey"
          description="Explore the endless possibilities of finding your ideal property. Beyond
          just bricks and mortar, it's about discovering the perfect blend of
          aesthetics, functionality, and community. Let us help you unlock the
          door to your dream home, where every corner tells a story and every
          room holds a promise of new beginnings."
       />

       <CarouselItem
         image="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         title="Find Your Perfect Home"
         description = "Welcome to our real estate platform, where your dream home is just a click away. Explore our extensive listings of properties, ranging from charming apartments to luxurious estates. Whether you're seeking a cozy urban retreat or a sprawling countryside escape, we have the perfect home for every lifestyle. Begin your journey today and discover the home you've always envisioned."
       />
    </Carousel>
    </>
  );
};

export default Banner;
