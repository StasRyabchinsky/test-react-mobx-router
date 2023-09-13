import { observer } from "mobx-react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {PostsStore} from "../store/posts-store"

// const postsStore = new PostsStore();
// const arr = Object.entries(postsStore)
const Homepage = observer((props) =>{

    // const [isPosts, setPosts] = useState([]);

    // const {getPostsAction, posts} = postsStore;

    useEffect(() => {
        console.log(props)
        // getPostsAction();
    },[]);
    // const arr = Object.entries(posts)


    // console.log(posts,"posts")


    // useEffect (() =>{
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data.posts)
    //         setPosts(data.posts)
    //     });
    // }, [])

    // const Post = () => {
        
    // }
    // useEffect(() => {
    //     postsStore.loadPosts()
    // }, [])
    // console.log(postsStore.posts)
    // console.log(Post)
    return(
        <div className="mainContainer"> 
            <h2>Homepage</h2>
            <div className="postsContainer">
                
                {/* <AntdList
                    bordered
                    dataSourse={PostsStore.posts}
                    renderItem={({id, title,body}) =>(
                        <AntdList.Item key={id}>
                            {title}
                        </AntdList.Item>
                    )}
                /> */}
                {/* {isPosts
                .filter((i, ind) => ind <= 4)
                .map(post => (
                    <div className="postContainer">
                        <Link key={post.id} to={`/home/${post.id}`} className="mainPost" >
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        </Link>
                    </div>
                ))
            } */}
            </div>
            
        </div>
       
    )
})
export {Homepage}