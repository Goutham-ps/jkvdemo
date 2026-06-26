import fs from 'fs';

function replaceInFile(path: string) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9-]+)\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-$1?auto=format&fit=crop&w=1200&q=80');
  fs.writeFileSync(path, content, 'utf8');
}

replaceInFile('src/pages/About.tsx');
console.log('Replaced URLs in About.tsx');
