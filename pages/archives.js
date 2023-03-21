import Head from 'next/head';
import Layout from '../components/Layout';
import Table from '../components/Table';

export default function Archives() {
  return (
    <main>
      <Head>
        <title>Arsip surat</title>
        <meta name="archive page" content="view all archives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Table />
      </section>
    </main>
  );
}

Archives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

async function getStaticProps(context) {
  return {};
}
