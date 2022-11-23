/* This example requires Tailwind CSS v3.0+ */
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import About from "./About";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import EdgeLogo from "./EdgeLogo";
import ChromeLogo from "./ChromeLogo";
import FirefoxLogo from "./FirefoxLogo";
import SafariLogo from "./SafariLogo";
import ResultsModal from "./ResultsModal";


const navigation = [
  {
    name: "About",
    component: <About name="About" title="About the project" />,
  },
  {
    name: "Disclaimer",
    component: (
      <About
        name="Disclaimer"
        icon={
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <ExclamationTriangleIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
        }
        title="Usage disclaimer"
      />
    ),
  },
  {
    name: "R package",
    component: (
      <About
        name="R Package"
        icon={
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <ArchiveBoxIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
        }
        title="Need to do more scanning?"
      />
    ),
  },
  {
    name: "FAQ",
    component: (
      <About
        name="FAQ"
        icon={
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <ArchiveBoxIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
        }
        title="Need to do more scanning?"
      />
    ),
  },
];

async function button() {
  try {
    let [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: "Data",
          accept: {
            "text/csv": [".csv"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    });
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    return text;
  } catch (e) {
    console.log(e);
  }
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toScan, setToScan] = useState(undefined);
  const [UA, setUA] = useState("");
  const [results, setResults] = useState({
    technical: {
      email: false,
      ipv4: false,
      ipv6: false,
      macAddress: false,
      phoneNr: false,
    },
    geographical: {
      latitudeLongitude: false
    },
    direct: {
      gender: false,
      birthday: false,
      ssn: false,
      creditcard: false,
      iban: false,
      mturk: false,
    }
  })

  const regex = new RegExp('Chrome|Edge');


  useEffect(() => {
    setUA(window.navigator.userAgent.toString());
  }, []);

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#b38130" />
              <stop offset={1} stopColor="#574cfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div
              className="flex lg:min-w-0 lg:flex-1"
              aria-label="Global"
            ></div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <>{item.component}</>
              ))}
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex"></div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 block">
                    {navigation.map((item) => (
                      <div className="block" key={`item-${item.name}`}>
                        {item.component}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Join our launch on November 28th.{" "}
                    <a
                      href="https://www.youtube.com/watch?v=i5Pa3Sx3n14"
                      className="font-semibold text-indigo-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      View on YouTube <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl text-indigo-900 font-bold tracking-tight sm:text-center sm:text-6xl">
                  Prevent sharing privacy violations.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  <a href="#">
                    1 in 20 open datasets contain privacy violations.
                    {regex.test(UA.toString()) ? "yes" :"no"}
                  </a>
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <button
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 disabled:opacity-50"
                    onClick={async () => {
                      setToScan(await button());
                    }}
                    disabled={!regex.test(UA.toString())}
                  >
                    Check a CSV
                  </button>
                  {toScan && <ResultsModal
        icon={
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <ExclamationTriangleIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
        }
        title="Usage disclaimer"
      />}
                </div>
                <p className="mt-6 text-sm leading-8 text-gray-600 sm:text-center">
                  Works on
                  <span className="flex">
                    <span className="flex-grow"></span>
                    <EdgeLogo styling="max-w-8 max-h-8 mx-1 my-2" />
                    <ChromeLogo styling="max-w-8 max-h-8 mx-1 my-2 " />
                    <FirefoxLogo styling="max-w-8 max-h-8 mx-1 my-2  opacity-25" />
                    <SafariLogo styling="max-w-8 max-h-8 mx-1 my-2  opacity-25" />
                    <span className="flex-grow"></span>
                  </span>
                </p>
              </div>

              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#b38130" />
                      <stop offset={1} stopColor="#574cfa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
