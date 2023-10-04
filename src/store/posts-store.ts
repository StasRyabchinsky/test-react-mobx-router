import { makeAutoObservable} from "mobx";
import { fetchPost, postCount } from "../api/getPosts";

function PostStore() {

    return makeAutoObservable({
        posts:[],
        postCount,
        async getPostsAction(currentPage:number) {
            try {
                const res = await fetchPost(currentPage)
                this.posts = res;
            } catch {
            }
        }
    });
}


export default PostStore;
