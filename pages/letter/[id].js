import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

const LetterDetails = ({ letter }) => {
  const formatDate = (date) => {
    const initializeDate = new Date(date);
    const convertTo = initializeDate.toDateString();

    return convertTo;
  };

  return (
    <section>
      <Head>
        <title>Letter details Page</title>
        <meta
          name="description"
          content="Letter details page, archive details page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-gray-700 text-3xl font-semibold mb-8">
        Letter details
      </h1>

      <div className="flex flex-col gap-5 sm:gap-8 mb-5 bg-white shadow-sm py-4 px-5 rounded">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-5 w-full">
          <span className="text-sm font-light w-auto md:w-[20%]">
            No surat:
          </span>
          <span className="font-medium w-auto md:w-[80%]">
            {letter.noSurat}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-5 w-full">
          <span className="text-sm font-light w-auto md:w-[20%]">
            Tanggal surat:
          </span>
          <span className="font-medium w-auto md:w-[80%]">
            {formatDate(letter.tglDiterima)}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-5 w-full">
          <span className="text-sm font-light w-auto md:w-[20%]">
            Lampiran:
          </span>
          <span className="font-medium w-auto md:w-[80%]">1</span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-5 w-full">
          <span className="text-sm font-light w-auto md:w-[20%]">
            Jenis surat:
          </span>
          <span className="font-medium w-auto md:w-[80%] capitalize">
            {letter.kategoriSurat}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-5 w-full">
          <span className="text-sm font-light w-auto md:w-[20%]">
            Asal surat:
          </span>
          <span className="font-medium w-auto md:w-[80%] capitalize">
            {letter.asalSurat}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-5 w-full">
          <span className="text-sm font-light w-auto md:w-[20%]">
            Ditujukan kepada:
          </span>
          <span className="font-medium w-auto md:w-[80%]">
            {[letter.kepada.firstName, letter.kepada.lastName].join(' ')} |{' '}
            {letter.kepada.email}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-5 w-full">
          <span className="text-sm font-light w-auto md:w-[20%]">
            File lampiran:
          </span>
          <Link
            href={letter.photoSurat}
            target="_blank"
            className=" w-auto md:w-[80%] block"
          >
            {letter.photoSurat.substring(62)}
          </Link>
        </div>
      </div>

      <div className="flex flex-col mb-5">
        <div className="bg-white shadow-sm py-4 px-5">
          <span className="text-base font-normal">
            Forward this message(s).
          </span>
          <p className="text-sm text-gray-400 mt-2 mb-8">
            Please fill the input field with a correct Employee{`'`}s email.
          </p>

          <form>
            <div className="flex flex-col sm:flex-row sm:items-start md:items-center gap-0 sm:gap-8 sm:w-2/3">
              <label
                htmlFor="forwardto"
                className="text-sm font-light w-0 md:w-[20%]"
              >
                Forward to
              </label>
              <input
                type="text"
                className="border px-3 py-1.5 rounded w-full sm w-auto:md:w-[80%] ml-auto placeholder:text-sm text-sm"
                placeholder="Forward to"
                id="forwardto"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm items-start:md:items-center gap-0 sm:gap-8 sm:w-2/3 mt-5">
              <button
                type="submit"
                className="uppercase font-light bg-[#1e1e1e] hover:bg-gray-700 px-5 py-1.5 text-white rounded text-xs tracking-wider"
              >
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetterDetails;

LetterDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { id } = params;
  const data = await fetch(`http://localhost:3000/api/letter/${id}`);

  return {
    props: {
      letter: await data.json(),
    },
  };
}
