import Image from "next/image";
import Link from "next/link";

import PaperCase from "../../public/paper_case.jpg"
import Instruments from "../../public/instruments.jpg"
import Namoradeira from "../../public/chair.webp"
import PeerWeb from "../../public/peer_website.png"
import TaskWall from "../../public/taskwall.jpg"
import NetCarShow from "../../public/netcarshow.png"
import CassioWeb from "../../public/cassioweb.png"
import ArtisSonatus from "../../public/sonatus.png"
import PeerSystem from "../../public/peersystem.png"
import IgniteTimer from "../../public/ignite-timer.png"

import Cover from "../../public/work_bg.png"

const projects = [
  {
    id: 1,
    title: "Paper Pulp Pencil Case",
    href: "https://www.behance.net/gallery/92088067/Paper-pulp-pencil-case",
    cover: PaperCase,
  },
  {
    id: 2,
    title: "Surgical Instrument Set",
    href: "https://www.behance.net/gallery/130132073/Surgical-Navigation-Instrument-Set",
    cover: Instruments,
  },
  {
    id: 3,
    title: "Namoradeira",
    href: "https://www.behance.net/gallery/54382249/Namoradeira",
    cover: Namoradeira,
  },
  {
    id: 4,
    title: "Peerdustry Website",
    href: "https://github.com/creisbarbosa/peer-website",
    cover: PeerWeb,
  },
  {
    id: 5,
    title: "Task Wall",
    href: "https://github.com/creisbarbosa/task-wall",
    cover: TaskWall,
  },
  {
    id: 6,
    title: "Net Car Show",
    href: "https://www.figma.com/file/DHjVq7AxbrBk37RrbBZAva/NetCarShow?node-id=0%3A1&t=oAR9ha8YJA8l6MD5-0",
    cover: NetCarShow,
  },
  {
    id: 7,
    title: "Cassio Website",
    href: "https://github.com/creisbarbosa/cassio-website",
    cover: CassioWeb,
  },
  {
    id: 8,
    title: "Artis Sonatus",
    href: "https://www.figma.com/proto/THvwqXHq5KDUgcYva82X5G/Artis---Sonatus?node-id=232%3A1348&starting-point-node-id=232%3A1348&scaling=scale-down",
    cover: ArtisSonatus,
  },
  {
    id: 9,
    title: "Peer System",
    href: "https://www.figma.com/file/icX6rMxt660SsV9a1C8bq9/%F0%9F%8F%AD-Peer-System?t=dFWTe8yGJBSOPuxi-6",
    cover: PeerSystem,
  },
  {
    id: 10,
    title: "Ignite Timer",
    href: "https://github.com/creisbarbosa/ignite-timer/",
    cover: IgniteTimer,
  },
]

export default function Works() {
  return (
    <section>
      <div className="flex flex-col px-6 mx-auto xl:max-w-7xl py-6 xl:py-20 gap-12 lg:gap-16">
        <div className="min-h-screen pb-3">
          <div className="flex flex-col gap-8 xl:grid xl:grid-cols-4">
            {projects.map(project => {
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  target="blank"
                  className="h-52 cursor-pointer rounded-md border border-white/20 overflow-hidden relative group transition-all">
                  <Image src={project.cover} alt="" className="absolute object-cover" />
                  <Image src={Cover} alt="" className="h-full w-full absolute object-cover lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity" />
                  <h2 className="absolute bottom-3 text-base font-semibold left-4 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">{project.title}</h2>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}