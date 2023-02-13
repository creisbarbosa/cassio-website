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
import ArtisSystem from "../../public/artis_system.png"
import PeerSystem from "../../public/peersystem.png"
import IgniteTimer from "../../public/ignite-timer.png"
import CRBMoney from "../../public/crbmoney.png"
import Eximius from "../../public/eximius.png"
import Hive from "../../public/hive.png"
import Lavi from "../../public/lavi.png"
import Vertice from "../../public/vertice.png"

import Cover from "../../public/work_bg.png"

const projects = [
  {
    id: 1,
    title: "Paper Pulp Pencil Case",
    href: "https://www.behance.net/gallery/92088067/Paper-pulp-pencil-case",
    cover: PaperCase,
    tag: "Industrial Design"
  },
  {
    id: 2,
    title: "Surgical Instrument Set",
    href: "https://www.behance.net/gallery/130132073/Surgical-Navigation-Instrument-Set",
    cover: Instruments,
    tag: "Industrial Design"
  },
  {
    id: 3,
    title: "Namoradeira",
    href: "https://www.behance.net/gallery/54382249/Namoradeira",
    cover: Namoradeira,
    tag: "Industrial Design"
  },
  {
    id: 4,
    title: "Peerdustry Website",
    href: "https://github.com/creisbarbosa/peer-website",
    cover: PeerWeb,
    tag: "Front-end"
  },
  {
    id: 5,
    title: "Task Wall",
    href: "https://github.com/creisbarbosa/task-wall",
    cover: TaskWall,
    tag: "Front-end"
  },
  {
    id: 6,
    title: "Net Car Show",
    href: "https://www.figma.com/file/DHjVq7AxbrBk37RrbBZAva/NetCarShow?node-id=0%3A1&t=oAR9ha8YJA8l6MD5-0",
    cover: NetCarShow,
    tag: "UI Design"
  },
  {
    id: 7,
    title: "Cassio Website",
    href: "https://github.com/creisbarbosa/cassio-website",
    cover: CassioWeb,
    tag: "Front-end"
  },
  {
    id: 8,
    title: "Artis Sonatus",
    href: "https://www.figma.com/proto/THvwqXHq5KDUgcYva82X5G/Artis---Sonatus?page-id=0%3A1&node-id=712%3A1348&viewport=875%2C-58%2C0.09&scaling=scale-down-width&starting-point-node-id=712%3A1348&show-proto-sidebar=1&hide-ui=1",
    cover: ArtisSonatus,
    tag: "UX"
  },
  {
    id: 9,
    title: "Peer System",
    href: "https://www.figma.com/proto/yeOdmOhZnGNKpSMI0xoyKN/Peerdustry's-Design-System?page-id=874%3A1130&node-id=1713%3A1078",
    cover: PeerSystem,
    tag: "Design System"
  },
  {
    id: 10,
    title: "Ignite Timer",
    href: "https://github.com/creisbarbosa/ignite-timer/",
    cover: IgniteTimer,
    tag: "Front-end"
  },
  {
    id: 11,
    title: "Artis System",
    href: "https://www.figma.com/file/NDtGP4k4w2LE9Coss2ADMO/Artis-Design-Systyem?node-id=0%3A1&t=cbQ0wMe4oQhL4XYI-1",
    cover: ArtisSystem,
    tag: "Design System"
  },
  {
    id: 12,
    title: "CRB Money",
    href: "https://github.com/creisbarbosa/crb-money",
    cover: CRBMoney,
    tag: "Front-end"
  },
  {
    id: 13,
    title: "Eximius - Neurosurgery System",
    href: "https://www.figma.com/proto/hvzYQ1pfqv9PGBU79KgzfQ/Eximius?page-id=0%3A1&node-id=0%3A145&viewport=16060%2C367%2C0.43&scaling=contain&starting-point-node-id=0%3A453",
    cover: Eximius,
    tag: "UX"
  },
  {
    id: 14,
    title: "Hive - Dating App",
    href: "https://www.figma.com/proto/XuVYrq5rujQqDrVML7kavs/Hive---Aplicativo?page-id=302%3A1772&node-id=302%3A2047&viewport=825%2C480%2C0.05&scaling=contain&starting-point-node-id=302%3A2047",
    cover: Hive,
    tag: "UX"
  },
  {
    id: 15,
    title: "Lavi - Raw for good",
    href: "https://www.figma.com/proto/JGTxYb5ySgoVyiHuVgxmDK/Lavi?page-id=0%3A1&node-id=1%3A303&viewport=6070%2C498%2C0.28&scaling=contain&starting-point-node-id=1%3A303",
    cover: Lavi,
    tag: "UX"
  },
  {
    id: 16,
    title: "Vertice - Cafés especiais",
    href: "https://www.figma.com/file/Wb0TqrLoH4gPy97fDgYn1u/V%C3%A9rtice?node-id=0%3A1&t=jeWogKUzfTqKXQWB-1",
    cover: Vertice,
    tag: "UI"
  },
]

export default function Works() {
  return (
    <section>
      <div className="flex flex-col px-6 mx-auto xl:max-w-7xl py-6 xl:py-20 gap-12 lg:gap-16">
        <div className="min-h-screen pb-3">

          <strong className="bg-white/10 px-4 py-2 rounded-[60px]">UX Cases</strong>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 xl:grid-cols-4 mt-8 mb-16">
            {projects.map(project => {
              if (project.tag.includes("UX"))
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  target="blank"
                  className="h-52 cursor-pointer rounded-md border border-white/20 relative group transition-all overflow-hidden">
                  <Image src={project.cover} alt="" className="absolute object-cover"/>
                  <Image src={Cover} alt="" className="h-full w-full absolute object-cover lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity" />
                  <h2 className="absolute bottom-3 text-base font-semibold left-4 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">{project.title}</h2>
                </Link>
              )
            })}
          </div>

          <strong className="bg-white/10 px-4 py-2 rounded-[60px]">Design Systems</strong>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 xl:grid-cols-4 mt-8 mb-16">
            {projects.map(project => {
              if (project.tag.includes("Design System"))
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  target="blank"
                  className="h-52 cursor-pointer rounded-md border border-white/20 relative group transition-all overflow-hidden">
                  <Image src={project.cover} alt="" className="absolute object-cover"/>
                  <Image src={Cover} alt="" className="h-full w-full absolute object-cover lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity" />
                  <h2 className="absolute bottom-3 text-base font-semibold left-4 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">{project.title}</h2>
                </Link>
              )
            })}
          </div>

          <strong className="bg-white/10 px-4 py-2 rounded-[60px]">Front-end dev + UI Design</strong>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 xl:grid-cols-4 mt-8 mb-16">
            {projects.map(project => {
              if (project.tag.includes("Front"))
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  target="blank"
                  className="h-52 cursor-pointer rounded-md border border-white/20 relative group transition-all overflow-hidden">
                  <Image src={project.cover} alt="" className="absolute object-cover"/>
                  <Image src={Cover} alt="" className="h-full w-full absolute object-cover lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity" />
                  <h2 className="absolute bottom-3 text-base font-semibold left-4 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">{project.title}</h2>
                </Link>
              )
            })}
          </div>

          <strong className="bg-white/10 px-4 py-2 rounded-[60px]">UI Design</strong>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 xl:grid-cols-4 mt-8 mb-16">
            {projects.map(project => {
              if (project.tag.includes("UI"))
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  target="blank"
                  className="h-52 cursor-pointer rounded-md border border-white/20 relative group transition-all overflow-hidden">
                  <Image src={project.cover} alt="" className="absolute object-cover"/>
                  <Image src={Cover} alt="" className="h-full w-full absolute object-cover lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity" />
                  <h2 className="absolute bottom-3 text-base font-semibold left-4 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">{project.title}</h2>
                </Link>
              )
            })}
          </div>

          <strong className="bg-white/10 px-4 py-2 rounded-[60px]">Industrial Design</strong>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 xl:grid-cols-4 mt-8 mb-16">
            {projects.map(project => {
              if (project.tag.includes("Industrial Design"))
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  target="blank"
                  className="h-52 cursor-pointer rounded-md border border-white/20 relative group transition-all overflow-hidden">
                  <Image src={project.cover} alt="" className="absolute object-cover"/>
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