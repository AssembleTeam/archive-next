import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';

import {
  AiOutlineUsergroupAdd,
  AiOutlineDashboard,
  AiOutlineLineChart,
} from 'react-icons/ai';
import { HiUserCircle, HiOutlineMailOpen } from 'react-icons/hi';

const Sidebar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img className="w-32 h-auto" src="/vercel.svg" alt="logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        <h3 className="mx-5 font-bold mb-2 text-gray-700">Pages</h3>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <AiOutlineDashboard className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>

        <Link href="/archives">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/archives'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <HiOutlineMailOpen className="h-5 w-5" />
            </div>
            <div>
              <p>Archives</p>
            </div>
          </div>
        </Link>

        <Link href="/users">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/users'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <AiOutlineUsergroupAdd className="h-5 w-5" />
            </div>
            <div>
              <p>Users</p>
            </div>
          </div>
        </Link>

        <Link href="/charts">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/charts'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <AiOutlineLineChart className="h-5 w-5" />
            </div>
            <div>
              <p>Charts</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <h3 className="mx-5 font-bold mb-2 text-gray-700">Settings</h3>
        <Link href="/profile">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/profile'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <HiUserCircle className="h-5 w-5" />
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
