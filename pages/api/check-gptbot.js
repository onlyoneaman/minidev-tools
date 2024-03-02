// Determine if running in a Cloudflare Worker environment
const isCloudflareWorker = typeof Response === "function" && typeof addEventListener === "function";

export const runtime = isCloudflareWorker ? 'edge' : 'node';

export default async (req, res) => {
    let url;

    if (isCloudflareWorker) {
        // Extract URL from the Cloudflare Worker request
        const { searchParams } = new URL(req.url);
        url = searchParams.get('url');
    } else {
        // Extract URL from a typical Node.js/Express request
        url = req.query.url;
    }

    try {
        // Construct the robots.txt URL
        const robotsUrl = new URL('robots.txt', url).href;
        // Fetch the robots.txt file
        const response = await fetch(robotsUrl);
        // Read the response as text
        const text = await response.text();

        // Simple analysis to check for GPTBot disallowance
        const isDisallowed = text.toLowerCase().includes("user-agent: gptbot") && text.toLowerCase().includes("disallow: /");

        // Prepare the response
        const result = { isDisallowed };

        if (isCloudflareWorker) {
            // Use Cloudflare Worker's way to return a response
            return new Response(JSON.stringify(result), {
                headers: { "Content-Type": "application/json" },
            });
        } else {
            // Use Express/Node.js way to send a response
            return res.status(200).json(result);
        }
    } catch (error) {
        // Handle fetch errors
        const errorMessage = { error: 'Failed to fetch robots.txt' };

        if (isCloudflareWorker) {
            return new Response(JSON.stringify(errorMessage), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return res.status(500).json(errorMessage);
        }
    }
};
