import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";


const Pay = () => {
    const payCard = useLoaderData();
    console.log(payCard);
  return (
    <div>
      <SectionTitle heading={"Payment"}></SectionTitle>
      
    </div>
  );
};

export default Pay;
