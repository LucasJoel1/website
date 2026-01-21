import Button from "../global/button";

export default function NavBody() {
    return (
        <div className="p-4 flex flex-col gap-1">
            <Button stretch={true} selected={true} href="/">Home</Button>
            <Button stretch={true} selected={false} href="/about">About</Button>
            <Button stretch={true} selected={false} href="/resume">Resume</Button>
            <Button stretch={true} selected={false} href="/projects">Projects</Button>
            <Button stretch={true} selected={false} href="/blog">Blog</Button>
            <Button stretch={true} selected={false} href="/contact">Contact</Button>
        </div>
    )
}