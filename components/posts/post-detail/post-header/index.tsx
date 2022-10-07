import Image from 'next/image'
import { FC } from 'react'

import styles from './styles.module.css'

interface PostHeaderProp {
    title: string
    image: string
}

const PostHeader: FC<PostHeaderProp> = ({ title, image }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={100} />
        </header>
    )
}

export default PostHeader
