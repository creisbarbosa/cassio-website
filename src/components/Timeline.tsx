import Image from "next/image"
import TimeLine from "../../public/timeline.svg"

export default function Timeline() {

  const jobTimeLine = [
    {
      id: 1,
      company: "Lamparina Design",
      role: "Designer Estagiário",
      period: "2011 - 2017",
      text: "Na Lamparina comecei a atuar como Designer Gráfico. Pude liderar equipes na criação de identidades visuais e peças gráficas para médias e pequenas empresas aplicando métodos ágeis e design thinking no desenvolvimento de projetos de baixa e média complexidade.",
      firstSkills: "Desenvolvimento de Identidades Visuais / Design Thinking",
      secondSkills: "Adobe Illustrator / Photoshop"
    },
    {
      id: 2,
      company: "Conselho Regional de Adm",
      role: "Designer Estagiário",
      period: "2015 - 2016",
      text: "No CRA-DF, fui Diagramador responsável pela criação dos periódicos bimestrais do conselho, peças gráficas para redes sociais, email marketing e vídeos institucionais.",
      firstSkills: "Diagramação / Edição de vídeos",
      secondSkills: "Adobe InDesign / After Effects"
    },
    {
      id: 3,
      company: "Manufatura Creative",
      role: "Designer Estagiário",
      period: "2016 - 2017",
      text: "Como designer estagiário auxiliei o escritório na criação de identidades visuais, branding, fotografia, vídeo,  design de cenário, mobiliário e pequenos produtos. Fui responsável pela criação de websites e conteúdos digitais.",
      firstSkills: "Webdesign / Fotografia / Branding / UX",
      secondSkills: "Adobe XD / Adobe Premier-Pro"
    },
    {
      id: 4,
      company: "Manufatura Creative",
      role: "Designer de Produto Junior",
      period: "2017 - 2018",
      text: "Como Designer atuei na criação de identidades visuais e webdesign para médias e grandes empresas na indústria da moda, alimentação, varejo e ONGs. Pude aprender prototipação rápida para apps e web, métodos de entrevistas com usuários, UX writing  e metodologia de sprint.",
      firstSkills: "UX Writing / Design de Aplicativos / User Interface Design",
      secondSkills: "Metodologia de Sprints / Prototipação / Figma "
    },
    {
      id: 5,
      company: "Artis Tecnologia",
      role: "Designer de Produto Pleno",
      period: "2019 - 2022",
      text: "Designer de Produtos responsável pelo desenvolvimento de software e interfaces de produtos de média e alta complexidade para Neurocirurgias: wireframes, arquitetura de informação.",
      firstSkills: "UI Kit / Kanban / Shadowing / Testes A B / UX Research / Entrevistas com usuários",
      secondSkills: "HTML / CSS / JavaScript / Git / Bootstrap"
    },
    {
      id: 6,
      company: "Peerdustry",
      role: "Designer de Produto Pleno / Desenvolvedor Front-end Jr.",
      period: "desde 2022",
      text: "Na Peerdustry atuo como Designer de Produtos e Front-end dev responsável pela reestruturação do software  B2B de usinagem industrial.",
      firstSkills: "Programação Front-end / Scrum / Product Management",
      secondSkills: "TypeScript / NodeJs / NPM / React / React Native / NextJs / StoryBook / Firebase / Vercel"
    },
  ]

  return (
    <section className="relative pt-24">
      <div className="flex gap-2 lg:gap-16 items-top items-start justify-center">
        <div className="flex flex-col gap-32">
          {jobTimeLine.map((job) => {
            if (job.id % 2 !== 0)
            return (
              <div
              key={job.id}
              className="text-white flex flex-col gap-2 text-right basis-1/2 items-end"
              >
                <h2 className="text-2xl font-bold">{job.company}</h2>
                <strong className="text-sm font-normal text-white/60">{job.role}</strong>
                <strong className="text-sm text-white/60">{job.period}</strong>
                <p className="text-white/80 text-xs lg:text-base mt-5 max-w-[25rem]">{job.text}</p>
                <h3 className="text-cyan text-xs lg:text-base font-bold mt-3">Novas habilidades ↙</h3>
                <p className="text-cyan text-xs lg:text-base mt-3 max-w-[25rem]">{job.firstSkills}</p>
                <p className="text-cyan text-xs lg:text-base max-w-[25rem]">{job.secondSkills}</p>
              </div>
            )
          })}
        </div>

        <Image src={TimeLine} alt=""/>
          
        <div className="flex flex-col gap-28 pt-52">
          {jobTimeLine.map((job) => {
            if (job.id % 2 === 0)
            return (
              <div
              key={job.id}
              className="text-white flex flex-col gap-2 basis-1/2 py-8"
              >
                <h2 className="text-2xl font-bold">{job.company}</h2>
                <strong className="text-sm font-normal text-white/60">{job.role}</strong>
                <strong className="text-sm text-white/60">{job.period}</strong>
                <p className="text-white/80 text-xs lg:text-base mt-5 max-w-[25rem]">{job.text}</p>
                <h3 className="text-cyan text-xs lg:text-base font-bold mt-3">Novas habilidades ↙</h3>
                <p className="text-cyan text-xs lg:text-base mt-3">{job.firstSkills}</p>
                <p className="text-cyan text-xs lg:text-base max-w-[25rem]">{job.secondSkills}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}