import { Link } from "react-router-dom";
import errorImg from "../../assets/error-page.gif";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src={errorImg} alt="error" className="w-1/3" />
        <div>
          <h2 className="text-6xl uppercase text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50] pb-5">
            page not found
          </h2>
          <p className="text-xl">
            We looked everywhere for this page.
            <br />
            Are you sure the website URL is Correct?
          </p>
          <Link to={"/"}>
            <button className="border-2 border-[#D31A50] py-1 px-5 mt-5 rounded-full hover:text-white hover:bg-[#D31A50]">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
