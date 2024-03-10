import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {

  const fullTitle = `${title} | minidev.tools`;

  return(
    <Head>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={description}
        key="desc"
      />
    </Head>
  );
};

export default SEO;
