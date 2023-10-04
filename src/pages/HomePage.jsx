import { observer } from "mobx-react";
import { useEffect} from "react"
import { Link, useSearchParams } from "react-router-dom";
import { useRootStore } from "../store/root-store-provider";

const Homepage = observer(() =>{
    const {postStore} = useRootStore();
    const postCount = postStore.postCount
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(!searchParams.get("page")) {
            setSearchParams({page: 1});
        }
        postStore.getPostsAction(searchParams.get("page"));
    },[searchParams]);

    let pageNumber = [];
    for(let i = 1; i <= (150 / postCount); i++){
        pageNumber.push(i)
    }
    return(
    <div>
        <div className="mainContainer"> 
            <h2>Homepage</h2>
            <div className="postsContainer">
                {postStore.posts
                    .map(post => (
                        <div className="postContainer" key={post.id}>
                            <Link  to={`/home/${post.id}`} className="mainPost" >
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </Link>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="paginateContainer">
                {
                    pageNumber.map(number => (
                        <a  className={`paginateLink ${(searchParams.get("page") == number) ? "activePaginateLink" : ''}`}
                          key={number}
                          onClick={() => {
                                setSearchParams({page: number})
                            }}
                        >
                            {number}
                        </a>
                    ))
                }
        </div>
    </div>
    )
})
export {Homepage}