import { FormEvent, useState } from "react"

export default function Contact() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ submitted, setSubmitted ] = useState(false)

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Sending request')

    let data = {
      name,
      email,
      message,
    }

    const options = {
      method: 'POST',
      headers: {
        accept: 
          'application/json',
          'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    };
    
    await fetch('api/contact', options)
      .then((res) => {
        console.log('Response received')
        console.log(res.status)
        res.json()
        if (res.status === 201) {
          alert('Sua mensagem foi enviada com sucesso e em breve nossa equipe entrará em contato! Obrigado!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')

        }
      })
      .catch(err => console.error(err));
    }

  return (
    <section>
        <div className="flex flex-col xl:flex-row px-6 mx-auto xl:max-w-7xl py-6 xl:py-20 w-full relative lg:gap-16">
          <div className="basis-1 xl:basis-1/2 flex items-center justify-center">
            <div className="space-y-8 xl:space-y-6">
              <h1 className="text-[2rem] xl:text-5xl xl:leading-snug font-bold">
                Vamos conversar!
              </h1>
              <p className="text-white/80 text-base leading-normal max-w-md">Fico feliz por você estar entrando em contato. Seja para tirar dúvidas, fazer comentários ou apenas dizer oi, ficarei contente em receber sua mensagem. <b className="text-white">Farei o máximo para responder o mais breve possível!</b></p>
              <form 
                action=""  
                className="pt-6 flex flex-col gap-6 max-w-md"
                onSubmit={event => {
                  handleSubmit(event)
                }}
              >
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="uppercase text-xs font-bold text-white/90"
                  >
                    Nome
                  </label>
                  <input 
                    type="text"
                    name="name" 
                    value={name}
                    onChange={event => {
                      setName(event.target.value)
                    }}
                    placeholder="João"
                    required
                    className="px-3 py-2 border-b rounded-none bg-transparent border-white/20 placeholder:text-white/20 focus:outline-none focus:bg-black/20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label 
                    htmlFor="email"
                    className="uppercase text-xs font-bold text-white/90"
                  >
                    Email
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={event => {
                      setEmail(event.target.value)
                    }}
                    placeholder="joao@email.com"
                    required
                    className="px-3 py-2 border-b rounded-none bg-transparent border-white/20 placeholder:text-white/20 focus:outline-none focus:bg-black/20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label 
                    htmlFor="message"
                    className="uppercase text-xs font-bold text-white/90"
                  >
                    Mensagem
                  </label>
                  <input 
                    type="text"
                    name="message"
                    value={message}
                    onChange={event => {
                      setMessage(event.target.value)
                    }}
                    required
                    placeholder="Escreva sua mensagem aqui"
                    className="bg-transparent border-b rounded-none border-white/20 px-3 py-2 resize-none h-16 placeholder:text-white/20 focus:outline-none focus:bg-black/20"
                  />
                </div>
                <input 
                  className="bg-black/20 hover:bg-black/80 transition-colors py-4 rounded-md cursor-pointer"
                  type="submit"
                  value="Enviar"
                />
              </form>
            </div>
          </div>

          <div className="basis-1 xl:basis-1/2 flex items-center justify-center">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_701_736)">
                <rect width="600" height="600" rx="32" fill="#0054FF"/>
                <g filter="url(#filter0_f_701_736)">
                  <ellipse cx="-200" cy="-80" rx="850" ry="700" fill="#131313"/>
                </g>
              </g>
              <defs>
                <filter id="filter0_f_701_736" x="-1340" y="-1063" width="2283" height="1969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_701_736"/>
                </filter>
                <clipPath id="clip0_701_736">
                  <rect width="600" height="600" rx="4" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>
  )
}