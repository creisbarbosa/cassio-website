import Link from 'next/link';
import { List, X } from 'phosphor-react';
import { useState } from 'react';


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full">
      <div className="justify-between px-6 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between pt-8 pb-4 md:py-8 md:block">
            <Link href="/">
              <h2 className="text-xl text-white font-semibold hover:text-yellow">cassio reis</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <X size={32} className="text-white"/>
                ) : (
                  <List size={32} className="text-white"/>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-6 mt-2 md:block md:pb-0 md:mt-0 ${ navbar ? 'block' : 'opacity-0 md:opacity-100 h-0 -my-10' } transition-all ease-in-out duration-150`}
          >
            <ul className="text-xl items-center justify-center space-y-6 md:flex md:space-x-12 md:space-y-0">
              {/* <li className="text-white hover:text-yellow transition-colors">
                <Link href="/about">
                  sobre
                </Link>
              </li>
              <li className="text-white hover:text-yellow transition-colors cursor-pointer">
                <div 
                  onClick={() => window.location.replace("/#timeline")}
                >
                  experiência
                </div>
              </li> */}
              <li className="text-white hover:text-yellow transition-colors">
                {/* <Link href="/contact">
                  contact
                </Link> */}
              </li>
              <li >
                <Link href="/works" className="text-white bg-yellow px-5 pb-2 pt-1 rounded-3xl hover:text-yellow hover:bg-cyan  transition-colors">
                  portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}