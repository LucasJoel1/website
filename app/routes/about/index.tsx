import Card from "../../components/global/card";
import Link from "../../components/global/link";

export default function AboutPage() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      <div className="p-8 border-b border-neutral-800">
        <div className="md:ml-4">
          <h1 className="text-5xl font-bold mb-3 text-neutral-100">About Me</h1>
          <p className="text-xl text-neutral-400">What I do</p>
        </div>
      </div>

      <div className="w-full p-8 space-y-6 flex-1">
        <div className="md:ml-4">
          <Card name="Hey There! 👋">
            <div className="text-neutral-400 space-y-3">
              <p>
                I'm Lucas, a software developer and tech enthusiast based in
                Ontario, Canada. I have been programming since I was 13 years
                old and am currently studying computer science at McMaster
                University.
              </p>
              <p>
                I have experience in multiple fields of programming from web
                development, low level programming, embedded systems, and
                robotics where I am the former lead programmer for{" "}
                <Link href="https://2056.ca">FIRST Robotics Team 2056</Link>. I
                currently have multiple projects I am working on such as Tally,
                a calendar backend and openmc-panel, a web panel for Minecraft
                that uses minimal resources. You can learn more about projects
                such as those on my <Link href="/projects">projects</Link> page.
              </p>
            </div>
          </Card>
        </div>

        <div className="md:ml-4 grid gap-6">
          <Card name="The Technologies I Use">
            <div className="text-neutral-400 space-y-3 text-sm">
              <p>
                For my projects I tend to fall to Typescript with React for
                frontend and either NextJs or for more performant projects, go.
                For low level, robotics and embedded systems, my go to is always
                C/C++. As for my development environment I always have used
                VSCode though I have been trying the{" "}
                <Link href="https://zed.dev">Zed</Link> editor and have been
                happy so far just because that is what I am used to, though am
                open to trying other code editors. My personal workstation runs
                Fedora Linux however I regularly use a MacBook Air for
                programming and school work.
              </p>
            </div>
          </Card>
        </div>

        <div className="md:ml-4">
          <Card name="What's Next?">
            <div className="text-neutral-400 space-y-3">
              <p>
                In May I will be joining the team at{" "}
                <Link href="https://tendermore.com">Tendermore</Link> in San
                Francisco as a Software Engineer Intern!
              </p>
              <p>
                I am also hoping to finish my project, Tally, and begin building
                other projects using it as a base.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
