import React from 'react';
import tools from '@/components/tools/tools.json';
import dynamic from 'next/dynamic';
import SEO from '@/components/SEO';
import {useRouter} from "next/router";
import ToolLayout from "@/components/ToolLayout";
import {GetStaticPaths, GetStaticProps} from "next";
import {markdownToHtml} from "@/lib/markdownToHtml";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = tools.map(tool => ({ params: { toolId: tool.id } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await markdownToHtml(params?.toolId as string);

  return { props: { content } };
}

const ToolPage: React.FC<{ content: string }> = ({content}) => {
  const { toolId } = useRouter().query;
  const tool = tools.find(t => t.id === toolId);

  if (!tool) {
    return <p>Tool not found</p>;
  }

  const ToolComponent = dynamic(() =>
    import(`@/components/tools/${tool.component}`)
  );

  return (
    <ToolLayout
      tool={tool}
    >
      <SEO title={tool.title} description={tool.description} />

      <ToolComponent />

      {
        content && (
          <div
            className={"p-3 mt-12 bg-granite rounded my-5"}
          >
            <h2
              className={"border-b text-lg"}
            >
              About {tool.title}
            </h2>
            <div
              className={"markdown"}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )
      }

    </ToolLayout>
  );
};

export default ToolPage;
