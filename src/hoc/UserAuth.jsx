import { useLocation, Navigate } from "react-router-dom";
import { useRootStore } from "../store/root-store-provider";
import { observer } from "mobx-react";

const UserAuth = observer(({children}) => {
    const location = useLocation();
    const {singInStore} = useRootStore();
    
    if(!(singInStore.userData.id )){
        singInStore.setPageToReturn(location.pathname)
        return <Navigate to="/auth" state={{from: location}} />
    }
    return children
})

export {UserAuth};