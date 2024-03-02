import React from 'react';
import PasswordGenerator from '../../components/PasswordGenerator';
import Head from 'next/head';

const PasswordGeneratorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Password Generator Tool</title>
        <meta name="description" content="Generate a secure password easily." />
      </Head>
      <div className="container mx-auto">
        <h1 className="text-xl font-bold my-3">Password Generator</h1>
        <PasswordGenerator />
      </div>
    </>
  );
};

export default PasswordGeneratorPage;
