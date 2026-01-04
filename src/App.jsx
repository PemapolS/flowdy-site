import { Hero, About, Events, Socials, Partners, Footer} from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative bg-white dark:bg-gray-900">
  <    Nav />
    <section className="xl:padding-1">
      <Hero />
    </section>

    <section className="max-w-6xl mx-auto px-2 sm:px-6">
      <About />
    </section>

    <section className="max-w-6xl mx-auto px-2 sm:px-6">
      <Events />
    </section>

    <section className="max-w-6xl mx-auto px-2 sm:px-6">
      <Socials />
    </section>
    <section className="bg-sky-500/30">
      <Partners />
    </section>
    <section className="padding-x py-2 bg-gray-900 dark:bg-gray-950">
      <Footer />
    </section>
  </main>
);

export default App;