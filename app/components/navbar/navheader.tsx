import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import Link from "../global/link";

interface NavHeaderProps {
    setVisible?: (visible: boolean) => void;
}

export default function NavHeader(props: NavHeaderProps) {
    return (
        <div className="p-4">
            <div className="text-2xl font-semibold mb-4 flex flex-row justify-between items-center">
                <div>Lucas Joel</div>
                {props.setVisible && (
                    <button
                        onClick={() => props.setVisible!(false)}
                        className="hidden md:block p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-700 transition-colors"
                        aria-label="Close menu"
                    >
                        <CgClose className="text-xl" />
                    </button>
                )}
            </div>
            <div className="space-y-1 text-sm text-neutral-400 mb-4">
                <div>CS @ <Link href="https://www.mcmaster.ca/">McMaster University</Link></div>
                <div>Incoming SWE Intern @ <Link href="https://tendermore.com">Tendermore</Link></div>
            </div>
            <div className="flex flex-row gap-4 text-sm">
                <Link href="https://www.linkedin.com/in/lucas-joel/">Linkedin</Link>
                <Link href="https://github.com/LucasJoel1">Github</Link>
                <Link href="mailto:contact@lucasjoel.com">Email</Link>
            </div>
        </div>
    )
}