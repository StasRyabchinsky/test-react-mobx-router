import { createContext, useContext } from "react";
import { RootStore } from "./root-store";

export const StoreContext = createContext<RootStore | undefined>(undefined);

export function useRootStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useRootStore must be used within RootStoreProvider')
    }
    return context
}