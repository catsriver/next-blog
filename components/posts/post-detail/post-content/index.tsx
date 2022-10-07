import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import PostHeader from '../post-header/index'
import styles from './styles.module.css'
import { PostType } from '../../post-item/index'

const PostContent: FC<{ post: PostType }> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    return (
        <article className={styles.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent
