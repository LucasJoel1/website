import { redirect, useSearchParams } from "react-router"
import { useEffect, useState } from "react"
import BlogPost from "~/components/blog/blogPost"

export default function BlogPostPage() {
    const [searchParams] = useSearchParams()
    const post = searchParams.get("article")
    const [markdown, setMarkdown] = useState<string>("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!post || post === "") {
            window.location.href = "/404"
            return
        }
        fetch(`/posts/${post}.md`)
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    window.location.href = "/404"
                    return
                }
                return res.text()
            })
            .then(text => {
                if (text) {
                    setMarkdown(text)
                    setLoading(false)
                }
            })
            .catch(() => {
                window.location.href = "/404"
            })
    }, [post])

    if (loading) {
        return <div>Loading...</div>
    }
    
    return (
        <BlogPost postContents={markdown} />
    )
}