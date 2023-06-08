import Abilities from "../abilities/Abilities";
import Carousel from "../carousel/Carousel";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import Review from "../review/Review";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Abilities></Abilities>
            <Review></Review>
        </div>
    );
};

export default Home;