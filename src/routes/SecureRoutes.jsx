import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const SecureRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (loading || isAdminLoading || isInstructorLoading) {
    return (
      <div className="flex justify-center h-[30vh] items-center">
        <div
          className="w-12 h-12 rounded-full animate-spin
        border-2 border-dashed border-blue-500 border-t-transparent"
        ></div>
      </div>
    );
  }
  if (user && isAdmin && isInstructor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SecureRoutes;
