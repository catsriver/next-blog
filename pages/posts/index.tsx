import { NextPage } from 'next/types'

import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
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

const AllPostsPage: NextPage = () => {
    return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
