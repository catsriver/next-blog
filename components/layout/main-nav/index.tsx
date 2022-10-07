import Link from 'next/link'
import { FC } from 'react'

import Logo from '../logo'
import styles from './styles.module.css'

const MainNav: FC = () => {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav
