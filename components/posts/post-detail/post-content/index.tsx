import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import PostHeader from '../post-header/index'
import styles from './styles.module.css'
import { PostType } from '../../post-item/index'

const PostContent: FC<{ post: PostType }> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customComponents = {
        // 替换img标签为Image
        img(img: any) {
            return (
                <Image
                    src={`/images/posts/${post.slug}/${img.src}`}
                    alt={img.alt}
                    width={600}
                    height={300}
                />
            )
        }
    }

    return (
        <article className={styles.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown components={customComponents}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent
