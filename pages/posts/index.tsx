import { NextPage, GetStaticProps } from 'next/types'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../helper/posts-util'

const AllPostsPage: NextPage<{ posts: [] }> = ({ posts }) => {
    return <AllPosts posts={posts} />
}

export default AllPostsPage

export const getStaticProps: GetStaticProps = () => {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        }
    }
}
