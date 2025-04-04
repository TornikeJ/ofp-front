const fs = require('fs');
const path = require('path');
const { SitemapStream } = require('sitemap'); // Just need the SitemapStream class

// The base URL of your site
const sitemapUrl = 'https://tornikej.github.io/ofp-front';

// Routes to include in your sitemap
const routes = [
  '/home',
  '/about',
  '/destination',
  // Add more routes here
];

// Create a writable stream to save the sitemap
const writeStream = fs.createWriteStream(path.join(__dirname, 'dist/ofp-front/browser', 'sitemap.xml'));

// Create a SitemapStream to handle the sitemap generation
const sitemapStream = new SitemapStream({ hostname: sitemapUrl });

// Handle errors from the write stream and sitemap stream
writeStream.on('error', (err) => {
  console.error('Error writing sitemap file:', err);
});
sitemapStream.on('error', (err) => {
  console.error('Error with the sitemap stream:', err);
});

// Pipe the SitemapStream to the writable stream (saves to a file)
sitemapStream.pipe(writeStream);

// Add the routes to the sitemap
routes.forEach(route => {
  sitemapStream.write({
    url: `${sitemapUrl}${route}`,  // Ensure the full URL is created
    changefreq: 'weekly',   // Adjust the frequency if needed
    priority: 0.8,          // Adjust the priority if needed
    lastmod: new Date().toISOString(), // Set the last modification date
  });
});

// End the stream
sitemapStream.end();

// Optionally, log success after the stream has ended
writeStream.on('finish', () => {
  console.log('Sitemap has been generated successfully.');
});
