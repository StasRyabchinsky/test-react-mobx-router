import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import { getPosts } from "../api/getPosts";

// export type PostList = {
//     // id: number
//     // title: string
//     // body:string
//     // userId?:any
//     // tags?: any
//     // reactions?: any
//     limit?: number
//     posts: [{
//         id: number
//         title: string
//         body: string
//         userId?:any
//         tags?: any
//         reactions?: any
//     }]
//     total?: number
//     skip?: number
// }

class PostsStore {
    posts:[] = []
    // posts: PostList[] = [];

    constructor() {
        makeAutoObservable(this);
    };

    getPostsAction = async () => {
        try {
            const res = await getPosts()
            this.posts = res;
            // runInAction(() => {
            // })

        } catch {
        }
    }
    // async loadPosts() {
    //     const posts = await getPosts();

    //     this.posts = posts;
    // }
    // constructor() {
    //     makeObservable(this, {
    //         posts: observable,
    //         loadPosts: action,
    //     });
    // }
}



export {PostsStore};
