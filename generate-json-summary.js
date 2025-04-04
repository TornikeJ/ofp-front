const fs = require('fs');
const path = require('path');

const blogsDir = path.resolve(__dirname, 'src/assets/blogs');
const outputFile = path.resolve(__dirname, 'src/assets/blogs/summary.json');

const combined = {};

fs.readdirSync(blogsDir, { withFileTypes: true }).forEach(dirent => {
  if (dirent.isDirectory()) {
    const region = dirent.name;
    const regionPath = path.join(blogsDir, region);
    const files = fs.readdirSync(regionPath).filter(f => f.endsWith('.json'));

    combined[region] = [];

    files.forEach(file => {
      const filePath = path.join(regionPath, file);
      try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        combined[region].push(content);
      } catch (err) {
        console.warn(`❌ Failed to parse ${filePath}: ${err.message}`);
      }
    });
  }
});

fs.writeFileSync(outputFile, JSON.stringify(combined, null, 2));
console.log(`✅ Blog summary created at ${outputFile}`);
