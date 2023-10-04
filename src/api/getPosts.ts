const postCount = 10;

const fetchPost = async (currentPage:number) => {
    try {
        const postList = await fetch(`https://dummyjson.com/posts?limit=${postCount}&skip=${(currentPage == 1) ? 0 : ((currentPage - 1 ) + "0")}&&select=id,title,body`)
            .then(res => res.json())
            .then(data => {
                let i =data.posts
                return (i)
            })
        return postList
    } catch (e) {
        console.error(e)
    }
}
export {fetchPost, postCount }