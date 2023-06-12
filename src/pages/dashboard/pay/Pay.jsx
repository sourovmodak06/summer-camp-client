import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Pay = () => {
  const [classItems] = useClasses();
  const total = classItems.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[90vh] p-6 overflow-scroll">
      <SectionTitle heading={"Payment"}></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} classItems={classItems}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Pay;
