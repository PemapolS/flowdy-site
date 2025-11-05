import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear()
  return (
    <section id="events" className="py-2 mx-auto max-w-screen-xl gap-4 items-center">
      <p className="font-ibm text-white hidden lg:block">
        Icon Art by Pastaiils | 
        Photos by <a href="https://x.com/callmenoop">Flamey</a>, <a href="https://x.com/Ryusuke6351">Ryusuke</a>
      </p>
      <p className="font-ibm text-white block lg:hidden">
        Icon Art by Pastaiils<br />
        Photos by <a href="https://x.com/callmenoop">Flamey</a>, <a href="https://x.com/Ryusuke6351">Ryusuke</a>
      </p>
      <p className="font-ibm text-white font-medium">
        © {year} Flowdy Husky
      </p>
    </section>
  )
}

export default Footer