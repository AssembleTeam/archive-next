import Head from 'next/head';
import Layout from '../components/Layout';
import Table from '../components/Table';

export default function Archives({ users }) {
  return (
    <>
      <Head>
        <title>Arsip surat</title>
        <meta name="archive page" content="view all archives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="text-gray-700 text-3xl font-semibold mb-8">Archives</h1>
        <Table data={users} />
      </section>
    </>
  );
}

Archives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
