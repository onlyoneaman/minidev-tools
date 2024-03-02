export const runtime = 'edge';

export default async (req, res) => {
    // Get the website URL from the query
    const { url } = req.query;

    try {
        // Construct the robots.txt URL
        const robotsUrl = new URL('robots.txt', url).href;
        // Fetch the robots.txt file
        const response = await fetch(robotsUrl);
        // Read the response as text
        const text = await response.text();

        // Simple analysis to check for GPTBot disallowance
        const isDisallowed = text.toLowerCase().includes("user-agent: gptbot") && text.toLowerCase().includes("disallow: /");

        // Respond with the analysis result
        res.status(200).json({ isDisallowed });
    } catch (error) {
        // Handle fetch errors
        res.status(500).json({ error: 'Failed to fetch robots.txt' });
    }
};
