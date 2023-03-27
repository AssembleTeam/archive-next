import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import {
  AiOutlineCloudUpload,
  AiOutlinePlusCircle,
  AiOutlineCheck,
} from 'react-icons/ai';
import { HiChevronDown } from 'react-icons/hi';

export default function Table() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');

  const [surat, setSurat] = useState({
    noSurat: '',
    kategoriSurat: '',
    perihalSurat: '',
    asalSurat: '',
    tglDiterima: '',
    photoSurat: '',
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setPeople(data);

      return data;
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/letter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        noSurat: surat.noSurat,
        perihalSurat: surat.perihalSurat,
        kategoriSurat: surat.kategoriSurat,
        asalSurat: surat.asalSurat,
        tglDiterima: surat.tglDiterima,
        photoSurat: surat.photoSurat,
        kepada: selected._id,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return (
            person.firstName
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, '')) ||
            person.lastName
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          );
        });

  return (
    <div className="flex flex-col bg-white h-96 shadow-sm p-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Archive</h3>
        {router.pathname == '/' ? (
          <Link
            href="/archives"
            className="text-orange-400 text-sm border border-orange-300 px-3 py-1 rounded-lg"
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
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                      <div className="flex items-center justify-between gap-8 mb-5">
                        <div className="flex flex-col gap-2 w-full">
                          <label
                            htmlFor="nosurat"
                            className="text-sm font-medium"
                          >
                            No surat
                          </label>
                          <input
                            type="text"
                            className="border px-3 py-1.5 rounded placeholder:text-sm text-sm shadow"
                            value={surat.noSurat}
                            onChange={({ target }) =>
                              setSurat({ ...surat, noSurat: target.value })
                            }
                            id="nosurat"
                            placeholder="203311"
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <label
                            htmlFor="perihal"
                            className="text-sm font-medium"
                          >
                            Perihal
                          </label>
                          <input
                            type="text"
                            value={surat.perihalSurat}
                            onChange={({ target }) =>
                              setSurat({ ...surat, perihalSurat: target.value })
                            }
                            className="border px-3 py-1.5 rounded placeholder:text-sm text-sm shadow"
                            id="perihal"
                            placeholder="Perihal"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 w-full mb-5">
                        <label
                          htmlFor="asalsurat"
                          className="text-sm font-medium"
                        >
                          Asal surat
                        </label>
                        <input
                          type="text"
                          className="border px-3 py-1.5 rounded placeholder:text-sm text-sm shadow"
                          value={surat.asalSurat}
                          onChange={({ target }) =>
                            setSurat({ ...surat, asalSurat: target.value })
                          }
                          id="asalsurat"
                          placeholder="SMK Negeri 1 Jayapura"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-8 mb-5">
                        <div className="flex flex-col gap-2 w-full">
                          <label
                            htmlFor="jenis"
                            className="text-sm font-medium"
                          >
                            Jenis surat
                          </label>
                          <select
                            className="border px-3 py-1.5 rounded placeholder:text-sm text-sm shadow"
                            id="jenis"
                            onChange={({ target }) =>
                              setSurat({
                                ...surat,
                                kategoriSurat: target.value,
                              })
                            }
                          >
                            <option>Select</option>
                            <option value="masuk">Masuk</option>
                            <option value="keluar">Keluar</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <label
                            htmlFor="tanggal"
                            className="text-sm font-medium"
                          >
                            Tanggal
                          </label>
                          <input
                            type="date"
                            className="border px-3 py-1.5 rounded placeholder:text-sm text-sm shadow"
                            value={surat.tglDiterima}
                            onChange={({ target }) =>
                              setSurat({ ...surat, tglDiterima: target.value })
                            }
                            id="tanggal"
                            placeholder="2"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 w-full mb-5">
                        <label htmlFor="kepada" className="text-sm font-medium">
                          Ditujukan kepada
                        </label>

                        <Combobox value={selected} onChange={setSelected}>
                          <div className="relative mt-1">
                            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md sm:text-sm">
                              <Combobox.Input
                                className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                                displayValue={(person) =>
                                  [person.firstName, '', person.lastName].join(
                                    ' '
                                  )
                                }
                                onChange={(event) =>
                                  setQuery(event.target.value)
                                }
                              />
                              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <HiChevronDown
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </Combobox.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                              afterLeave={() => setQuery('')}
                            >
                              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                                {filteredPeople.length === 0 && query !== '' ? (
                                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                  </div>
                                ) : (
                                  filteredPeople.map((person) => (
                                    <Combobox.Option
                                      key={person._id}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                          active
                                            ? 'bg-teal-600 text-white'
                                            : 'text-gray-900'
                                        }`
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? 'font-medium'
                                                : 'font-normal'
                                            }`}
                                          >
                                            {person.firstName +
                                              ' ' +
                                              person.lastName}
                                          </span>
                                          {selected ? (
                                            <span
                                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active
                                                  ? 'text-white'
                                                  : 'text-teal-600'
                                              }`}
                                            >
                                              <AiOutlineCheck
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Combobox.Option>
                                  ))
                                )}
                              </Combobox.Options>
                            </Transition>
                          </div>
                        </Combobox>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium mb-2">
                          File lampiran
                        </h3>
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
                              accept=".jpg, .png, .jpeg"
                              multiple
                              className="hidden"
                              value={surat.photoSurat}
                              onChange={({ target }) =>
                                setSurat({ ...surat, photoSurat: target.value })
                              }
                              id="fileLampiran"
                            />
                          </label>
                        </div>
                      </div>

                      <div className="mt-4 w-full flex justify-end">
                        <button
                          type="submit"
                          className="uppercase font-light bg-[#1e1e1e] px-5 py-1.5 shadow-md text-white rounded text-xs tracking-wider hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
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
            <Link href={`/letter/${1}`} className="text-orange-400 font-medium">
              View archive
            </Link>
            <p className="text-gray-400 text-sm">#63sh9011</p>
          </div>
        </div>
      </div>
    </div>
  );
}
