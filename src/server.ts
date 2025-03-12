import {APP_BASE_HREF} from '@angular/common';
import {CommonEngine, isMainModule} from '@angular/ssr/node';
import express from 'express';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);

app.get('/api/getCountries', (req, res) => {
    const mockCountries = {
      europe: [
        {
          title: 'Is German Beer the Best?',
          image: 'https://beerhunter.co.uk/cdn/shop/files/German_Breweries_Craft_Beer_330ml_Mixed_Case_with_Beerhunter_Glass_12_Pack_-_BEERHUNTER-4205215_1600x.png?v=1728131450',
          date: '2020-01-01'
        },
        {
          title: 'France and the French Cuisine',
          image: 'https://frenchsidetravel.com/wp-content/uploads/2022/06/food-french-shutterstock.jpg',
          date: '2023-01-01'
        },
        {
          title: 'Switzerland - The Best of It',
          image: 'https://a.storyblok.com/f/252707/2048x1366/403129efe3/blog_header_places_in_switzerland.webp',
          date: '2023-01-01'
        }
      ],
      asia: [
        {
          title: 'Thailand - Beaches, Food and History',
          image: 'https://www.flightgift.com/media/wp/FG/2024/08/BANGKOK.jpg',
          date: '2024-01-01'
        }
      ],
      southAmerica: [
        {
          title: 'Brazil - Carnival is Coming',
          image: 'https://media.licdn.com/dms/image/v2/D4D12AQH4XOqTxU2wiA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707166950707?e=2147483647&v=beta&t=iT_s4M9Jx3Upmpf_-TxN6ibR2psykdY3w2XdY0aU0Qg',
          date: '2025-01-01'
        }
      ],
      northAmerica: []
    }
    res.send(mockCountries)
  }
)

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const {protocol, originalUrl, baseUrl, headers} = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{provide: APP_BASE_HREF, useValue: baseUrl}],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
