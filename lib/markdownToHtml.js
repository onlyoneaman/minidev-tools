import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';

export async function markdownToHtml(filename) {
    try {
        const markdownDir = path.join(process.cwd(), 'components', 'about');
        const fullPath = path.join(markdownDir, `${filename}.md`);
        const markdown = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : '';
        const result = await remark().use(html).process(markdown);
        return result.toString();
    } catch (error) {
        console.error('Error in markdownToHtml:', error);
        return '';
    }
}
