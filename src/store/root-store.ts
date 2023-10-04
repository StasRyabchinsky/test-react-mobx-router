import PostStore from "./posts-store";
import SingInStore from "./singIn-store";
import EditUserDataStore from "./editProfile-store";
export class RootStore {
    postStore: ReturnType<typeof PostStore>;
    singInStore: ReturnType<typeof SingInStore>
    editUserDataStore: ReturnType<typeof EditUserDataStore>
    constructor() {
        this.postStore = PostStore()
        this.singInStore = SingInStore()
        this.editUserDataStore = EditUserDataStore()
    }

}