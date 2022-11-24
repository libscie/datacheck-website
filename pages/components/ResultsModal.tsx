import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { KeyObject } from "tls";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Modal({
  icon,
  title,
  results,
  anyViolations,
  filename,
  cells,
}: {
  icon?: React.ReactElement;
  title: String;
  results: any;
  anyViolations: boolean;
  filename: String;
  cells: Number;
}) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        className={`inline-block rounded-lg  px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ${
          !anyViolations
            ? "ring-green-600 hover:bg-green-700 hover:ring-green-700 bg-green-600"
            : "ring-red-600 hover:bg-red-700 hover:ring-red-700 bg-red-600"
        }`}
        onClick={() => {
          setOpen(true);
        }}
      >
        Results
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Safe to share?
                      </Dialog.Title>
                      <p className="text-xs italic mb-1 text-gray-600">
                        {cells} cells scanned for <code>{filename}</code>
                      </p>
                      <p className="text-xs italic mb-2 text-gray-600">
                        Results do not guarantee presence/absence of privacy
                        violations.
                      </p>

                      <div className="mt-2 text-sm text-gray-500 text-left">
                        <div className="grid grid-cols-7 gap-x-4 gap-y-4">
                          <p className="text-center text-xs">
                            {!results.technical.email ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Email
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.technical.ipv4 ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            IPv4
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.technical.ipv6 ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            IPv6
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.technical.macAddress ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            MAC Address
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.technical.phoneNr ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Phone Number
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.technical.browserUA ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Browser User Agent
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.geographical.latitudeLongitude ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Location
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.direct.gender ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Gender
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.direct.ssn ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Social Security Number
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.direct.birthday ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Birthday
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.direct.bloodType ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Blood type
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.direct.iban ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            IBAN
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.direct.creditcard ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            Creditcard
                          </p>
                          <p className="text-center text-xs">
                            {" "}
                            {!results.direct.mturk ? (
                              <CheckCircleIcon className="text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="text-red-600" />
                            )}
                            MTurk ID
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Back to main page
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
