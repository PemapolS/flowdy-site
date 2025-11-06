import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  // Rules for selecting variant content based on pathname.
  // Add new rules here to support more paths (first match wins).
  const rules = [
    { prefix: '/ref', variant: 'ref' },
    // example: { prefix: '/docs', variant: 'docsCredit' },
  ];

  // Map variant keys to rendering functions / content.
  const variantRenderers = {
    ref: () => (
      <span className="">
        Photo by{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://sekailens.com/" target="_blank" rel="noreferrer">
          SekaiLens
        </a>
      </span>),

    home: () => (
      <span className="">
        Photos by{' '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://x.com/callmenoop" target="_blank" rel="noreferrer">
          Flamey
        </a>
        {', '}
        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://x.com/Ryusuke6351" target="_blank" rel="noreferrer">
          Ryusuke
        </a>
      </span>
    ),
    // add more renderers as needed
  };

  // Determine which variant applies to the current pathname
  const getVariant = (path) => {
    if (!path) return 'photos';
    const match = rules.find((r) => path.startsWith(r.prefix));
    return match ? match.variant : 'photos';
  };

  const variant = getVariant(pathname);
  const MiddleContent = variantRenderers[variant] ?? variantRenderers.home;

  return (
    <section id="events" className="py-2 mx-auto max-w-screen-xl gap-4 items-center">
      {/* Always show Icon Art and the CREDIT / Photos segment on one line for larger screens,
          and stacked on small screens for readability */}
      <p className="font-ibm text-white">
        <span className="">Icon Art by Pastaiils</span>
        <br className="block lg:hidden" />
        <span className="hidden lg:inline px-1">|</span>

        {/* variant-dependent middle content */}
        <MiddleContent />
      </p>

      {/* Copyright is always present */}
      <p className="font-ibm text-white font-medium">
        © {year} Flowdy Husky
      </p>
    </section>
  );
}

export default Footer