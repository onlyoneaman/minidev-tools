
const generateStructuredData = (
  {
    type = "general", // "general" for the site, "tool" for specific tools
    toolId = "",
    toolName = "",
    toolDescription = "",
    ogImage = "",
    fullTitle = "",
    description = "",
  }) => {
  // Common properties
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "applicationCategory": "Developer Tools",
    "operatingSystem": "Any",
    "creator": {
      "@type": "Person",
      "name": "Aman Kumar",
      "url": 'https://amankumar.ai',
      "sameAs": [
        'https://twitter.com/onlyoneaman',
        'https://github.com/onlyoneaman',
      ]
    },
    "datePublished": '2024-03-05T08:00:00+08:00',
  };

  // Adjust properties based on type
  if (type === "general") {
    Object.assign(structuredData, {
      "name": "minidev.tools",
      "applicationName": "minidev.tools",
      "url": "https://minidev.tools",
      "headline": fullTitle,
      "description": description,
      "features": [
        "Code Formatter",
        "Encode/Decode",
        "Minifiers",
      ],
      "screenshot": [ogImage],
    });
  } else if (type === "tool") {
    Object.assign(structuredData, {
      "name": toolName,
      "applicationName": `minidev.tools - ${toolName}`,
      "url": `https://minidev.tools/${toolId}`,
      "headline": `${toolName} | minidev.tools`,
      "description": toolDescription,
      "features": [toolId],
    });
  }

  return structuredData;
}

export {generateStructuredData};
