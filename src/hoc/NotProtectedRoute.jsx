import { useLocation, Navigate } from "react-router-dom";
import { useRootStore } from "../store/root-store-provider";
import { observer } from "mobx-react";

const NotProtectedRoute = observer(({children}) => {
    const location = useLocation();
    const {singInStore} = useRootStore();

    if(( singInStore.userData.id)){
        if( (singInStore.pageToReturn) !== null) {
            const cachedPageToReturn = singInStore.pageToReturn
            return <Navigate to={cachedPageToReturn} state={{from: location}} />
        } else {
            return <Navigate to="/profile" state={{from: location}} />
        }
        
    }
    return children
}
)

export {NotProtectedRoute };