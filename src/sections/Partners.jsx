import {Fez, BlueJay, HB00_013_Banner, FI00_004} from '../../public/images';

const Partners = () => {
  return (
    <>
      {/* Fez Partner Section */}
      <section 
        id="partners-fez"
        className="w-full py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-blend-overlay dark:bg-black/30"
        style={{ backgroundImage: `url(${HB00_013_Banner.src})` }}
      >
        <div className="flex justify-center md:justify-end items-center max-w-3xl lg:max-w-5xl mx-auto w-full">
        <a href="https://fez.pet" className="group">
          <div className="flex justify-center flex-col px-5 py-5 lg:px-8 rounded-xl bg-white/30 dark:bg-transparent ring-1 ring-slate-900/10 dark:ring-0 transition-transform duration-200 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500">
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
        </div>
      </section>

      {/* BlueJay Partner Section */}
      <section 
        id="partners-bluejay"
        className="w-full py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-blend-overlay dark:bg-black/30"
        style={{ backgroundImage: `url(${FI00_004.src})` }}
      >
      <div className="flex justify-center md:justify-start items-center max-w-3xl lg:max-w-5xl mx-auto w-full">
        <a href="https://linktr.ee/BlueJaytheWolf" className="group">
          <div className="flex justify-center flex-col px-5 py-5 lg:px-8 rounded-xl bg-white/30 dark:bg-transparent ring-1 ring-slate-900/10 dark:ring-0 transition-transform duration-200 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500">
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
    </>
  )
}

export default Partners