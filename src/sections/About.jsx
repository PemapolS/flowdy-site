import {aboutPhoto} from "../assets/images";

const About = () => {
  return (
    <section className="" id="about">
    <div className="flex py-16 px-4 mx-auto max-w-screen-xl xl:py-8 lg:px-6 gap-4 items-center flex-col lg:flex-row">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Introduction</h2>
            <p className="mb-8 text-gray-500 sm:text-lg dark:text-gray-400 font-ibm">Hi, I am Flowdy! I am an Information and Communication Engineering student from Thailand. <br />I am currently the Registration Lead for <a href="https://bangkokbeasts.com/" target="_blank" className="text-white-400">BangkokBeasts</a> and PM for Convention Operations for <a href="https://thaitails.net/" target="_blank" className="text-white-400">Thaitails</a>. I dabble in graphics design, web design, and photography in my free time. I love traveling and meeting new people. Although, I can be a little shy so please be patient with me. I am also a <a href="https://x.com/lupesuits" target="_blank" className="text-white-400">LupeSuits</a> suiter!<br/></p>
            <p className="mb-8 text-gray-500 sm:text-lg dark:text-gray-400 font-ibm">
            Thanks for sticking around!
            </p>
        </div>
        <div>
          <img 
          src={aboutPhoto}
          alt="About photo"
          width={500}
          />
        </div>
    </div>
</section>
  )
}

export default About