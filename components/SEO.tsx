import Head from 'next/head';
import {Metadata} from "next";
import Script from "next/script";
import {generateStructuredData} from "@/components/lib/seoHelper";

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

  const structuredData = generateStructuredData({
    type: "tool",
    toolName: String(title),
    toolDescription: description,
  })

  return (
    <>
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
      />
    </>
  );
};

export default SEO;
