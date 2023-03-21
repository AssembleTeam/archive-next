import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineCloudUpload, AiOutlinePlusCircle } from 'react-icons/ai';

export default function Table() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col bg-white h-96 shadow-sm p-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Archive</h3>
        {router.pathname == '/' ? (
          <Link
            href="/archives"
            className="text-orange-400 text-sm font-semibold"
          >
            View all
          </Link>
        ) : (
          <button
            onClick={openModal}
            type="button"
            className="font-semibold text-orange-400 hover:text-orange-500 gap-1"
          >
            <AiOutlinePlusCircle className="w-5 h-5" />
          </button>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Archive
                  </Dialog.Title>
                  <div className="mt-6">
                    <form encType="multipart/form-data">
                      <div className="flex items-center justify-between gap-8 mb-5">
                        <div className="flex flex-col gap-2 w-full">
                          <label htmlFor="nosurat" className="font-semibold">
                            No surat
                          </label>
                          <input
                            type="text"
                            className="border rounded px-3 py-1 shadow"
                            id="nosurat"
                            placeholder="203311"
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <label htmlFor="lampiran" className="font-semibold">
                            Lampiran
                          </label>
                          <input
                            type="text"
                            className="border rounded px-3 py-1 shadow"
                            id="lampiran"
                            placeholder="2"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-8 mb-5">
                        <div className="flex flex-col gap-2 w-full">
                          <label htmlFor="jenis" className="font-semibold">
                            Jenis surat
                          </label>
                          <select
                            className="border rounded px-3 py-1 shadow"
                            id="jenis"
                          >
                            <option>Select</option>
                            <option>Perintah</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <label htmlFor="tanggal" className="font-semibold">
                            Tanggal
                          </label>
                          <input
                            type="date"
                            className="border rounded px-3 py-1 shadow"
                            id="tanggal"
                            placeholder="2"
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <label htmlFor="instansi" className="font-semibold">
                            Instansi
                          </label>
                          <input
                            type="text"
                            className="border rounded px-3 py-1 shadow"
                            id="instansi"
                            placeholder="SMK Negeri 1 Jayapura"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">File lampiran</h3>
                        <div className="bg-gray-100 p-2 rounded">
                          <label
                            htmlFor="fileLampiran"
                            className="w-full h-28 flex flex-col items-center justify-center border-2 border-dashed bg-white"
                          >
                            <AiOutlineCloudUpload className="w-8 h-8 text-gray-500" />
                            <p className="font-semibold text-gray-500">
                              Drag files here or click in this area
                            </p>
                            <input
                              type="file"
                              className="hidden"
                              id="fileLampiran"
                            />
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 w-full flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center font-bold tracking-widest rounded border border-blue-400 border-transparent bg-blue-100 px-7 py-2 text-sm text-blue-800 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="grid grid-cols-1 items-center gap-4 mt-16">
        <div className="grid md:grid-cols-fluid grid-cols-4 gap-5 font-semibold border-b pb-2">
          <h2>Date</h2>
          <h2 className="md:text-center">Status</h2>
          <h2 className="md:text-center">Expenses</h2>
          <h2 className="md:text-center hidden md:inline-block">Amount</h2>
          <h2 className="text-right">Archive</h2>
        </div>
        <div className="grid md:grid-cols-fluid grid-cols-4 items-center gap-5">
          <p className="text-gray-400">Dec 1, 2022</p>
          <div className="md:text-center">
            <span className="px-2 py-1 text-sm bg-green-100 rounded-lg border border-green-600 text-green-600 font-semibold w-fit">
              Paid
            </span>
          </div>
          <div className="flex flex-col md:pl-[3.9rem]">
            <p className="text-gray-800 font-semibold text-sm">
              IKEA table top
            </p>
            <p className="text-gray-300 text-sm">Office equipment</p>
          </div>
          <p className="md:pl-[4.4rem] hidden md:inline-block">$300</p>
          <div className="flex flex-col items-end">
            <p className="text-orange-400 font-medium">View archive</p>
            <p className="text-gray-400 text-sm">#63sh9011</p>
          </div>
        </div>
      </div>
    </div>
  );
}
