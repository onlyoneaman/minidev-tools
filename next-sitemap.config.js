const tools = require('./components/tools/tools.json')

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://tools.amankumar.ai',
    generateRobotsTxt: true,
    additionalPaths: async (config) => (
        tools.map((tool) => ({
            loc: `${config.siteUrl}/${tool.id}`,
            lastmod: new Date().toISOString(),
        })
    ))
}
