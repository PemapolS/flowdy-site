import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  // Rules for selecting variant content based on pathname.
  // Add new rules here to support more paths (first match wins).
  const rules = [
    { prefix: '/ref', variant: 'ref' },
    { prefix: '/ref/flowdy/sfw', variant: 'flowdyref' },
    { prefix: '/ref/flowdy/nsfw', variant: 'flowdyref' },
    { prefix: '/ref/marvin/sfw', variant: 'marvinref' },
    { prefix: '/ref/marvin/nsfw', variant: 'marvinref' },
    { prefix: '/ref/herman/sfw', variant: 'hermanref' },
    { prefix: '/ref/herman/nsfw', variant: 'hermanref' },
  ];

  // Map variant keys to rendering functions / content.
  const variantRenderers = {
    ref: () => (
      <span className="">
        <span className="">Icon Art by Pastaiils,{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="http://pupsonar.carrd.co/" target="_blank" rel="noreferrer">
          PupSonar
        </a>
        </span>
        <br className="block lg:hidden" />
        <span className="hidden lg:inline px-1">|</span>
        Banner Art by{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://linktr.ee/merridoodles" target="_blank" rel="noreferrer">
          Merridoodles
        </a>
      </span>),

    flowdyref: () => (
      <span className="">
        <span className="">Icon Art by Pastaiils</span>
        <br className="block lg:hidden" />
        <span className="hidden lg:inline px-1">|</span>
        Banner Photo by{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://sekailens.com/" target="_blank" rel="noreferrer">
          SekaiLens
        </a>
      </span>),

    marvinref: () => (
      <span className="">
        <span className="">Icon Art by Pastaiils</span>
        <br className="block lg:hidden" />
        <span className="hidden lg:inline px-1">|</span>
        Banner Art by{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="http://pupsonar.carrd.co/" target="_blank" rel="noreferrer">
          PupSonar
        </a>
      </span>),

    hermanref: () => (
      <span className="">
        <span className="">Icon Art by Pastaiils</span>
        <br className="block lg:hidden" />
        <span className="hidden lg:inline px-1">|</span>
        Banner Art by{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://trashmutt.com/" target="_blank" rel="noreferrer">
          Kota (TrashMutt)
        </a>
      </span>),

    home: () => (
      <span className="">
        <span className="">Icon Art by Pastaiils</span>
        <br className="block lg:hidden" />
        <span className="hidden lg:inline px-1">|</span>
        Banner Art by{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://betsuto.carrd.co/" target="_blank" rel="noreferrer">
          Betsuto
        </a>
        {', '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://sirburnt.carrd.co/" target="_blank" rel="noreferrer">
          Sir Burnt
        </a>
      </span>
    ),
  };

  // Determine which variant applies to the current pathname
  const getVariant = (path) => {
    if (!path) return 'photos';
    const match = rules.find((r) => path.endsWith(r.prefix));
    return match ? match.variant : 'photos';
  };

  const variant = getVariant(pathname);
  const MiddleContent = variantRenderers[variant] ?? variantRenderers.home;

  return (
    <section className="py-2 mx-auto max-w-screen-xl gap-4 items-center">
      <p className="font-ibm text-white">
        <MiddleContent />
      </p>

      <p className="font-ibm text-white font-medium">
          <span className="inline-block group">
            <span className="block group-hover:hidden">© {year} Flowdy Husky</span>
            <span className="hidden group-hover:inline-block">Made with <span aria-hidden>❤</span> by Flowdy</span>
          </span>
        </p>
    </section>
  );
}

export default Footer