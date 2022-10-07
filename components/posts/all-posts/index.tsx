import { FC } from 'react'

import styles from './styles.module.css'
import PostsGrid, { PostsGridProps } from '../posts-grid'

const AllPosts: FC<PostsGridProps> = ({ posts }) => {
    return (
        <section className={styles.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default AllPosts
