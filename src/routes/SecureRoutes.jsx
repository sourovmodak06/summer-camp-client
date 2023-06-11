import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const SecureRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center h-[30vh] items-center">
        <div
          className="w-12 h-12 rounded-full animate-spin
        border-2 border-dashed border-blue-500 border-t-transparent"
        ></div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SecureRoutes;
