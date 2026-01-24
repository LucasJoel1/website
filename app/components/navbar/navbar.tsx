import NavHeader from "./navheader"
import NavBody from "./navbody"
import NavFooter from "./navfooter"
import { CgClose } from "react-icons/cg"

interface NavbarProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

export default function Navbar(props: NavbarProps) {
    return (
        <nav className={`h-dvh bg-neutral-900 border-r border-neutral-800 transition-all duration-300 
            fixed z-50
            w-full md:w-84
            ${props.visible 
                ? 'translate-y-0' 
                : '-translate-y-full md:translate-y-0 md:-translate-x-full md:border-r-0'
            }`}>
            <div className="flex flex-col justify-between h-full w-full overflow-x-hidden whitespace-nowrap">
                <div className="flex flex-col">
                    <NavHeader setVisible={props.setVisible} />
                    <div className="border-t border-neutral-800"></div>
                    <NavBody setVisible={props.setVisible} />
                </div>
                <NavFooter />
            </div>
        </nav>
    )
}