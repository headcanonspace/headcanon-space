const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('page.tsx') || name.endsWith('layout.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('d:/headcanon-space/src/app');

let output = '================================================================================\n';
output += 'FULL PROJECT SEO AND TEXT CONTENT EXTRACTION\n';
output += '================================================================================\n\n';

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  output += `\n================================================================================\n`;
  output += `FILE: ${file.replace('d:/headcanon-space/', '')}\n`;
  output += `================================================================================\n\n`;

  // Extract metadata block roughly
  const metaMatch = content.match(/export const metadata.*?{([\s\S]*?)};/);
  if (metaMatch) {
    output += '--- SEO METADATA ---\n';
    // clean it up a bit
    let metaText = metaMatch[1].replace(/["']/g, "").replace(/\n\s+/g, "\n").trim();
    output += metaText + '\n\n';
  }

  // Extract JSON-LD roughly
  const jsonMatch = content.match(/dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(({[\s\S]*?})\)\s*\}\}/g);
  if (jsonMatch) {
    output += '--- STRUCTURED DATA (JSON-LD) ---\n';
    for (const match of jsonMatch) {
      const innerMatch = match.match(/JSON\.stringify\(({[\s\S]*?})\)/);
      if (innerMatch) {
        try {
          const jsonObj = JSON.parse(innerMatch[1]);
          output += JSON.stringify(jsonObj, null, 2) + '\n';
        } catch (e) {
          // just dump raw if parse fails due to dynamic content
          output += innerMatch[1].replace(/\n\s+/g, " ") + '\n';
        }
      }
    }
    output += '\n';
  }

  // Extract generic text and headings
  output += '--- PAGE TEXT SECTIONS ---\n';
  // Strip import statements
  let textContent = content.replace(/import.*?from.*?;/g, '');
  // Strip export default function and basic react wrappers
  textContent = textContent.replace(/export default function.*?\(/g, '');
  // Extract text from tags
  // This is a naive extraction that just looks for text between > and <
  const textMatches = textContent.match(/>([^<]+)</g);
  if (textMatches) {
    for (const match of textMatches) {
      const text = match.replace(/[><]/g, '').trim();
      // Ignore random punctuation, empty strings, and bracketed code
      if (text.length > 2 && !text.includes('{') && !text.match(/^[,\.;:\-\+]+$/)) {
        output += text + '\n';
      }
    }
  } else {
     output += "(No text content found)\n";
  }
}

fs.writeFileSync('d:/headcanon-space/project-seo-features.txt', output);
console.log('Done extracting to project-seo-features.txt');
