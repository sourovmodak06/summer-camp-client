import useTitle from "../../hooks/useTitle";


const Dashboard = () => {
    useTitle("Dashboard");
    return (
        <div className="dark:bg-[#0D0D0D]">
            <h2 className="dark:text-white">Dashboard Page</h2>
        </div>
    );
};

export default Dashboard;