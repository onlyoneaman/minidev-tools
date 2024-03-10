import Head from 'next/head';
import {Metadata} from "next";

interface SEOProps {
  title: Metadata["title"];
  description?: string;
}

const SEO: React.FC<SEOProps> = (
  {
    title,
    description
  }
) => {

  const fullTitle = `${title} | minidev.tools`;

  return(
    <Head>
      <title>{fullTitle}</title>
      {
        description && (
          <meta
            name="description"
            content={description}
            key="desc"
          />
        )
      }
    </Head>
  );
};

export default SEO;
