import type { ReactNode } from "react"
import Divider from "./divider"

interface CardProps {
    name: string
    children?: ReactNode
    image?: string
    href?: string
}

export default function Card(props: CardProps) {
    const isClickable = props.href !== undefined;

    return (
        <a
            href={props.href}
            className={
                "h-full block bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden transition-all " +
                (isClickable ? "hover:border-neutral-700 hover:bg-neutral-900/80 cursor-pointer" : "")
            }
        >
            {props.image !== undefined &&
                <div className="w-full border-b border-neutral-800">
                    <img src={props.image} alt="" className="w-full object-cover" />
                </div>
            }

            <div className="p-4">
                <div className="text-lg font-semibold mb-3 text-neutral-200">
                    {props.name}
                </div>

                {props.children !== undefined &&
                    <div className="text-neutral-400">
                        {props.children}
                    </div>
                }
            </div>
        </a>
    )
}