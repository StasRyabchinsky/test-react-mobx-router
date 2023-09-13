import { useLocation, Navigate } from "react-router-dom";

const UserAuth = ({children}) => {
    const location = useLocation();
    const auth = false;

    if(auth){
        return <Navigate to="/auth" state={{from: location}} />
    }
    return children
}

export {UserAuth};