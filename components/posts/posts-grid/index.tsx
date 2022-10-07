import { FC } from 'react'
import PostItem, { PostType } from '../post-item'

import styles from './styles.module.css'

interface PostsGridProps {
    posts: PostType[]
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
    return (
        <ul className={styles.grid}>
            {posts.map((post) => (
                <PostItem post={post} key={post.slug} />
            ))}
        </ul>
    )
}

export default PostsGrid
