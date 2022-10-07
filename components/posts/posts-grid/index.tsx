import { FC } from 'react'
import PostItem from '../post-item'

import styles from './styles.module.css'

interface PostsGridProps {
    posts: []
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
    return (
        <ul className={styles.grid}>
            {posts.map((post) => (
                <PostItem />
            ))}
        </ul>
    )
}

export default PostsGrid
