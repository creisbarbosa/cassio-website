import Image from "next/image";

import AcademicBg from '../../public/academic_bg.png'
import Timeline from "@/components/Timeline";
import Link from "next/link";

const lastProjects = [
  {
    company: "STUDIO CASSIO REIS",
    project: "Task Wall",
    title: "A simple to-do list application designed to make our daily tasks management experience seamless",
    date: "JAN 23",
    href: "https://github.com/creisbarbosa/task-wall",
    id: 1
  },
  {
    company: "PEERDUSTRY",
    project: "Peer Website",
    title: "Website developed with React and NextJs and designed in Figma",
    date: "DEZ 22",
    href: "https://github.com/creisbarbosa/peer-website",
    id: 2
  },
  {
    company: "Artis Tecnologia",
    project: "Eximius",
    title: "Set of neurosurgical instruments designed for minimally invasive procedures",
    date: "JUL 20",
    href: "https://www.behance.net/gallery/130132073/Surgical-Navigation-Instrument-Set",
    id: 3
  },
]

export default function Home() {
  return (
      <main>
        <section>
          <div className="flex flex-col xl:flex-row px-6 mx-auto xl:max-w-7xl py-6 xl:py-20 w-full relative gap-16">
            <div className="basis-1 xl:basis-1/2 flex items-center">

              <div className="space-y-8 xl:space-y-16">
                <h1 className="text-[2rem] xl:text-5xl xl:leading-snug">
                  Olá! <br />
                  Sou Cassio Reis <br />
                  &lsaquo;<b>Product Designer</b> /&rsaquo; <br />
                  &lsaquo;<b>Front-end Dev</b> /&rsaquo; <br />
                  de Brasília - DF
                </h1>
                <p className="text-white/70 text-base leading-normal"><b className="text-white">Sou Designer de Produtos de formação e venho me aperfeiçoando como Desenvolvedor Front-end.</b> Já pude atuar em diversas frentes e projetos relacionados a setores da indústria como varejo, hospitalar, alimentos e organizações públicas. Atualmente faço parte do time da Peerdustry como Designer Sr. e Front-end Jr.</p>
              </div>
            </div>

            <div className="basis-1 xl:basis-1/2 flex items-center justify-center">

              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-8 xl:top-24 right-8 xl:right-24">
                <circle cx="31" cy="31" r="31" fill="#0054FF"/>
              </svg>

              <svg width="360" height="361" viewBox="0 0 360 361" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow relative">
                <path d="M193.017 115.06L180 0.5L166.983 115.06L111.117 14.2018L142.931 125.023L52.7208 53.2208L124.523 143.431L13.7016 111.617L114.56 167.483L0 180.5L114.56 193.517L13.7016 249.383L124.523 217.569L52.7208 307.779L142.931 235.977L111.117 346.798L166.983 245.94L180 360.5L193.017 245.94L248.883 346.798L217.069 235.977L307.279 307.779L235.477 217.569L346.298 249.383L245.44 193.517L360 180.5L245.44 167.483L346.298 111.617L235.477 143.431L307.279 53.2208L217.069 125.023L248.883 14.2018L193.017 115.06Z" fill="#FF9600"/>

              </svg>
            </div>
          </div>
        </section>

        <section className="px-6 pt-2 xl:pt-16 pb-8 xl:pb-28 space-y-16 relative overflow-hidden">

          <Image src={AcademicBg} alt="" className="absolute h-full w-full object-cover"/>
          <div className="xl:px-6 mx-auto xl:max-w-7xl">
            <div className="flex flex-row items-center gap-4 relative">
              <h2 className="text-2xl xl:text-4xl font-bold">Formação Acadêmica</h2>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1571 10.1831L16 0L14.8429 10.1831L9.87706 1.21794L12.705 11.0687L4.68629 4.68629L11.0687 12.705L1.21792 9.87708L10.1831 14.843L0 16L10.1831 17.1571L1.21792 22.1229L11.0687 19.295L4.68629 27.3137L12.705 20.9313L9.87706 30.7821L14.8429 21.8169L16 32L17.157 21.8169L22.1229 30.7821L19.295 20.9313L27.3137 27.3137L20.9313 19.295L30.7821 22.1229L21.8169 17.1571L32 16L21.8169 14.8429L30.7821 9.87708L20.9313 12.705L27.3137 4.68629L19.295 11.0687L22.1229 1.21794L17.1571 10.1831Z" fill="#FF9600"/>
              </svg>
            </div>

            <div className="space-y-2 relative">
              <h3 className="text-xl xl:text-2xl font-semibold xl:font-bold">Desenho Industrial</h3>
              <strong className="text-gray-400">2011-2016</strong>
              <p className="pt-3 max-w-md">Curso de bacharelado em Desenho Industrial com foco em Projeto de Produto concluído pela  Universidade de Brasília.</p>
            </div>
          </div>
        </section>

        <section className="px-6 mx-auto xl:max-w-7xl pt-8 pb-32 xl:py-32 space-y-16 relative">
          <div className="bg-cyan pt-6 pl-6 pb-12 pr-8 xl:pr-36 mb-12 rounded-2xl max-w-lg relative xl:absolute xl:-top-40 xl:right-16 transition-all">
            <div className="flex flex-col justify-start space-y-4">
              <h3 className="uppercase font-bold text-xs">Últimos projetos</h3>
              <div className="space-y-4 xl:space-y-10">
                  {lastProjects.map((project) => {
                    return (
                      <div 
                        key={project.id}
                        className="flex flex-row gap-3 pb-6 mx-auto max-w-md border-b border-solid border-yellow"
                      >
                        <strong className="h-[22px] aspect-square bg-background rounded-2xl items-center justify-center flex m-1 text-sm font-light">{project.id}</strong>
                        <div className="flex flex-col gap-2">
                          <Link href={project.href} className="font-semibold leading-tight text-xl hover:text-yellow cursor-pointer transition-colors">{project.project} - {project.title}</Link>
                          <strong className="font-light text-xs uppercase"><b className="font-medium">{project.company}</b> {project.date}</strong>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>      
          </div>

          <div className="flex flex-col gap-8 pt-4 relative" id="timeline">
            <div className="flex flex-row items-center gap-4">
              <h2 className="text-2xl xl:text-4xl font-bold">Experiência</h2>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#0054FF"/>
              </svg>
            </div>
            <p className="md:max-w-xl md:text-xl font-light text-white/90">Sei compreender necessidades, descobrir dores e propor soluções relevantes que elevam as experiências enquanto auxiliam os objetivos estratégicos da empresa.</p>
          </div>

          <Timeline/>
          
        </section>

      </main>
  )
}
 