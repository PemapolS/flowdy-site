import {aboutPhoto} from "../../public/images";

const About = () => {
  return (
    <section id="about" className="font-ibm">
      <div className="flex py-12 px-4 mx-auto max-w-screen-xl xl:py-8 lg:px-6 gap-6 items-center flex-col lg:flex-row">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Introduction
          </h2>
          <p className="mb-6 text-gray-700 sm:text-md dark:text-gray-300">
            Hi, I am Flowdy! I am an Information and Communication Engineering student from Thailand. Besides that, I have minor interests in interaction design, systems engineering, and photography. I also help out with some of the local cons. I love traveling and meeting new people. Although, I can be a little shy so please be patient with me. I am also a{' '}
            <a
              href="https://www.furaffinity.net/user/LazyLupe"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              LupeSuits
            </a>{' '}
            suiter!
          </p>
          <p className="mb-8 text-gray-700 sm:text-md dark:text-gray-300">
            Thanks for sticking around!
          </p>
        </div>
        <div className="w-full max-w-3xl rounded-lg overflow-hidden bg-white/60 dark:bg-slate-900/40 ring-1 ring-slate-900/5 dark:ring-slate-700/20 shadow-sm">
          <img
            src={aboutPhoto.src}
            alt="About photo"
            className="w-full max-w-[500px] h-auto rounded-lg object-cover"
            loading="lazy"
          />
          <p className="p-2 text-sm text-gray-500 dark:text-gray-400 font-ibm text-center">
            Photo by{' '}
            <a
              className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
              href="https://x.com/Ryusuke6351"
              target="_blank"
              rel="noreferrer"
            >
              Ryusuke
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About