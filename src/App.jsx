import { Hero, About, Events, Socials, Partners, Footer} from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative bg-white dark:bg-gray-900">
  <    Nav />
    <section className="xl:padding-1">
      <Hero />
    </section>
    <section className="padding-x">
      <About />
    </section>
    <section className="padding-x">
      <Events />
    </section>
    <section className="padding-x">
      <Socials />
    </section>
    <section className="padding-x py-8 bg-sky-500/30">
      <Partners />
    </section>
    <section className="padding-x py-2 bg-gray-900 dark:bg-gray-950">
      <Footer />
    </section>
  </main>
);

export default App;