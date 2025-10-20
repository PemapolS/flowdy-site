import Button from "../components/Button";
import { arrowRight } from "../assets/icons/";
import { bigPhoto1 } from "../assets/images";


const Hero = () => {
  return (
    <section
        id="home"
        className="w-full items-end flex xl:flex-row justify-center min-h-screen bg-hero bg-clip-border bg-origin-border bg-center bg-no-repeat bg-cover bg-blend-overlay bg-black/10">
        <div className="relative drop-shadow-2xl xl:w-3/5 w-3/4 flex flex-col items-start whitespace-nowrap pb-24 lg:pb-32 z-10">
            <h1 className="text-[80px] font-montserrat text-white max-sm:text-[70px] font-bold">
                <span>Flowdy</span>
            </h1>
            <h2 className="text-[40px] max-sm:text-2xl font-medium max-sm:text-[30px] max-sm:pb-5 text-white">
                <span className="font-ibm">โฟล-ดี้ |</span> <span className="font-notojp">フローディ</span>
            </h2>
            <div className="py-2">
             <Button label="Contact" iconURL={arrowRight} dest="#socials" />
            </div>
            
        </div>
    </section>
  )
}

export default Hero