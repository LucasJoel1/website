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
        <a 
            target={openNewTab ? "_blank" : "_self"} 
            href={props.href} 
            className={"font-bold text-neutral-300 hover:text-white transition-all duration-300 bg-size-[0%_1px] hover:bg-size-[100%_1px] bg-linear-to-r from-neutral-500 to-neutral-500 bg-no-repeat bg-bottom-left " + (props.className)}
        >
            {props.children}
        </a>
    )
}