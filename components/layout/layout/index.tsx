import { FC } from 'react'

import MainNav from '../main-nav'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <MainNav />
            <main>{children}</main>
        </>
    )
}

export default Layout
