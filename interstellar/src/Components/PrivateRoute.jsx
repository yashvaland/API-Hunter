import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { Auth } = useContext(AuthContext);
    if (!Auth.token) {
        return <Navigate to={"/login"}></Navigate>
    } else {
        return children
    }
}
export default PrivateRoute;
