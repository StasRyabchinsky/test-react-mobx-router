const getPosts = async () => {
    try {
        const postss = await fetch('https://dummyjson.com/posts')
                            .then(res => res.json())
                            .then(data => {
                                let i =data.posts
                                // console.log(i,"data-posts")
                                return (i)

                            })
        // return posts.json();
        return postss
    } catch (e) {
        console.error(e)
    }
}
console.log(getPosts())
export {getPosts}