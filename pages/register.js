import Head from 'next/head';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';

export default function Register() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: '',
  });

  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (userInfo.password !== userInfo.cPassword) {
        toast.warning('Password do not match!');
        return;
      }

      await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          password: userInfo.password,
        }),
      });

      const result = await signIn('credentials', {
        redirect: false,
        email: userInfo.email,
        password: userInfo.password,
      });

      if (result.ok) {
        toast.success('your account has been created!');
        return;
      }

      if (result.error) {
        toast.error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

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

      <section className="max-w-4xl container mx-auto px-8">
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
        <div className="flex items-center justify-center w-full bg-white my-28 py-10 rounded">
          <div className="w-full px-10">
            <h1 className="text-3xl font-semibold">Create your account</h1>

            <form
              className="w-full mt-10 mr-0 mb-0 ml-0 relative space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center gap-5 w-full">
                <div className="relative w-full">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                  >
                    First name
                  </p>
                  <input
                    placeholder="First name"
                    type="text"
                    value={userInfo.firstName}
                    onChange={({ target }) =>
                      setUserInfo({
                        ...userInfo,
                        firstName: target.value,
                      })
                    }
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative w-full">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                  >
                    Last name
                  </p>
                  <input
                    placeholder="Last name"
                    type="text"
                    value={userInfo.lastName}
                    onChange={({ target }) =>
                      setUserInfo({
                        ...userInfo,
                        lastName: target.value,
                      })
                    }
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md w-full"
                  />
                </div>
              </div>

              <div className="relative">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                  Email
                </p>
                <input
                  placeholder="123@ex.com"
                  type="email"
                  value={userInfo.email}
                  onChange={({ target }) =>
                    setUserInfo({
                      ...userInfo,
                      email: target.value,
                    })
                  }
                  className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-center gap-5 w-full">
                <div className="relative w-full">
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
                      setUserInfo({
                        ...userInfo,
                        password: target.value,
                      })
                    }
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative w-full">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                  >
                    Confirm Password
                  </p>
                  <input
                    placeholder="Confirm password"
                    type="password"
                    value={userInfo.cPassword}
                    onChange={({ target }) =>
                      setUserInfo({
                        ...userInfo,
                        cPassword: target.value,
                      })
                    }
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                  />
                </div>
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
      </section>
    </main>
  );
}
