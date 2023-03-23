import Head from 'next/head';
import Link from 'next/link';

export default function Register() {
  return (
    <main>
      <Head>
        <title>Register Page - Arsip -surat</title>
        <meta
          name="description"
          content="Register page, user Register, credentials"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="max-w-5xl container mx-auto px-8">
        <div className="flex justify-center relative my-28">
          <div
            className="w-1/2 object-contain bg-no-repeat hidden md:block"
            style={{ backgroundImage: 'url(/signup.svg)' }}
          ></div>

          <div className="flex items-center justify-center w-full bg-white py-10 max-w-md mx-auto rounded">
            <div className="">
              <h1 className="text-3xl font-semibold">Create your account</h1>
              <form className="w-full mt-10 mr-0 mb-0 ml-0 relative space-y-8">
                <div className="relative">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                  >
                    Username
                  </p>
                  <input
                    placeholder="John"
                    type="text"
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Email
                  </p>
                  <input
                    placeholder="123@ex.com"
                    type="text"
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                  >
                    Password
                  </p>
                  <input
                    placeholder="Password"
                    type="password"
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>

              <div class="flex items-center pt-4 my-2">
                <div class="flex-grow h-px bg-gray-400" />

                <span class="flex-shrink text-sm text-indigo-500 px-4 font-light">
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold italic">
                    Sign in here.
                  </Link>
                </span>

                <div class="flex-grow h-px bg-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
