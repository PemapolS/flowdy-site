import {aboutPhoto} from "../assets/images";

const About = () => {
  return (
    <section className="" id="about">
    <div className="flex py-16 px-4 mx-auto max-w-screen-xl xl:py-8 lg:px-6 gap-4 items-center flex-col lg:flex-row">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Introduction</h2>
            <p className="mb-8 text-gray-500 sm:text-lg dark:text-gray-400 font-ibm">Hi, I am Flowdy! I am an Information and Communication Engineering student from Thailand. <br />I dabble in Graphics Design, Web Design, and Photography in my free time.<br/>I am also a <a href="https://x.com/lupesuits">LupeSuits</a> suiter!</p>
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