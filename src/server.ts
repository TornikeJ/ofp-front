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

const europe = [
  {
    title: 'Is German Beer the Best?',
    image: 'https://beerhunter.co.uk/cdn/shop/files/German_Breweries_Craft_Beer_330ml_Mixed_Case_with_Beerhunter_Glass_12_Pack_-_BEERHUNTER-4205215_1600x.png?v=1728131450',
    date: '2020-01-01',
    blog: [
      `<h2>Hello World</h2>`,
      `<img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg"
    alt="">`,
      `<h2>History</h2>`,
    ]
  },
  {
    title: 'France and the French Cuisine',
    image: 'https://frenchsidetravel.com/wp-content/uploads/2022/06/food-french-shutterstock.jpg',
    date: '2023-01-01',
    blog: [
      `<h2>Hello World</h2>`,
      `<p>French cuisine is the cooking traditions and practices of France. In the 14th century, Guillaume Tirel, a court
      chef known as "Taillevent", wrote Le Viandier, one of the earliest recipe collections of medieval France. In the
      17th century, chefs François Pierre La Varenne and Marie-Antoine Carême spearheaded movements that shifted French
      cooking away from its foreign influences and developed France's own indigenous style.

      Cheese and wine are a major part of the cuisine. They play different roles regionally and nationally, with many
    variations and appellation d'origine contrôlée (AOC) (regulated appellation) laws.[1]

    Culinary tourism and the Guide Michelin helped to acquaint commoners with the cuisine bourgeoise of the urban
    elites
    and the peasant cuisine of the French countryside starting in the 20th century. Many dishes that were once
    regional
    have proliferated in variations across the country.

    Knowledge of French cooking has contributed significantly to Western cuisines. Its criteria are used widely in
      Western cookery school boards and culinary education. In November 2010, French gastronomy was added by the UNESCO
    to
    its lists of the world's "intangible cultural heritage".[2][3]</p>`,
      `<img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg"
    alt="">`,
      `<h2>History</h2>`,
      `<hr>`,
      `<h4>Middle Ages</h4>`,
      `<p>In French medieval cuisine, banquets were common among the aristocracy. Multiple courses would be prepared, but
    served in a style called service en confusion, or all at once. Food was generally eaten by hand, meats being
    sliced off in large pieces held between the thumb and two fingers. The sauces were highly seasoned and thick, and
    heavily flavored mustards were used.

    Pies were a common banquet item, with the crust serving primarily as a container, rather than as food itself, and
    it was not until the very end of the Late Middle Ages that the shortcrust pie was developed.

      Meals often ended with an issue de table, which later changed into the modern dessert, and typically consisted of
    dragées (in the Middle Ages, meaning spiced lumps of hardened sugar or honey), aged cheese, and spiced wine, such
as hypocras.[4]: 1–7

The ingredients of the time varied greatly according to the seasons and the church calendar, and many items were
preserved with salt, spices, honey, and other preservatives. Late spring, summer, and autumn afforded abundance,
while winter meals were more sparse. Livestock were slaughtered at the beginning of winter. Beef was often salted,
while pork was salted and smoked. Bacon and sausages would be smoked in the chimney, while the tongue and hams
were brined and dried. Cucumbers were brined as well, while greens would be packed in jars with salt. Fruits, nuts
  and root vegetables would be boiled in honey for preservation. Whale, dolphin and porpoise were considered fish,
  so during Lent, the salted meats of these sea mammals were eaten.[4]: 9–12

Artificial freshwater ponds (often called stews) held carp, pike, tench, bream, eel, and other fish. Poultry was
kept in special yards, with pigeon and squab being reserved for the elite. Game was highly prized, but very rare,
  and included venison, boar, hare, rabbit, and fowl.

  Kitchen gardens provided herbs, including some, such as tansy, rue, pennyroyal, and hyssop, which are rarely used
today. Spices were treasured and very expensive at that time—they included pepper, cinnamon, cloves, nutmeg, and
mace. Some spices used then, but no longer today in French cuisine are cubebs, long pepper (both from vines
similar to black pepper), grains of paradise, and galengale.

  Sweet-sour flavors were commonly added to dishes with vinegar and verjus combined with sugar (for the affluent) or
honey. A common form of food preparation was to thoroughly cook, pound, and strain mixtures into fine pastes and
mushes, something believed to be beneficial to make use of nutrients.[4]: 13–15

Visual display was prized. Brilliant colors were obtained by the addition of, for example, juices from spinach and
the green part of leeks. Yellow came from saffron or egg yolk, while red came from sunflower, and purple came from
Crozophora tinctoria or Heliotropium europaeum.

  Gold and silver leaf were placed on food surfaces and brushed with egg whites. Elaborate and showy dishes were the
result, such as tourte parmerienne which was a pastry dish made to look like a castle with chicken-drumstick
  turrets coated with gold leaf. One of the grandest showpieces of the time was a roast swan or peacock sewn back
into its skin with feathers intact, the feet and beak being gilded. Since both birds are stringy, and taste
unpleasant, the skin and feathers could be kept and filled with the cooked, minced and seasoned flesh of tastier
birds, like goose or chicken.[4]: 15–16

The most well-known French chef of the Middle Ages was Guillaume Tirel, also known as Taillevent. Taillevent
worked in numerous royal kitchens during the 14th century. His first position was as a kitchen boy in 1326. He was
chef to Philip VI, then the Dauphin who was son of John II. The Dauphin became King Charles V of France in 1364,
with Taillevent as his chief cook. His career spanned sixty-six years, and upon his death, he was buried in grand
style between his two wives. His tombstone represents him in armor, holding a shield with three cooking pots,
  marmites, on it.[4]: 18–21 </p>`
    ]
  },
  {
    title: 'Switzerland - The Best of It',
    image: 'https://a.storyblok.com/f/252707/2048x1366/403129efe3/blog_header_places_in_switzerland.webp',
    date: '2023-01-01'
  }
];

const asia = [
  {
    title: 'Thailand - Beaches, Food and History',
    image: 'https://www.flightgift.com/media/wp/FG/2024/08/BANGKOK.jpg',
    date: '2024-01-01'
  }
];
const southAmerica = [
  {
    title: 'Brazil - Carnival is Coming',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQH4XOqTxU2wiA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707166950707?e=2147483647&v=beta&t=iT_s4M9Jx3Upmpf_-TxN6ibR2psykdY3w2XdY0aU0Qg',
    date: '2025-01-01'
  }
];
const northAmerica: { title: string; image: string; date: string }[] = [];

app.get('/api/getDestinations', (req, res) => {
    let tempEuropeDTO = [...europe];
    let europeDTO = tempEuropeDTO.map(dest => ({title: dest.title, image: dest.image, date: dest.date}));

    res.send({europe: europeDTO, asia, southAmerica, northAmerica})
  }
)

app.get('/api/getDestinations/:name', (req, res) => {
    const {name} = req.params;
    const allDestinations = [...europe, ...asia, ...southAmerica, ...northAmerica];
    console.log(name);
    const destination = allDestinations.find(dest => dest.title.toLowerCase() === name.toLowerCase());

    destination ? res.send(destination) : res.status(404).send({message: `Destination '${name}' not found`});
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
