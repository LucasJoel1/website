import type { ReactNode } from "react";

interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function Link(props: LinkProps) {
    return (
        <a target="_blank" href={props.href} className={"font-bold text-neutral-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-neutral-500 hover:after:w-full after:transition-all after:duration-300 " + (props.className)}>
            {props.children}
        </a>
    )
}