import type { ReactNode } from "react";

interface BlogPostCadrdProps {
    name: string;
    description?: string;
    href?: string;
    date?: string;
}

export default function BlogPostCard(props: BlogPostCadrdProps) {
    const isClickable = props.href !== undefined;

    return (
        <a href={props.href} className={"w-full flex flex-row justify-between bg-neutral-900 rounded-lg p-4 " + (isClickable ? "border border-neutral-800 hover:bg-neutral-800 " : "")}>
            <div className="flex flex-col">
                <div className="font-bold text-neutral-300">{props.name}</div>
                {props.description && <div className="text-neutral-500">{props.description}</div>}
            </div>
            {props.date && <div className="flex flex-col align-text-bottom mt-auto text-neutral-600">
                    {props.date}
            </div>}
        </a>
    )
}