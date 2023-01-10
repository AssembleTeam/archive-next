import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimateSharedLayout } from 'framer-motion';
import { SessionProvider, useSession } from 'next-auth/react';
import { StoreProvider } from '../context/Store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AnimateSharedLayout>
      <SessionProvider session={session}>
        <StoreProvider>
          <Layout>
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </StoreProvider>
      </SessionProvider>
    </AnimateSharedLayout>
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
