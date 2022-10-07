import { NextPage } from 'next/types'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const HomePage: NextPage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts />
        </>
    )
}

export default HomePage
