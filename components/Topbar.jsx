import React, { Fragment } from 'react';
import { HiChevronDown, HiMenuAlt3, HiUser, HiBell } from 'react-icons/hi';
import { MdCheck, MdLogout } from 'react-icons/md';
import { Menu, Transition, Popover } from '@headlessui/react';
import Link from 'next/link';

const Topbar = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`fixed bg-gray-100 w-full h-16 flex justify-between items-center transition-all duration-[300ms] ${
        showNav ? 'pl-56' : ''
      }`}
    >
      <div className="ml-4 p-1 md:pl-16 bg-gray-200 md:bg-inherit rounded-lg">
        <HiMenuAlt3
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
            <HiBell className="w-6 h-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition easa-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notification</p>
                  <a className="text-sm text-orange-500" href="#">
                    Mark all as read
                  </a>
                </div>

                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <MdCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification title
                      </p>
                      <p className="font-sm text-gray-500 truncate">
                        Dini sent you a letter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/messanger-e2203.appspot.com/o/images%2Fdini%20abshari?alt=media&token=6a5b1b4c-82f6-4a87-b0ba-d837378eb180"
                  className="rounded-full h-8 w-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">
                Alief
              </span>
              <HiChevronDown className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition easa-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href=""
                    className="flex hover:bg-orange-500 text-gray-700 hover:text-white rounded p-2 text-sm group transition-colors items-center"
                  >
                    <HiUser className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href=""
                    className="flex hover:bg-orange-500 text-gray-700 hover:text-white rounded p-2 text-sm group transition-colors items-center"
                  >
                    <MdLogout className="w-4 h-4 mr-2" />
                    Logout
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Topbar;
