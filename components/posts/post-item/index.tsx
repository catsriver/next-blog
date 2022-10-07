import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'

interface PostType {
    title: string
    image: string
    excerpt: string
    date: Date
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

    return (
        <li className={styles.post}>
            <Link href={''}>
                <a>
                    <div className={styles.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
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
