import type { ReactNode } from "react"
import NavHeader from "./navheader"
import NavBody from "./navbody"
import NavFooter from "./navfooter"

export default function Navbar() {
    return (
        <nav className="h-dvh w-84 bg-neutral-900 border-r border-neutral-800 flex flex-col justify-between">
            <div className="flex flex-col">
                <NavHeader />
                <div className="border-t border-neutral-800"></div>
                <NavBody />
            </div>
            <NavFooter />
        </nav>
    )
}