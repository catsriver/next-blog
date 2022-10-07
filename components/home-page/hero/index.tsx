import Image from 'next/image'
import { FC } from 'react'

import styles from './styles.module.css'

const Hero: FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src='/images/site/xiaoxin.jpeg'
                    alt='An image showing 小新'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I&apos;m 野原新之助</h1>
            <p>
                I blog about web development - especially frontend frameworks
                like Angular or React.
            </p>
        </section>
    )
}

export default Hero
