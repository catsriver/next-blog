import { GetStaticProps, NextPage } from 'next/types'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../helper/posts-util'

interface HomePageProp {
    posts: []
}

const HomePage: NextPage<HomePageProp> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>小新的博客</title>
                <meta
                    name='description'
                    content='I post about programming and web development.'
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    )
}

export default HomePage

export const getStaticProps: GetStaticProps = () => {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        }
    }
}
