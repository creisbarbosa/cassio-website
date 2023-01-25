import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "phosphor-react";
import Background from "../../public/footer_bg.png"

export default function Footer() {

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="bg-cyan overflow-hidden relative">
      <Image src={Background} alt="" className="absolute h-full w-full object-cover"/>
      <div className="flex flex-row relative pt-12 pb-20 pl-6 pr-12 lg:py-32 lg:px-32 gap-6 xl:gap-8 xl:justify-between">
        <div className="flex flex-start">
          <ArrowUp size={32} weight="bold" className="text-white animate-bounce" onClick={backToTop}/>
        </div>
        <div className="flex flex-col w-full justify-end lg:flex-row gap-8">
          <ul className="flex flex-col gap-2 lg:text-right">
            <li className="border-b pb-3 border-white/20 lg:border-none lg:pb-0"><Link className="text-white hover:text-yellow text-xl font-extrabold transition-colors" href="https://www.linkedin.com/in/c%C3%A1ssio-reis-barbosa-0538968a/" target="blank">LinkedIn</Link></li>
            <li className="border-b pb-3 border-white/20 lg:border-none lg:pb-0"><Link className="text-white hover:text-yellow text-xl font-extrabold transition-colors" href="https://www.linkedin.com/in/c%C3%A1ssio-reis-barbosa-0538968a/" target="blank">GitHub</Link></li>
            <li className="border-b pb-3 border-white/20 lg:border-none lg:pb-0"><Link className="text-white hover:text-yellow text-xl font-extrabold transition-colors" href="https://www.linkedin.com/in/c%C3%A1ssio-reis-barbosa-0538968a/" target="blank">Behance</Link></li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li><Link className="text-white hover:text-yellow text-xl font-light transition-colors" href="mailto: creisbarbosa@gmail.com" target="blank">creisbarbosa@gmail.com</Link></li>
            <li><Link className="text-white hover:text-yellow text-xl font-light transition-colors" href="https://www.linkedin.com/in/c%C3%A1ssio-reis-barbosa-0538968a/" target="blank">+55 61 98248 5978</Link></li>
            <li><Link className="text-white hover:text-yellow text-xl font-light transition-colors" href="https://www.cassioreis.com/" target="blank">2023 Cassio Reis</Link></li>
          </ul>
        </div>
      </div>


    </footer>
  )
}