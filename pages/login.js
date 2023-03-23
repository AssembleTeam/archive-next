import Head from 'next/head';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn('credentials', {
        redirect: false,
        email: userInfo.email,
        password: userInfo.password,
      });

      if (user.ok) {
        router.push('/');
      } else {
        toast.error(errorMsg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Head>
        <title>Login Page - Arsip -surat</title>
        <meta
          name="description"
          content="Login page, user login, credentials"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="max-w-5xl container mx-auto px-8">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="flex justify-center relative mt-32 h-full">
          <div
            className="w-1/2 object-contain bg-no-repeat bg-cover hidden md:block"
            style={{ backgroundImage: 'url(/signup.svg)' }}
          ></div>

          <div className="flex items-center justify-center w-full bg-white py-10 max-w-md mx-auto rounded">
            <div className="">
              <h1 className="text-3xl font-semibold">Login to your account</h1>

              <form
                className="w-full mt-10 mr-0 mb-0 ml-0 relative space-y-8"
                onSubmit={handleLogin}
              >
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                    Email
                  </p>
                  <input
                    placeholder="123@ex.com"
                    type="email"
                    value={userInfo.email}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, email: target.value })
                    }
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
                    value={userInfo.password}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, password: target.value })
                    }
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
                    Login
                  </button>
                </div>
              </form>

              <div className="flex items-center pt-4 my-2">
                <div className="flex-grow h-px bg-gray-400" />

                <span className="flex-shrink text-sm text-indigo-500 px-4 font-light">
                  Do not have an account, yet?{' '}
                  <Link href="/register" className="font-semibold italic">
                    Sign up here.
                  </Link>
                </span>

                <div className="flex-grow h-px bg-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
