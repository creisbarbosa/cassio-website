import Image from "next/image";
import AcademicBg from '../../public/academic_bg.png'

export default function About() {
  return (
    <section className="w-full">
      <div className="flex flex-col px-6 mx-auto lg:max-w-7xl md:px-8 py-6 lg:py-12">
        <div className="max-w-4xl">
          <h1 className="font-bold text-2xl lg:text-4xl text-white pb-6">
            Design / Experiência + Programação / Front-end
          </h1>
          <h2 className="text-xl pb-4 border-b-2 border-cyan">
            Com experiência em ambas as áreas, posso entregar interfaces de alta qualidade e transformá-las em produtos funcionais.
          </h2>
          <p className="pt-12 pb-4 lg:pr-24 max-w-md">
            Sou designer de produtos e também programador front-end. Isso me permite trabalhar de forma eficiente e colaborar com equipes de desenvolvimento para garantir que o projeto atenda às necessidades dos usuários de forma clara e intuitiva.
          </p>
          <p className="py-4 lg:pl-12 max-w-md">
            Tenho experiência na busca da compreensão das necessidades dos usuários, empatizar, descobrir as dores e propor soluções relevantes que elevam a experiência enquanto auxiliam com os objetivos estratégicos da empresa. Essa abordagem me permite pensar na programação de forma coerente e lógica, implementar ajustes de forma hábil e focar no essencial sem abrir mão da identidade institucional. Isso também me ajuda a escrever código limpo e organizado, tornando mais fácil para os outros desenvolvedores entenderem e trabalharem com ele independentemente.
          </p>
        </div>
      </div>
    </section>
  )
}