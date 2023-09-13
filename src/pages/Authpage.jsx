
import { useLocation, useNavigate } from "react-router-dom";
const Authpage =() =>{
    const location = useLocation();
    const navigate = useNavigate();

    const fromPage = location.state?.from?.pathname || '/';
    return (
        <div>
            <h2>LoginPage</h2>
        </div>
    )
}
export {Authpage}