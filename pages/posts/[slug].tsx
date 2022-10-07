import { NextPage, GetStaticProps, GetStaticPaths } from 'next/types'

import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../helper/posts-util'
import { PostType } from '../../components/posts/post-item'

const PostDetailPage: NextPage<{ post: PostType }> = ({ post }) => {
    return <PostContent post={post} />
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
    const postFilenames = getPostsFiles()

    const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''))

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: true
    }
}
