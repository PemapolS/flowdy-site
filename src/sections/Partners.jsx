import {Fez, BlueJay} from '../../public/images';

const Partners = () => {
  return (
    <section id="socials" className="py-2 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 items-center">
      {/* <h1 className="max-w-screen-md b-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">
        Also check out my partners...
      </h1> */}
      <div className="grid grid-cols-2 lg:flex lg:flex-1 justify-evenly items-center gap-3 lg:gap-10 py-4">
        <a href="https://fez.pet" className="group">
          <div className="flex justify-center flex-col px-5 py-5 lg:px-8 rounded-xl bg-white/0 dark:bg-transparent ring-1 ring-slate-900/10 dark:ring-0 transition-transform duration-200 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500">
            <img 
              src={Fez.src}
              alt="Fez"
              className="rounded-full object-cover w-28 h-28 self-center transition-transform duration-200 group-hover:scale-105"
            />
            <h3 className="justify-center font-montserrat font-semibold self-center pt-5 text-xl text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-300">
              Fez
            </h3>
          </div>
        </a>

        <a href="https://linktr.ee/BlueJaytheWolf" className="group">
          <div className="flex justify-center flex-col px-5 py-5 lg:px-8 rounded-xl bg-white/0 dark:bg-transparent ring-1 ring-slate-900/10 dark:ring-0 transition-transform duration-200 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500">
            <img 
              src={BlueJay.src}
              alt="BlueJay"
              className="rounded-full object-cover w-28 h-28 self-center transition-transform duration-200 group-hover:scale-105"
            />
            <h3 className="justify-center font-montserrat font-semibold self-center pt-5 text-xl text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-300">
              BlueJay
            </h3>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Partners