import { socials } from '../constants';
import SocialCard from '../components/SocialCard';

const Socials = () => {
  return (
    <section id="socials" className="py-12 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 items-center">
    <div className="max-container justify-center flex-wrap rounded-[20px] shadow-3xl px-6 lg:px-10 py-6 lg:py-7 ring-1 ring-slate-900/5 dark:bg-slate-500/5 items-start">
      <div>
        <h1 className="max-w-screen-md b-4 text-[34px] lg:text-[40px] tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">
        Social Media Accounts
        </h1>
      </div>
      <div className="max-container lg:grid lg:grid-cols-3 lg:gap-5 py-5 lg:px-10 gap-4 flex-col flex flex-wrap justify-center">
      {/* <div className="max-container flex justify-center flex-wrap gap-4 lg:gap-9 py-4 max-sm:flex-col"> */}
      {socials.map((social) => (
        <SocialCard key={social.label} {...social}/>
      ))}
      </div>
    </div>
  </section>
  )
}

export default Socials