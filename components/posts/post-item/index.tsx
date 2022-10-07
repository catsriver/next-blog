import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'

export interface PostType {
    content: string
    title: string
    image: string
    excerpt: string
    date: string
    slug: string
}

interface PostItemProps {
    post: PostType
}

const PostItem: FC<PostItemProps> = ({ post }) => {
    const { title, image, excerpt, date, slug } = post

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout='responsive'
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem
