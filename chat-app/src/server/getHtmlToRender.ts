import fs from "fs";
import path from "path";

const getHtmlToRender = (content: string) => {
  const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf-8');
  const finalHtml = html
    .replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify({})}
      </script>
    `);
  return finalHtml;
};

export default getHtmlToRender;