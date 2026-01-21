export default function Header() {
    return (
        <div className="border-b border-b-neutral-800 w-full h-fit flex flex-row justify-between bg-neutral-900">
            <img src="/public/img/mcmaster-logo.png" alt="" className="w-32 p-4" />
            <div className="mr-4 my-auto text-sm text-neutral-400">
                Full-stack developer
            </div>
        </div>
    )
}