import { Carousel} from "@material-tailwind/react";
 
import CarouselItem from "../../../components/CarouselItem";
 

 
const Banner = () => {

 

  return (
    <>
  
    <Carousel className="rounded-xl mt-[3rem] mb-[4rem]"  >
       <CarouselItem 
          image="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg"
          title="Discover Your Dream Tour"
          description="Experience the allure of finding your perfect tour. It's not just about the physical beauty, but the promise of a new chapter, the sense of belonging, and the comfort of a place to call your own. Let us guide you through the journey of finding a space that resonates with your aspirations and desires."
       />

       <CarouselItem
          image="https://cdn-gdpal.nitrocdn.com/wYTsNDvTtivyqMQKozkdeShFCCdGExJz/assets/images/optimized/rev-b1c501a/wp-content/uploads/2022/07/1-3-1.jpg"
          title="Discover the World Your Journey Begins Here!!"
          description="Explore the endless possibilities of finding your ideal property. Beyond
          just bricks and mortar, it's about discovering the perfect blend of
          aesthetics, functionality, and community. Let us help you unlock the
          door to your dream home, where every corner tells a story and every
          room holds a promise of new beginnings."
       />

       <CarouselItem
         image="https://www.thefinancetoday.net/uploads/shares/Rangamati_hanging_Bridge-2019-12-24-12-47-02.jpg"
         title="Find Your Perfect Tourist Spot"
         description = "Welcome to our tourist platform, where your dream tour is just a click away. Explore our extensive listings of properties, ranging from charming apartments to luxurious estates. Whether you're seeking a cozy urban retreat or a sprawling countryside escape, we have the perfect home for every lifestyle. Begin your journey today and discover the home you've always envisioned."
       />
    </Carousel>
    </>
  );
};

export default Banner;
