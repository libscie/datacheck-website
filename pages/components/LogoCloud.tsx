import LibscieLogo from './LibscieLogo'
import MetaLogo from './MetaLogo'
import NwoLogo from './NwoLogo'

export default function LogoCloud() {
  return (
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">
            Powered by research, funding, and engineering
          </h2>
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-mt-4 grid sm:grid-cols-2 lg:grid-cols-3 sm:justify-between lg:-ml-4 ">
              <div className="mt-4 align-center flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0 z-10">
                <a href="https://metaresearch.nl" target="_blank" rel="noreferrer">
                 <MetaLogo />
                </a>
              </div>
              <div className="mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0 z-10">
              <a href="https://www.nwo.nl/en/researchprogrammes/open-science/open-science-fund/open-science-fund-2021-awarded-grants" target="_blank" rel="noreferrer">
                <NwoLogo />
              </a>
              </div>
              <div className="mt-4 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0 fill-current text-black col-span-1 sm:col-span-2 lg:col-span-1 z-10">
              <a href="https://libscie.org" target="_blank" rel="noreferrer">
                <LibscieLogo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
