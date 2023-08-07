import post from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={post.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuou0stDfW_-B1-zCs0-Ht8Zy51pBirWkFg&usqp=CAU" />
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}