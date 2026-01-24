import Header from "../global/header";
import BlogPostCard from "./blogPostCard";

export default function Blog() {
    return (
        <div className="w-full max-h-screen flex flex-col">
            <div className="p-8 border-b border-neutral-800">
                <div className="md:ml-4">
                    <h1 className="text-5xl font-bold mb-3 text-neutral-100">
                        Welcome to the Blog!
                    </h1>
                    <p className="text-xl text-neutral-400 mb-4">
                        When I learn something new or find something interesting I will write about it here!
                    </p>
                </div>
            </div>

            <div className="overflow-y-scroll flex flex-col gap-2 p-4">
                <BlogPostCard name="👋 Hey! I'm Lucas" description="A little about me, my projects, and this blog." href="/blog/post?article=hey-im-lucas" date="January 21, 2026"/>
            </div>
        </div>
    )
}