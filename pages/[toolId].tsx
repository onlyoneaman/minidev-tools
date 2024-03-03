import React from 'react';
import tools from '@/components/tools/tools.json';
import dynamic from 'next/dynamic';
import {useRouter} from "next/router";
import ToolLayout from "@/components/ToolLayout/ToolLayout";
import {GetStaticPaths, GetStaticProps} from "next";
import {markdownToHtml} from "@/lib/markdownToHtml";
import ToolAboutComponent from "@/components/ToolLayout/ToolAboutComponent";

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

      <ToolComponent />

      <ToolAboutComponent
        content={content}
        tool={tool}
      />

    </ToolLayout>
  );
};

export default ToolPage;
