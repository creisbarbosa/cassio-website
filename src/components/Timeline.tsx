import Image from "next/image"
import TimeLine from "../../public/timeline.svg"
import TimeLineMobile from "../../public/timeline_mobile.svg"

export default function Timeline() {

  const jobTimeLine = [
    {
      id: 1,
      company: "Lamparina Design",
      role: "Designer Intern",
      period: "2011 - 2012",
      text: "At Lamparina i started my career as a Graphic Designer.Here i was able to lead teams in the creation of visual identities and graphic components for small companies.",
      firstSkills: "Branding / Design Thinking / Marketing",
      secondSkills: "Illustrator / Photoshop"
    },
    {
      id: 2,
      company: "Regional Board of Administration",
      role: "Designer Intern",
      period: "2015 - 2016",
      text: "At CRA-DF, I was the responsible Layout Designer for creating the council's bi-monthly newspapers, graphic pieces for social media, email marketing, and institutional videos.",
      firstSkills: "Newspaper Layout / Video editing / Social media",
      secondSkills: "InDesign / After Effects"
    },
    {
      id: 3,
      company: "Manufatura Creative",
      role: "Designer Inter",
      period: "2016 - 2017",
      text: "As a design intern, I assisted the office in creating visual identities, branding, photography, video, set design, furniture design, and small products. I was also responsible for creating websites and digital content.",
      firstSkills: "Web design / Photo / Photo editing / Branding / UX",
      secondSkills: "Adobe XD / Premier-Pro"
    },
    {
      id: 4,
      company: "Manufatura Creative",
      role: "Product Designer Jr",
      period: "2017 - 2018",
      text: "As a Designer, I worked on creating visual identities and web design for medium and large companies in the fashion, food, retail, and NGO companies. I was able to learn rapid prototyping for apps and web, user interview methods, UX writing, and sprint methodology.",
      firstSkills: "UX Writing / App design / UI design",
      secondSkills: "Sprints / Prototype / Figma / Sketch"
    },
    {
      id: 5,
      company: "Artis Tecnologia",
      role: "Product Designer",
      period: "2019 - 2022",
      text: "As a Product Designer, I was responsible for the development of software and interfaces for medium to high complexity products for Neurosurgery, including wireframes and information architecture.",
      firstSkills: "UI Kit / Kanban / Shadowing / A-B Testing / UX Research / User interviews",
      secondSkills: "HTML / CSS / JavaScript / Git / Bootstrap"
    },
    {
      id: 6,
      company: "Peerdustry",
      role: "Product Designer / Front-end Dev Jr",
      period: "2022 - 2023",
      text: "At Peerdustry, I worked as a Product Designer and Front-end developer responsible for the restructuring of the B2B industrial machining company's  software.",
      firstSkills: "Front-end / Scrum / Product Management",
      secondSkills: "TypeScript / NodeJs / NPM / React / React Native / NextJs / StoryBook / Firebase / Vercel"
    },
  ]

  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="invisible h-0 overflow-hidden md:visible md:h-full">
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
                  <p className="text-white/80 mt-5 max-w-[25rem]">{job.text}</p>
                  <h3 className="text-cyan font-bold mt-3">New skills ↙</h3>
                  <p className="text-yellow mt-3 max-w-[25rem]">{job.firstSkills}</p>
                  <p className="text-yellow max-w-[25rem]">{job.secondSkills}</p>
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
                  <p className="text-white/80 mt-5 max-w-[25rem]">{job.text}</p>
                  <h3 className="text-cyan font-bold mt-3">Novas habilidades ↙</h3>
                  <p className="text-yellow mt-3">{job.firstSkills}</p>
                  <p className="text-yellow max-w-[25rem]">{job.secondSkills}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="md:invisible md:h-0 md:overflow-hidden">
        <div className="flex gap-6 items-start -mt-24">
          <Image src={TimeLineMobile} alt="" className="translate-y-3"/>
          <div className="flex flex-col gap-12 items-top">
            {jobTimeLine.map((job) => {
              return (
                <div
                key={job.id}
                className="text-white flex flex-col gap-2 basis-1/2 items-start"
                >
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 translate-y-3"
                  >
                    <circle cx="6" cy="6" r="6" fill="#0054FF"/>
                  </svg>
                  <h2 className="text-2xl font-bold">{job.company}</h2>
                  <strong className="text-sm font-normal text-white/60">{job.role}</strong>
                  <strong className="text-sm text-white/60">{job.period}</strong>
                  <p className="text-white/80 mt-5 max-w-[25rem]">{job.text}</p>
                  <h3 className="text-cyan font-bold mt-3">New skills ↙</h3>
                  <p className="text-yellow mt-3 max-w-[25rem]">{job.firstSkills}</p>
                  <p className="text-yellow max-w-[25rem]">{job.secondSkills}</p>
                </div>
              )
            })}``
          </div>
        </div>
      </div>
    </section>
  )
}