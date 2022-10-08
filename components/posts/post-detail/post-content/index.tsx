import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

import PostHeader from '../post-header/index'
import styles from './styles.module.css'
import { PostType } from '../../post-item/index'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent: FC<{ post: PostType }> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customComponents = {
        // 替换img标签为Image
        p(p: any) {
            const { node } = p

            if (node.children[0].tagName === 'img') {
                const image = node.children[0]
                const { src, alt } = image.properties

                return (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${src}`}
                            alt={alt}
                            width={600}
                            height={300}
                        />
                    </div>
                )
            }
            return <p>{p.children}</p>
        },

        code(code: CodeProps) {
            const { children, className } = code

            const lang = className?.replace('language-', '')

            return (
                <SyntaxHighlighter language={lang} style={atomDark}>
                    {children as []}
                </SyntaxHighlighter>
            )
        }
    }

    return (
        <article className={styles.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown components={customComponents}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent
