import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/use-auth";

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const { isAuth } = useAuth()

    const auth = isAuth

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children
}

export { RequireAuth }