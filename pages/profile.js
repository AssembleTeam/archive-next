import Head from 'next/head';
import Layout from '../components/Layout';

import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>User Profile Page</title>
        <meta name="description" content="Profile page, credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-gray-700 text-3xl font-semibold mb-8">Profile</h1>

      <div className="flex flex-col gap-5 mb-5">
        <div className="rounded bg-white shadow-sm py-4 px-5">
          <h3 className="text-base font-normal">Profile information</h3>
          <p className="text-sm text-gray-400 mt-2">
            Update your account{`'`}s profile information and email address.
          </p>

          <form>
            <div className="flex flex-col mt-4 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
                <label
                  htmlFor="username"
                  className="text-sm font-light w-0 sm:w-[20%]"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={session?.user.name}
                  className="border px-3 py-1.5 rounded w-full sm:w-[80%] ml-auto placeholder:text-sm text-sm"
                  placeholder="Username"
                  id="username"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
                <label
                  htmlFor="email"
                  className="text-sm font-light w-0 sm:w-[20%]"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={session?.user.email}
                  className="border px-3 py-1.5 rounded w-full sm:w-[80%] ml-auto placeholder:text-sm text-sm"
                  placeholder="Email"
                  id="email"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
                <button
                  type="submit"
                  className="uppercase font-light bg-[#1e1e1e] hover:bg-gray-700 px-5 py-1.5 text-white rounded text-xs tracking-wider"
                >
                  save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-5">
        <div className="rounded bg-white shadow-sm py-4 px-5">
          <h3 className="text-base font-normal">Update password</h3>
          <p className="text-sm text-gray-400 mt-2">
            Ensure your account is using a long, random password to stay secure.
          </p>

          <form>
            <div className="flex flex-col mt-4 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
                <label
                  htmlFor="current"
                  className="text-sm font-light w-0 sm:w-[20%]"
                >
                  Current password
                </label>
                <input
                  type="password"
                  className="border px-3 py-1.5 rounded w-full sm:w-[80%] ml-auto placeholder:text-sm text-sm"
                  placeholder="Current password"
                  id="current"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
                <label
                  htmlFor="new"
                  className="text-sm font-light w-0 sm:w-[20%]"
                >
                  New password
                </label>
                <input
                  type="password"
                  className="border px-3 py-1.5 rounded w-full sm:w-[80%] ml-auto placeholder:text-sm text-sm"
                  placeholder="New password"
                  id="new"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
                <label
                  htmlFor="confirm"
                  className="text-sm font-light w-0 sm:w-[20%]"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  className="border px-3 py-1.5 rounded w-full sm:w-[80%] ml-auto placeholder:text-sm text-sm"
                  placeholder="Confirm password"
                  id="confirm"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
                <button
                  type="submit"
                  className="uppercase font-light bg-[#1e1e1e] hover:bg-gray-700 px-5 py-1.5 text-white rounded text-xs tracking-wider"
                >
                  update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
