import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';
import { MdHome, MdCreditCard, MdVerifiedUser } from 'react-icons/md';

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
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <MdHome className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>

        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/account'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <MdVerifiedUser className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>

        <Link href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/billing'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-gray-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-2">
              <MdCreditCard className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
