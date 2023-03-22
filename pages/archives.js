import Head from 'next/head';
import Layout from '../components/Layout';
import Table from '../components/Table';

export default function Archives() {
  return (
    <>
      <Head>
        <title>Arsip surat</title>
        <meta name="archive page" content="view all archives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Table />
      </section>
    </>
  );
}

Archives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

async function getStaticProps(context) {
  return {};
}
