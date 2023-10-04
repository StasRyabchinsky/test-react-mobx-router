import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const SinglePostPage = () =>{
    const {id} = useParams(); 
    const [singlePost, setSinglePost] = useState(null);
    const goBack = () => window.history.back();

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data =>{
            setSinglePost(data)})
    }, [id])
    return(
        <div className="mainContainer"> 
            {
                singlePost && (
                    <>
                        <h2>{singlePost.title}</h2>
                        <p>{singlePost.body}</p>
                        <button onClick={goBack} className="buttonGoBack">Go Back</button>
                    </>
                )
            }
        </div>
    )
}
export {SinglePostPage}