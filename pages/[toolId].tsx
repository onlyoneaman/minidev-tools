import React from 'react';
import tools from '@/components/tools/tools.json';
import dynamic from 'next/dynamic';
import SEO from '@/components/SEO';
import {useRouter} from "next/router";
import ToolLayout from "@/components/ToolLayout";

const ToolPage: React.FC = () => {
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
    </ToolLayout>
  );
};

export default ToolPage;
