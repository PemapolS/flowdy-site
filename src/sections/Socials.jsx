import { socials } from '../constants';
import SocialCard from '../components/SocialCard';

const Socials = () => {
  return (
    <section id="socials" className="py-12 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 items-center font-ibm">
    <div className="max-container justify-center flex-wrap rounded-[20px] shadow-3xl px-6 lg:px-10 py-6 lg:py-7 ring-1 ring-slate-900/5 dark:bg-slate-500/5 items-start">
      <div>
        <h1 className="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Social Media Accounts
        </h1>
          <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-600 p-3">
            <p className="font-ibm text-sm text-yellow-800 dark:text-yellow-200">
              <strong className="font-semibold">Note:</strong>{' '}
              Any convention-related inquiries should be directed through official channels and work accounts.
              <br />
              <strong className="font-semibold">หมายเหตุ:</strong>{' '}
              การสอบถามข้อมูลที่เกี่ยวข้องกับงานอีเวนต์ต่าง ๆ ควรติดต่อผ่านช่องทางและบัญชีทางการเท่านั้น
            </p>
          </div>
      </div>
      <div className="max-container lg:grid lg:grid-cols-3 py-5 lg:px-10 gap-4 flex-col flex flex-wrap justify-center">
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