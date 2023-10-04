import { makeAutoObservable} from "mobx";
import singIn from "../api/singIn";

interface Example {
    userData: any[]
    pageToReturn: null | string
    getUserData: ( username: string, pass: string) => void
    logout: ( username: string, pass: string) => void
    setPageToReturn: (page: string | null) => void
}

function SingInStore() {
    return makeAutoObservable<Example>({
        userData:[],
        pageToReturn: null,
        
        async getUserData(username:string , password:string) {
            try {
                const res = await singIn( username , password)
                this.userData = res
            } catch {
            }
        },
        async logout(username:string , password:string) {
            const logoutRes = await singIn('','')
            this.userData = logoutRes;
        },
        setPageToReturn(page: string | null) {
            this.pageToReturn = page;
        }
    });
}


export default SingInStore;
