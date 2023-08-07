import posts from './Posts.module.css'


export const Posts = () => {
    return (
        <div>My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <div className={posts.item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuou0stDfW_-B1-zCs0-Ht8Zy51pBirWkFg&usqp=CAU"/>
                        Post 1
                    </div>
                    <div className={posts.item}>Post 2</div>
                </div>
            </div>
    )
}