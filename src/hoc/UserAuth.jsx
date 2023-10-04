import { useLocation, Navigate } from "react-router-dom";
import { useRootStore } from "../store/root-store-provider";
import { observer } from "mobx-react";

const UserAuth = observer(({children}) => {
    const location = useLocation();
    const {singInStore} = useRootStore();
  
    const LS = JSON.parse(localStorage.getItem("localStorage"))
    const idLS = LS.id
    
    if(!(singInStore.userData.id || idLS)){
        singInStore.setPageToReturn(location.pathname)
        return <Navigate to="/auth" state={{from: location}} />
    }
    return children
})

export {UserAuth};