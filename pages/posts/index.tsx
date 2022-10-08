import Head from 'next/head'
import { NextPage, GetStaticProps } from 'next/types'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../helper/posts-util'

const AllPostsPage: NextPage<{ posts: [] }> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts!'
                />
            </Head>
            <AllPosts posts={posts} />
        </>
    )
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
