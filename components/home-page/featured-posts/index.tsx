import { FC } from 'react'

import styles from './styles.module.css'
import PostsGrid from '../../posts/posts-grid'
import { PostType } from '../../posts/post-item'

interface FeaturedPostsProps {
    posts: PostType[]
}

const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }) => {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts
