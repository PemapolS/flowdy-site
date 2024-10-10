import {Fez, BlueJay} from '../assets/images';

const Partners = () => {
  return (
    <section id="socials" class="py-2 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 items-center">
      <h1 class="max-w-screen-md b-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">
        Also check out my partners...
      </h1>
      <div class="grid grid-cols-2 lg:flex lg:flex-1 justify-evenly items-center gap-3 lg:gap-10 py-4">
        <a href="https://fez.pet">
          <div class="flex justify-center flex-col px-5 py-5 lg:px-8 rounded-xl bg-white/50 dark:bg-slate-300/5 shadow-sm">
            <img 
              src={Fez}
              alt="Fez"
              className="rounded-full object-cover w-28 h-28 self-center"
            />
            <h3 class="justify-center font-montserrat font-semibold self-center pt-5 text-xl text-gray-900 dark:text-white">
              Fez
            </h3>
          </div>
        </a>
        <a href="https://linktr.ee/BlueJaytheWolf">
          <div class="flex justify-center flex-col px-5 py-5 lg:px-8 rounded-xl bg-white/50 dark:bg-slate-300/5 shadow-sm">
            <img 
              src={BlueJay}
              alt="BlueJay"
              className="rounded-full object-cover w-28 h-28 self-center"
            />
            <h3 class="justify-center font-montserrat font-semibold self-center pt-5 text-xl text-gray-900 dark:text-white">
              BlueJay
            </h3>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Partners