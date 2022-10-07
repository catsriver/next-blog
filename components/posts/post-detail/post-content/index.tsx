import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import PostHeader from '../post-header/index'
import styles from './styles.module.css'

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Gettting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2022-02-10',
    content: '# This is a first post'
}

const PostContent: FC = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

    return (
        <article className={styles.content}>
            <PostHeader image={imagePath} title={DUMMY_POST.title} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent
