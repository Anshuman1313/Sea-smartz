// GrayBanner.js or GrayBanner.tsx

const GrayBanner = () => (
  <div className="gray-banner absolute inset-x-0 -top-11 mt-[-0.1875rem] flex items-end">
    <div className="mr-[-1.75rem] h-11 flex-auto bg-gray-950"></div>
    <div className="flex justify-between mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
      <svg viewBox="0 0 56 48" aria-hidden="true" className="-ml-1.5 mb-[-0.0625rem] w-14 flex-none overflow-visible fill-gray-950">
        <path d="M2.686 3H-4V48H56V47H53.314A8 8 0 0 1 47.657 44.657L8.343 5.343A8 8 0 0 0 2.686 3Z" />
      </svg>
      <svg viewBox="0 0 56 48" aria-hidden="true" className="-mr-1.5 mb-[-0.0625rem] w-14 flex-none overflow-visible fill-gray-950">
        <path d="M53.314 3H60V48H0V47H2.686A8 8 0 0 0 8.343 44.657L47.657 5.343A8 8 0 0 1 53.314 3Z" />
      </svg>
    </div>
    <div className="ml-[-1.75rem] h-11 flex-auto bg-gray-950"></div>
  </div>
);

export default GrayBanner;
