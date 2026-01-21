import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Header from "../global/header"

interface BlogPostProps {
    postContents: string
}

export default function BlogPost(props: BlogPostProps) {
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Header />
            <div className="prose prose-invert max-w-none p-8 lg:w-2/3 xl:w-1/2 align-middle mx-auto">
                <Markdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{
                                        backgroundColor: 'transparent',
                                        borderRadius: '0.375rem',
                                        margin: 0,
                                        padding: 0,
                                    }}
                                    codeTagProps={{
                                        style: {
                                            backgroundColor: 'transparent',
                                        }
                                    }}
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                >
                    {props.postContents}
                </Markdown>
            </div>
        </div>
    )
}