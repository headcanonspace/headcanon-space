const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop&fm=webp&q=80',
    dest: 'public/images/headcanon-generator-example-character.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=500&fit=crop&fm=webp&q=80',
    dest: 'public/images/headcanon-generator-example-relationship.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&h=500&fit=crop&fm=webp&q=80',
    dest: 'public/images/headcanon-generator-example-scenario.webp'
  }
];

async function downloadImage(url, destPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buffer);
  console.log(`Downloaded ${url} to ${destPath}`);
}

async function main() {
  for (const img of images) {
    try {
      await downloadImage(img.url, img.dest);
    } catch (err) {
      console.error(`Error downloading ${img.url}:`, err);
    }
  }
}

main();
