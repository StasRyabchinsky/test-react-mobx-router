import { makeAutoObservable} from "mobx";
import editUserData from "../api/updateUser";

function EditUserDataStore() {

    return makeAutoObservable({
        newUserData:[],
        async getEditUserData(id:number,username:string,firstname:string,lastname:string,email:string,image:any,password:string ) {
            try {
                const res = await editUserData(id,username,firstname,lastname,email,image,password)
                console.log("editProfile-store",res)
                this.newUserData = res
            } catch {
            }
        }
    });
}


export default EditUserDataStore;
