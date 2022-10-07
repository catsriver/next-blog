import { GetStaticProps, NextPage } from 'next/types'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../helper/posts-util'

interface HomePageProp {
    posts: []
}

const HomePage: NextPage<HomePageProp> = ({ posts }) => {
    return (
        <>
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
