import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Is my data shared with you when it is scanned?",
    answer: (
      <p className="text-base text-gray-500">
        No. Your data is only processed on your device. Your data is not
        transferred anywhere. This means that we cannot access your data even if
        we wanted to.
      </p>
    ),
  },
  {
    question: "What do you detect and what do you not detect?",
    answer: (
      <>
        <p className="text-base text-gray-500">
          We focus on that information we are fairly confident in detecting.
          These are technical identifiers (e.g., emails, IP addresses),
          geographical identifiers (e.g., location), and direct identifiers
          (e.g., birthdays, creditcard numbers).
        </p>
        <p className="text-base text-gray-500 my-2">
          The full list:
          <ul className="list-disc list-inside mx-2">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Email_address"
                target="_blank"
                rel="noreferrer"
              >
                Email Address
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/IPv4"
                target="_blank"
                rel="noreferrer"
              >
                IPv4
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/IPv6"
                target="_blank"
                rel="noreferrer"
              >
                IPv6
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/MAC_address"
                target="_blank"
                rel="noreferrer"
              >
                MAC Address
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/E.164"
                target="_blank"
                rel="noreferrer"
              >
                Phone Number
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/User_agent"
                target="_blank"
                rel="noreferrer"
              >
                Browser User Agent
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Geographic_coordinate_system#Latitude_and_longitude"
                target="_blank"
                rel="noreferrer"
              >
                Latitude Longitude (location)
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Gender"
                target="_blank"
                rel="noreferrer"
              >
                Gender (marginalized groups only, e.g., nonbinary, trans)
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Social_Security_number"
                target="_blank"
                rel="noreferrer"
              >
                Social security number
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Birthday"
                target="_blank"
                rel="noreferrer"
              >
                Birthday
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Blood_type"
                target="_blank"
                rel="noreferrer"
              >
                Blood Type
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/International_Bank_Account_Number"
                target="_blank"
                rel="noreferrer"
              >
                IBAN Bank account
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Credit_card"
                target="_blank"
                rel="noreferrer"
              >
                Creditcard
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Amazon_Mechanical_Turk"
                target="_blank"
                rel="noreferrer"
              >
                Amazon MTurk ID
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: "My data is not a CSV. How can I check it?",
    answer: (
      <p className="text-base text-gray-500">
        You can save your data as a Comma-Separated Values (CSV) file through
        for example Excel and SPSS. Please make sure the data is in a
        rectangular format, that is, with only rows and columns and no
        additional formatting at the top.
      </p>
    ),
  },
  {
    question:
      "Is a dataset designated as safe to share by you 100% safe to publicly share?",
    answer: (
      <p className="text-base text-gray-500">
        We do not provide guarantees and your usage of the software is at your
        own risk. No software is perfect and neither is this one! We have done
        our best to validate the algorithm in a controlled study, where it
        performed quite well, but in an uncontrolled setting we do not yet know
        how it performs. You can{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline"
          href="https://doi.org/10.53962/r5gg-jjv0"
        >
          find our research procedures and results on ResearchEquals
        </a>
        .
      </p>
    ),
  },
  {
    question: "Why does this only work in Chrome and Edge?",
    answer: (
      <p className="text-base text-gray-500">
        In order to scan the data within your browser, we use the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline"
          href="https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker"
        >
          Filesystem Access API
        </a>
        . This is a new functionality and only available in Chrome and Edge at
        the moment.
      </p>
    ),
  },
  {
    question: "The cell count does not exactly match my dataset?!",
    answer: (
      <p className="text-base text-gray-500">
        We try to separate the rows and columns of the CSV file you upload as
        best as we can, but it remains hard. As a result, you may see numbers
        that deviate from your own cell count - probably because of strings or
        values that include commas and we accidentally separate them. Sorry!
      </p>
    ),
  },
  // More questions...
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="mb-8">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
