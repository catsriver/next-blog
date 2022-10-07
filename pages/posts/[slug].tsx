import { NextPage, GetStaticProps, GetStaticPaths } from 'next/types'

import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData } from '../../helper/posts-util'

const PostDetailPage: NextPage<{ post: [] }> = (post) => {
    return <PostContent />
}

export default PostDetailPage

export const getStaticProps: GetStaticProps = (context) => {
    const { slug } = context.params!

    const postData = getPostData(slug as string)

    return {
        props: {
            post: postData
        },
        revalidate: 60 * 10
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}
