import { NextPage } from 'next/types'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { PostType } from '../components/posts/post-item'

const DUMMY_POSTS: PostType[] = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Gettting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is a the React framework for production - it makes building fulltack React app and sites a breeze and ships with build-in SSR.',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Gettting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is a the React framework for production - it makes building fulltack React app and sites a breeze and ships with build-in SSR.',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Gettting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is a the React framework for production - it makes building fulltack React app and sites a breeze and ships with build-in SSR.',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Gettting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is a the React framework for production - it makes building fulltack React app and sites a breeze and ships with build-in SSR.',
        date: '2022-02-10'
    }
]

const HomePage: NextPage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    )
}

export default HomePage
