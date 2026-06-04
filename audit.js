const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const linkRegex = /<(?:Link|a)[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/(?:Link|a)>/gi;

const results = {};

walkDir(srcDir, (filePath) => {
    if (!filePath.endsWith('page.tsx')) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(srcDir, filePath).replace(/\\/g, '/');
    
    let match;
    const links = [];
    while ((match = linkRegex.exec(content)) !== null) {
        let href = match[1];
        let anchor = match[2].replace(/<[^>]*>?/gm, '').trim().replace(/\s+/g, ' ');
        // If anchor has a bunch of components, we strip them. Sometimes an icon is inside.
        links.push({ href, anchor });
    }
    
    if (links.length > 0) {
        results[relativePath] = links;
    }
});

console.log(JSON.stringify(results, null, 2));
