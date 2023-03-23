import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';

const LetterDetails = () => {
  return (
    <section>
      <Head>
        <title>User Profile Page</title>
        <meta name="description" content="Profile page, credentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-gray-700 text-3xl font-semibold mb-8">
        Letter details
      </h1>

      <div className="flex flex-col bg-white shadow-sm py-4 px-5 gap-8 rounded mb-5">
        <div className="flex items-center gap-5 w-full md:w-2/3">
          <span className="text-sm font-light w-[20%]">No surat:</span>
          <h3 className="font-medium w-[80%]">22304312</h3>
        </div>

        <div className="flex items-center gap-5 w-full md:w-2/3">
          <span className="text-sm font-light w-[20%]">Tanggal surat:</span>
          <h3 className="font-medium w-[80%]">Dec 1, 2022</h3>
        </div>

        <div className="flex items-center gap-5 w-full md:w-2/3">
          <span className="text-sm font-light w-[20%]">Lampiran:</span>
          <h3 className="font-medium w-[80%]">1</h3>
        </div>

        <div className="flex items-center gap-5 w-full md:w-2/3">
          <span className="text-sm font-light w-[20%]">Jenis surat:</span>
          <h3 className="font-medium w-[80%]">Masuk</h3>
        </div>

        <div className="flex items-center gap-5 w-full md:w-2/3">
          <span className="text-sm font-light w-[20%]">Asal surat:</span>
          <h3 className="font-medium w-[80%]">
            Dinas Pendidikan dan Budaya Kota Jayapura
          </h3>
        </div>

        <div className="flex items-center gap-5 w-full md:w-2/3">
          <span className="text-sm font-light w-[20%]">File lampiran:</span>
          <h3 className="font-medium w-[80%]">SK-22304312.docx</h3>
        </div>
      </div>

      <div className="flex flex-col bg-white shadow-sm py-4 px-5 rounded mb-5">
        <h3 className="text-base font-normal">Forward this message(s).</h3>
        <p className="text-sm text-gray-400 mt-2 mb-8">
          Please fill the input field with a correct Employee{`'`}s email.
        </p>

        <form>
          <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3">
            <label
              htmlFor="forwardto"
              className="text-sm font-light w-0 sm:w-[20%]"
            >
              Forward to
            </label>
            <input
              type="text"
              className="border px-3 py-1.5 rounded w-full sm:w-[80%] ml-auto placeholder:text-sm text-sm"
              placeholder="Forward to"
              id="forwardto"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-8 sm:w-2/3 mt-5">
            <button
              type="submit"
              className="uppercase font-light bg-[#1e1e1e] hover:bg-gray-700 px-5 py-1.5 text-white rounded text-xs tracking-wider"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LetterDetails;

LetterDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
