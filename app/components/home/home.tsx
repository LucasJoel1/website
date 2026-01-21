import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import Card from "../global/card";
import Header from "../global/header";
import Link from "../global/link";

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <div className="p-8 border-b border-neutral-800">
                <h1 className="text-5xl font-bold mb-3 text-neutral-100">
                    Lucas Joel
                </h1>
                <p className="text-xl text-neutral-400 mb-4">
                    Computer Science Student & Software Developer
                </p>
                <p className="text-base text-neutral-500 max-w-2xl">
                    Building applications and always learning. Currently studying CS at McMaster University 
                    with a focus on full-stack development.
                </p>
            </div>

            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 grow">
                <Card name="Latest Project" href="/projects">
                    <div className="text-sm text-neutral-400">
                        <p className="mb-2">Tally Calendar Backend</p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-neutral-800 rounded text-xs">C++</span>
                            <span className="px-2 py-1 bg-neutral-800 rounded text-xs">SQLite</span>
                        </div>
                    </div>
                </Card>

                <Card name="Blog Activity" href="/blog">
                    <div className="space-y-2 text-sm text-neutral-400">
                        <div className="flex flex-row justify-between">
                            <Link newTab={false} href="/blog/post?article=hey-im-lucas">👋 Hey! I'm Lucas</Link>
                            <span className="text-neutral-600 font-medium">January 21st, 2026</span>
                        </div>
                    </div>
                </Card>

                <Card name="Interests">
                    <ul className="space-y-1 text-sm text-neutral-400">
                        <li>Backend Web Development</li>
                        <li>Low Level Programming</li>
                        <li>Pattern Matching</li>
                    </ul>
                </Card>

                <Card name="Favorite Languages & Technologies">
                    <div className="flex gap-2 flex-wrap text-sm">
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs">C++</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs">TypeScript</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs">Go</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs">Linux</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs">React</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs">Node.js</span>
                    </div>
                </Card>

                <Card name="Education">
                    <ul className="space-y-1 text-sm text-neutral-400">
                        <li className="flex flex-row justify-between">
                            <div className="text-neutral-400">Institution</div>
                            <div className="text-neutral-500">McMaster University</div>
                        </li>
                        <li className="flex flex-row justify-between">
                            <div className="text-neutral-400">Degree</div>
                            <div className="text-neutral-500">BASc in Computer Science</div>
                        </li>
                        <li className="flex flex-row justify-between">
                            <div className="text-neutral-400">Year</div>
                            <div className="text-neutral-500">1st</div>
                        </li>

                    </ul>
                </Card>

                <Card name="What I Use">
                    <div className="text-sm text-neutral-400">
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-neutral-800 rounded text-xs">VS Code</span>
                            <span className="px-2 py-1 bg-neutral-800 rounded text-xs">Linux</span>
                            <span className="px-2 py-1 bg-neutral-800 rounded text-xs">Git</span>
                            <span className="px-2 py-1 bg-neutral-800 rounded text-xs">Bash</span>
                        </div>
                    </div>
                </Card>

            </div>

            <div className="w-full p-8 border-t border-neutral-800 bg-neutral-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-3 text-neutral-100">
                        Let's Work Together
                    </h2>
                    <p className="text-neutral-400 mb-6">
                        I'm always interested in connecting with like minded individuals and working on interesting projects. 
                        Feel free to reach out if you would like to connect or collaborate.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="mailto:contact@lucasjoel.com">
                            <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded transition-all border border-neutral-700">
                                Get in Touch
                            </button>
                        </a>
                        <a href="https://github.com/LucasJoel1">
                            <button className="px-6 py-3 bg-transparent hover:bg-neutral-800 text-neutral-100 rounded transition-all border border-neutral-700">
                                View GitHub
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}