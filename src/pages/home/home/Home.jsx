import Abilities from "../abilities/Abilities";
import Carousel from "../carousel/Carousel";
import Review from "../review/Review";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Abilities></Abilities>
            <Review></Review>
        </div>
    );
};

export default Home;