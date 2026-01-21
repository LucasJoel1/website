import type { ReactNode } from "react";

interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    newTab?: boolean;
}

export default function Link(props: LinkProps) {
    const openNewTab = props.newTab === (false || undefined)
    return (
        <a target={openNewTab ? "_blank" : "_self"} href={props.href} className={"font-bold text-neutral-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-neutral-500 hover:after:w-full after:transition-all after:duration-300 " + (props.className)}>
            {props.children}
        </a>
    )
}