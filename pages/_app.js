import '../styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { StoreProvider } from '../context/Store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <StoreProvider>
        {Component.auth ? (
          <Auth>
            getLayout(
            <Component {...pageProps} />)
          </Auth>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login_required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
