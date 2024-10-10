import {aboutPhoto} from "../assets/images";

const About = () => {
  return (
    <section class="" id="about">
    <div class="flex py-16 px-4 mx-auto max-w-screen-xl xl:py-8 lg:px-6 gap-4 items-center flex-col lg:flex-row">
        <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Introduction</h2>
            <p class="mb-8 text-gray-500 sm:text-xl dark:text-gray-400 font-ibm">Hi, I am Flowdy! I am an Information and Communication Engineering student from Thailand. <br />I sometimes dabble in Graphics Design, Web Design, and Photography. <br/>I am also a <a href="https://x.com/lupesuits">LupeSuits</a> suiter!</p>
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