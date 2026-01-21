import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    href?: string
    selected?: boolean
    stretch?: boolean
    className?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <a href={props.href} onClick={props.onClick} className={"mb-2 text-center block px-4 py-2 hover:bg-neutral-700 rounded transition-colors " + (props.selected ? "bg-neutral-600 " : "bg-neutral-800 ") + (props.stretch ? "w-full " : "") + props.className} >
            { props.children }
        </a>
    )
}