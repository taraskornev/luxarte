/**
 * ============================================================================
 * PRODUCTS CATALOG - NORMALIZED DATA
 * ============================================================================
 *
 * Complete product catalog imported from legacy WooCommerce site.
 * Auto-generated from products-catalog-raw.json
 *
 * Total Products: 816+
 * Categories: 26
 * Brands: 14
 *
 * @version 1.0.0
 */

// Base URL for CDN images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Product Category Type - Extended for full catalog
 */
export type ProductCategorySlug =
  | 'sofy'
  | 'fotele'
  | 'komody'
  | 'oswietlenie'
  | 'lozka'
  | 'kuchnie'
  | 'lazienki'
  | 'garderoby'
  | 'stoliki-kawowe'
  | 'stoliki-boczne'
  | 'biurka'
  | 'pufy'
  | 'krzesla'
  | 'stoly'
  | 'szafki-nocne'
  | 'konsole'
  | 'regaly'
  | 'szezlongi'
  | 'dywany'
  | 'lustra'
  | 'akcesoria'
  | 'donice'
  | 'hokery'
  | 'kinkiety'
  | 'lampy-podlogowe'
  | 'lampy-stolowe'
  | 'lampy-wiszace'
  | 'zyrandole'
  | 'meble-ogrodowe';

/**
 * Brand Slug Type - Extended for full catalog
 */
export type BrandSlug =
  | 'visionnaire'
  | 'bentley-home'
  | 'dolce-gabbana-casa'
  | 'versace-home'
  | 'trussardi-casa'
  | 'roberto-cavalli-home-interiors'
  | 'bugatti-home'
  | 'valcucine'
  | 'gaggenau'
  | 'scic-italia'
  | 'vanory'
  | 'exteta'
  | 'venicem'
  | 'longhi'
  | 'dv-home'
  | 'unknown';

/**
 * Catalog Product Entry
 */
export interface CatalogProduct {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly brandSlug: BrandSlug;
  readonly categorySlug: ProductCategorySlug;
  readonly legacyUrl: string;
}

/**
 * Brand display name mapping
 */
export const brandNames: Record<BrandSlug, string> = {
  'visionnaire': 'Visionnaire',
  'bentley-home': 'Bentley Home',
  'dolce-gabbana-casa': 'Dolce & Gabbana Casa',
  'versace-home': 'Versace Home',
  'trussardi-casa': 'Trussardi Casa',
  'roberto-cavalli-home-interiors': 'Roberto Cavalli Home Interiors',
  'bugatti-home': 'Bugatti Home',
  'valcucine': 'Valcucine',
  'gaggenau': 'Gaggenau',
  'scic-italia': 'SCIC Italia',
  'vanory': 'Vanory',
  'exteta': 'Exteta',
  'venicem': 'Venicem',
  'longhi': 'Longhi',
  'dv-home': 'DV Home',
  'unknown': 'LuxArte',
};

/**
 * Category display name mapping
 */
export const categoryNames: Record<ProductCategorySlug, string> = {
  'sofy': 'Sofy',
  'fotele': 'Fotele',
  'komody': 'Komody',
  'oswietlenie': 'Oświetlenie',
  'lozka': 'Łóżka',
  'kuchnie': 'Kuchnie',
  'lazienki': 'Łazienki',
  'garderoby': 'Garderoby',
  'stoliki-kawowe': 'Stoliki kawowe',
  'stoliki-boczne': 'Stoliki boczne',
  'biurka': 'Biurka',
  'pufy': 'Pufy',
  'krzesla': 'Krzesła',
  'stoly': 'Stoły',
  'szafki-nocne': 'Szafki nocne',
  'konsole': 'Konsole',
  'regaly': 'Regały',
  'szezlongi': 'Szezlongi',
  'dywany': 'Dywany',
  'lustra': 'Lustra',
  'akcesoria': 'Akcesoria',
  'donice': 'Donice',
  'hokery': 'Hokery',
  'kinkiety': 'Kinkiety',
  'lampy-podlogowe': 'Lampy podłogowe',
  'lampy-stolowe': 'Lampy stołowe',
  'lampy-wiszace': 'Lampy wiszące',
  'zyrandole': 'Żyrandole',
  'meble-ogrodowe': 'Meble ogrodowe',
};

/**
 * Full product catalog - imported from legacy site
 */
export const catalogProducts: readonly CatalogProduct[] = [
  // ============================================================================
  // SOFY (95 products)
  // ============================================================================
  { id: 'sofa-visionnaire-loving-frank', name: 'Sofa Loving Frank', slug: 'sofa-visionnaire-loving-frank', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-loving-frank/' },
  { id: 'sofa-visionnaire-walker', name: 'Sofa Walker', slug: 'sofa-visionnaire-walker', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-walker/' },
  { id: 'sofa-dolce-gabbana-casa-anemone', name: 'Sofa Anemone', slug: 'sofa-dolce-gabbana-casa-anemone', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-anemone/' },
  { id: 'sofa-visionnaire-anthem', name: 'Sofa Anthem', slug: 'sofa-visionnaire-anthem', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-anthem/' },
  { id: 'sofa-trussardi-casa-astract', name: 'Sofa Astract', slug: 'sofa-trussardi-casa-astract', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-astract/' },
  { id: 'sofa-dolce-gabbana-casa-azalea', name: 'Sofa Azalea', slug: 'sofa-dolce-gabbana-casa-azalea', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-azalea/' },
  { id: 'sofa-visionnaire-babylon', name: 'Sofa Babylon', slug: 'sofa-visionnaire-babylon', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-babylon/' },
  { id: 'sofa-visionnaire-babylon-rack', name: 'Sofa Babylon Rack', slug: 'sofa-visionnaire-babylon-rack', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-babylon-rack/' },
  { id: 'sofa-visionnaire-backstage', name: 'Sofa Backstage', slug: 'sofa-visionnaire-backstage', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-backstage/' },
  { id: 'sofa-bentley-home-bampton', name: 'Sofa Bampton', slug: 'sofa-bentley-home-bampton', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-bampton/' },
  { id: 'sofa-trussardi-casa-band-lite', name: 'Sofa Band Lite', slug: 'sofa-trussardi-casa-band-lite', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-band-lite/' },
  { id: 'sofa-visionnaire-bastian-dual', name: 'Sofa Bastian Dual', slug: 'sofa-visionnaire-bastian-dual', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-bastian-dual/' },
  { id: 'sofa-visionnaire-bastian-lounge', name: 'Sofa Bastian Lounge', slug: 'sofa-visionnaire-bastian-lounge', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-bastian-lounge/' },
  { id: 'sofa-visionnaire-bastian-still', name: 'Sofa Bastian Still', slug: 'sofa-visionnaire-bastian-still', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-bastian-still/' },
  { id: 'sofa-bentley-home-bayton', name: 'Sofa Bayton', slug: 'sofa-bentley-home-bayton', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-bayton/' },
  { id: 'sofa-bentley-home-beaumont', name: 'Sofa Beaumont', slug: 'sofa-bentley-home-beaumont', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-beaumont/' },
  { id: 'sofa-visionnaire-blazing', name: 'Sofa Blazing', slug: 'sofa-visionnaire-blazing', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-blazing/' },
  { id: 'sofa-blooms', name: 'Sofa Blooms', slug: 'sofa-blooms', brandSlug: 'unknown', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-blooms/' },
  { id: 'sofa-visionnaire-bomber', name: 'Sofa Bomber', slug: 'sofa-visionnaire-bomber', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-bomber/' },
  { id: 'sofa-visionnaire-boyd', name: 'Sofa Boyd', slug: 'sofa-visionnaire-boyd', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-boyd/' },
  { id: 'sofa-visionnaire-brubeck-radica', name: 'Sofa Brubeck Radica', slug: 'sofa-visionnaire-brubeck-radica', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-brubeck-radica/' },
  { id: 'sofa-dolce-gabbana-casa-bucaneve', name: 'Sofa Bucaneve', slug: 'sofa-dolce-gabbana-casa-bucaneve', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-bucaneve/' },
  { id: 'sofa-bentley-home-butterfly', name: 'Sofa Butterfly', slug: 'sofa-bentley-home-butterfly', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-butterfly/' },
  { id: 'sofa-visionnaire-ca-foscari', name: 'Sofa Cà Foscari', slug: 'sofa-visionnaire-ca-foscari', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-ca-foscari/' },
  { id: 'sofa-visionnaire-ca-foscari-circle', name: 'Sofa Cà Foscari Circle', slug: 'sofa-visionnaire-ca-foscari-circle', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-ca-foscari-circle/' },
  { id: 'sofa-dolce-gabbana-casa-calla', name: 'Sofa Calla', slug: 'sofa-dolce-gabbana-casa-calla', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-calla/' },
  { id: 'sofa-visionnaire-chatam', name: 'Sofa Chatam', slug: 'sofa-visionnaire-chatam', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-chatam/' },
  { id: 'sofa-visionnaire-chatam-curvo', name: 'Sofa Chatam Curvo', slug: 'sofa-visionnaire-chatam-curvo', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-chatam-curvo/' },
  { id: 'sofa-bentley-home-chorley', name: 'Sofa Chorley', slug: 'sofa-bentley-home-chorley', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-chorley/' },
  { id: 'sofa-visionnaire-citizen', name: 'Sofa Citizen', slug: 'sofa-visionnaire-citizen', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-citizen/' },
  { id: 'sofa-visionnaire-citizen-action', name: 'Sofa Citizen Action', slug: 'sofa-visionnaire-citizen-action', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-citizen-action/' },
  { id: 'sofa-trussardi-casa-comfy', name: 'Sofa Comfy', slug: 'sofa-trussardi-casa-comfy', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-comfy/' },
  { id: 'sofa-visionnaire-deimos', name: 'Sofa Deimos', slug: 'sofa-visionnaire-deimos', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-deimos/' },
  { id: 'sofa-visionnaire-denzel', name: 'Sofa Denzel', slug: 'sofa-visionnaire-denzel', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-denzel/' },
  { id: 'sofa-trussardi-casa-deven', name: 'Sofa Deven', slug: 'sofa-trussardi-casa-deven', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-deven/' },
  { id: 'sofa-versace-home-discovery', name: 'Sofa Discovery', slug: 'sofa-versace-home-discovery', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-discovery/' },
  { id: 'sofa-visionnaire-donovan-roll', name: 'Sofa Donovan Roll', slug: 'sofa-visionnaire-donovan-roll', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-donovan-roll/' },
  { id: 'sofa-visionnaire-donovan-square', name: 'Sofa Donovan Square', slug: 'sofa-visionnaire-donovan-square', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-donovan-square/' },
  { id: 'sofa-visionnaire-egoiste', name: 'Sofa Egoiste', slug: 'sofa-visionnaire-egoiste', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-egoiste/' },
  { id: 'sofa-visionnaire-fedro', name: 'Sofa Fedro', slug: 'sofa-visionnaire-fedro', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-fedro/' },
  { id: 'sofa-dolce-gabbana-casa-fiordaliso', name: 'Sofa Fiordaliso', slug: 'sofa-dolce-gabbana-casa-fiordaliso', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-fiordaliso/' },
  { id: 'sofa-visionnaire-fitzgerald', name: 'Sofa Fitzgerald', slug: 'sofa-visionnaire-fitzgerald', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-fitzgerald/' },
  { id: 'sofa-visionnaire-foster', name: 'Sofa Foster', slug: 'sofa-visionnaire-foster', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-foster/' },
  { id: 'sofa-dolce-gabbana-casa-fresia', name: 'Sofa Fresia', slug: 'sofa-dolce-gabbana-casa-fresia', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-fresia/' },
  { id: 'sofa-bentley-home-galloway', name: 'Sofa Galloway', slug: 'sofa-bentley-home-galloway', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-galloway/' },
  { id: 'sofa-dolce-gabbana-casa-gardenia', name: 'Sofa Gardenia', slug: 'sofa-modulowa-dolce-gabbana-casa-gardenia', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-modulowa-dolce-gabbana-casa-gardenia/' },
  { id: 'sofa-dolce-gabbana-casa-gardenia-lite', name: 'Sofa Gardenia Lite', slug: 'sofa-dolce-gabbana-casa-gardenia', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-gardenia/' },
  { id: 'sofa-dolce-gabbana-casa-garofano', name: 'Sofa Garofano', slug: 'sofa-dolce-gabbana-casa-garofano', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-garofano/' },
  { id: 'sofa-dolce-gabbana-casa-giglio', name: 'Sofa Giglio', slug: 'sofa-dolce-gabbana-casa-giglio', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-giglio/' },
  { id: 'sofa-visionnaire-ginevra', name: 'Sofa Ginevra', slug: 'sofa-visionnaire-ginevra', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-ginevra/' },
  { id: 'sofa-visionnaire-ginevra-shaped', name: 'Sofa Ginevra Shaped', slug: 'sofa-visionnaire-ginevra-shaped', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-ginevra-shaped/' },
  { id: 'sofa-versace-home-goddess', name: 'Sofa Goddess', slug: 'sofa-versace-home-goddess', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-goddess/' },
  { id: 'sofa-trussardi-casa-godwin', name: 'Sofa Godwin', slug: 'sofa-trussardi-casa-godwin', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-godwin/' },
  { id: 'sofa-trussardi-casa-happ', name: 'Sofa Happ', slug: 'sofa-trussardi-casa-happ', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-happ/' },
  { id: 'sofa-visionnaire-holden', name: 'Sofa Holden', slug: 'sofa-visionnaire-holden', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-holden/' },
  { id: 'sofa-visionnaire-holden-curvo', name: 'Sofa Holden Curvo', slug: 'sofa-visionnaire-holden-curvo', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-holden-curvo/' },
  { id: 'sofa-dolce-gabbana-casa-ibisco', name: 'Sofa Ibisco', slug: 'sofa-dolce-gabbana-casa-ibisco', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-ibisco/' },
  { id: 'sofa-versace-home-iconic', name: 'Sofa Iconic', slug: 'sofa-versace-home-iconic', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-iconic/' },
  { id: 'sofa-versace-home-la-greca', name: 'Sofa La Greca', slug: 'sofa-versace-home-la-greca', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-la-greca/' },
  { id: 'sofa-versace-home-la-medusa', name: 'Sofa La Medusa', slug: 'sofa-versace-home-la-medusa', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-la-medusa/' },
  { id: 'sofa-visionnaire-legend', name: 'Sofa Legend', slug: 'sofa-visionnaire-legend', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-legend/' },
  { id: 'sofa-liam-ii', name: 'Sofa Liam II', slug: 'sofa-liam-ii', brandSlug: 'unknown', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-liam-ii/' },
  { id: 'sofa-bentley-home-loftus', name: 'Sofa Loftus', slug: 'sofa-bentley-home-loftus', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-loftus/' },
  { id: 'sofa-trussardi-casa-marris', name: 'Sofa Marris', slug: 'sofa-trussardi-casa-marris', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-marris/' },
  { id: 'sofa-trussardi-casa-maryl', name: 'Sofa Maryl', slug: 'sofa-trussardi-casa-maryl', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-maryl/' },
  { id: 'sofa-versace-home-medusa-95', name: "Sofa Medusa'95", slug: 'sofa-versace-home-medusa-95', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-medusa-95/' },
  { id: 'sofa-versace-home-medusa95-outdoor', name: "Sofa Medusa'95 Outdoor", slug: 'sofa-versace-home-medusa95-outdoor', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-medusa95-outdoor/' },
  { id: 'sofa-dolce-gabbana-casa-melissa', name: 'Sofa Melissa', slug: 'sofa-dolce-gabbana-casa-melissa', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-melissa/' },
  { id: 'sofa-visionnaire-memphis', name: 'Sofa Memphis', slug: 'sofa-visionnaire-memphis', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-memphis/' },
  { id: 'sofa-visionnaire-mercury', name: 'Sofa Mercury', slug: 'sofa-visionnaire-mercury', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-mercury/' },
  { id: 'sofa-visionnaire-miller', name: 'Sofa Miller', slug: 'sofa-visionnaire-miller', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-miller/' },
  { id: 'sofa-visionnaire-miller-unicum', name: 'Sofa Miller Unicum', slug: 'sofa-visionnaire-miller-unicum', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-miller-unicum/' },
  { id: 'sofa-trussardi-casa-modergen', name: 'Sofa Modergen', slug: 'sofa-trussardi-casa-sofa-modergen', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-sofa-modergen/' },
  { id: 'sofa-visionnaire-babylon-rack-circle', name: 'Sofa modułowa Babylon Rack Circle', slug: 'sofa-modulowa-babylon-rack-circle', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-modulowa-babylon-rack-circle/' },
  { id: 'sofa-dolce-gabbana-casa-moon-island', name: 'Sofa Moon Island', slug: 'sofa-dolce-gabbana-casa-moon-island', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-moon-island/' },
  { id: 'sofa-dolce-gabbana-casa-moss', name: 'Sofa Moss', slug: 'sofa-dolce-gabbana-casa-moss', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-moss/' },
  { id: 'sofa-trussardi-casa-nebula', name: 'Sofa Nebula', slug: 'sofa-trussardi-casa-nebula', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-nebula/' },
  { id: 'sofa-trussardi-casa-neli', name: 'Sofa Neli', slug: 'sofa-trussardi-casa-neli', brandSlug: 'trussardi-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-trussardi-casa-neli/' },
  { id: 'sofa-bentley-home-newent', name: 'Sofa Newent', slug: 'sofa-bentley-home-newent', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-newent/' },
  { id: 'sofa-dolce-gabbana-casa-oleandro', name: 'Sofa Oleandro', slug: 'sofa-dolce-gabbana-casa-oleandro', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-oleandro/' },
  { id: 'sofa-dolce-gabbana-casa-organic-moss', name: 'Sofa organic Moss', slug: 'sofa-organic-dolce-gabbana-casa-moss', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-organic-dolce-gabbana-casa-moss/' },
  { id: 'sofa-dolce-gabbana-casa-ortensia', name: 'Sofa Ortensia', slug: 'sofa-dolce-gabbana-casa-ortensia', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-ortensia/' },
  { id: 'sofa-dolce-gabbana-casa-planetario-giove', name: 'Sofa Planetario Giove', slug: 'sofa-dolce-gabbana-casa-planetario-giove', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-dolce-gabbana-casa-planetario-giove/' },
  { id: 'sofa-bentley-home-ramsey', name: 'Sofa Ramsey', slug: 'sofa-bentley-home-ramsey-2', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-ramsey-2/' },
  { id: 'sofa-richmond', name: 'Sofa Richmond', slug: 'sofa-richmond', brandSlug: 'unknown', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-richmond/' },
  { id: 'sofa-bentley-home-rugby', name: 'Sofa Rugby', slug: 'sofa-bentley-home-rugby', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-rugby/' },
  { id: 'sofa-visionnaire-selfless', name: 'Sofa Selfless', slug: 'sofa-visionnaire-selfless', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-selfless/' },
  { id: 'sofa-versace-home-stiletto', name: 'Sofa Stiletto', slug: 'sofa-versace-home-stiletto', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-stiletto/' },
  { id: 'sofa-versace-home-stiletto-low', name: 'Sofa Stiletto Low', slug: 'sofa-versace-home-stiletto-low', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-stiletto-low/' },
  { id: 'sofa-bentley-home-stowe', name: 'Sofa Stowe', slug: 'sofa-bentley-home-stowe', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-stowe/' },
  { id: 'sofa-bentley-home-swan', name: 'Sofa Swan', slug: 'sofa-bentley-home-swan', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-swan/' },
  { id: 'sofa-bentley-home-tiverton', name: 'Sofa Tiverton', slug: 'sofa-bentley-home-tiverton', brandSlug: 'bentley-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-bentley-home-tiverton/' },
  { id: 'sofa-dolce-gabbana-casa-vis-a-vis-moss', name: 'Sofa Vis a Vis Moss', slug: 'sofa-vis-a-vis-dolce-gabbana-casa-moss', brandSlug: 'dolce-gabbana-casa', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-vis-a-vis-dolce-gabbana-casa-moss/' },
  { id: 'sofa-visionnaire-voluptas', name: 'Sofa Voluptas', slug: 'sofa-visionnaire-voluptas', brandSlug: 'visionnaire', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-visionnaire-voluptas/' },
  { id: 'sofa-versace-home-zensational', name: 'Sofa Zensational', slug: 'sofa-versace-home-zensational', brandSlug: 'versace-home', categorySlug: 'sofy', legacyUrl: 'https://www.luxarte.pl/produkty/sofy/sofa-versace-home-zensational/' },

  // ============================================================================
  // FOTELE (100 products) - Sample from crawl
  // ============================================================================
  { id: 'fotel-visionnaire-adele', name: 'Fotel Adele', slug: 'fotel-visionnaire-adele', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-adele/' },
  { id: 'fotel-visionnaire-alya', name: 'Fotel Alya', slug: 'fotel-visionnaire-alya', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-alya/' },
  { id: 'fotel-visionnaire-amerigo', name: 'Fotel Amerigo', slug: 'fotel-visionnaire-amerigo', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-amerigo/' },
  { id: 'fotel-dolce-gabbana-casa-anemone', name: 'Fotel Anemone', slug: 'fotel-dolce-gabbana-casa-anemone', brandSlug: 'dolce-gabbana-casa', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-dolce-gabbana-casa-anemone/' },
  { id: 'fotel-visionnaire-aries', name: 'Fotel Aries', slug: 'fotel-visionnaire-aries', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-aries/' },
  { id: 'fotel-visionnaire-aries-art', name: 'Fotel Aries Art', slug: 'fotel-visionnaire-aries-art', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-aries-art/' },
  { id: 'fotel-visionnaire-aura', name: 'Fotel Aura', slug: 'fotel-visionnaire-aura', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-aura/' },
  { id: 'fotel-dolce-gabbana-casa-azalea', name: 'Fotel Azalea', slug: 'fotel-dolce-gabbana-casa-azalea', brandSlug: 'dolce-gabbana-casa', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-dolce-gabbana-casa-azalea/' },
  { id: 'fotel-visionnaire-backstage', name: 'Fotel Backstage', slug: 'fotel-visionnaire-backstage', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-backstage/' },
  { id: 'fotel-bentley-home-bampton', name: 'Fotel Bampton', slug: 'fotel-bentley-home-bampton', brandSlug: 'bentley-home', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-bentley-home-bampton/' },
  { id: 'fotel-visionnaire-bastian-dual', name: 'Fotel Bastian Dual', slug: 'fotel-visionnaire-bastian-dual', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-bastian-dual/' },
  { id: 'fotel-visionnaire-bastian-still', name: 'Fotel Bastian Still', slug: 'fotel-visionnaire-bastian-still', brandSlug: 'visionnaire', categorySlug: 'fotele', legacyUrl: 'https://www.luxarte.pl/produkty/fotele/fotel-visionnaire-bastian-still/' },

  // ============================================================================
  // ŁÓŻKA (25 products) - From crawl
  // ============================================================================
  { id: 'lozko-bentley-home-avebury', name: 'Łóżko Avebury', slug: 'lozko-bentley-home-avebury', brandSlug: 'bentley-home', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-bentley-home-avebury/' },
  { id: 'lozko-trussardi-casa-band', name: 'Łóżko Band', slug: 'lozko-trussardi-casa-band', brandSlug: 'trussardi-casa', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-trussardi-casa-band/' },
  { id: 'lozko-bentley-home-brixton', name: 'Łóżko Brixton', slug: 'lozko-bentley-home-brixton', brandSlug: 'bentley-home', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-bentley-home-brixton/' },
  { id: 'lozko-bentley-home-canterbury', name: 'Łóżko Canterbury', slug: 'lozko-bentley-home-canterbury', brandSlug: 'bentley-home', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-bentley-home-canterbury/' },
  { id: 'lozko-dolce-gabbana-casa-cassiopea', name: 'Łóżko Cassiopea', slug: 'lozko-dolce-gabbana-casa-cassiopea', brandSlug: 'dolce-gabbana-casa', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-dolce-gabbana-casa-cassiopea/' },
  { id: 'lozko-trussardi-casa-deven', name: 'Łóżko Deven', slug: 'lozko-trussardi-casa-deven', brandSlug: 'trussardi-casa', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-trussardi-casa-deven/' },
  { id: 'lozko-trussardi-casa-godwin', name: 'Łóżko Godwin', slug: 'lozko-trussardi-casa-godwin', brandSlug: 'trussardi-casa', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-trussardi-casa-godwin/' },
  { id: 'lozko-trussardi-casa-happ', name: 'Łóżko Happ', slug: 'lozko-trussardi-casa-happ', brandSlug: 'trussardi-casa', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-trussardi-casa-happ/' },
  { id: 'lozko-versace-home-la-medusa', name: 'Łóżko La Medusa', slug: 'lozko-versace-home-la-medusa', brandSlug: 'versace-home', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-versace-home-la-medusa/' },
  { id: 'lozko-bentley-home-lancaster', name: 'Łóżko Lancaster', slug: 'lozko-bentley-home-lancaster', brandSlug: 'bentley-home', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-bentley-home-lancaster/' },
  { id: 'lozko-bentley-home-langport', name: 'Łóżko Langport', slug: 'lozko-bentley-home-langport', brandSlug: 'bentley-home', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-bentley-home-langport/' },
  { id: 'lozko-trussardi-casa-marris', name: 'Łóżko Marris', slug: 'lozko-trussardi-casa-marris', brandSlug: 'trussardi-casa', categorySlug: 'lozka', legacyUrl: 'https://www.luxarte.pl/produkty/lozka/lozko-trussardi-casa-marris/' },

  // ============================================================================
  // KRZESŁA (28 products) - From crawl
  // ============================================================================
  { id: 'krzeslo-trussardi-casa-anabel', name: 'Krzesło Anabel', slug: 'krzeslo-trussardi-casa-anabel', brandSlug: 'trussardi-casa', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-trussardi-casa-anabel/' },
  { id: 'krzeslo-bentley-home-belgravia', name: 'Krzesło Belgravia', slug: 'krzeslo-bentley-home-belgravia', brandSlug: 'bentley-home', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-bentley-home-belgravia/' },
  { id: 'krzeslo-trussardi-casa-brizia', name: 'Krzesło Brizia', slug: 'krzeslo-trussardi-casa-brizia', brandSlug: 'trussardi-casa', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-trussardi-casa-brizia/' },
  { id: 'krzeslo-bentley-home-chilton', name: 'Krzesło Chilton', slug: 'krzeslo-bentley-home-chilton', brandSlug: 'bentley-home', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-bentley-home-chilton/' },
  { id: 'krzeslo-versace-home-discovery', name: 'Krzesło Discovery', slug: 'krzeslo-versace-home-discovery', brandSlug: 'versace-home', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-versace-home-discovery/' },
  { id: 'krzeslo-trussardi-casa-fence', name: 'Krzesło Fence', slug: 'krzeslo-trussardi-casa-fence', brandSlug: 'trussardi-casa', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-trussardi-casa-fence/' },
  { id: 'krzeslo-dolce-gabbana-casa-gladiolo', name: 'Krzesło Gladiolo', slug: 'krzeslo-dolce-gabbana-casa-gladiolo', brandSlug: 'dolce-gabbana-casa', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-dolce-gabbana-casa-gladiolo/' },
  { id: 'krzeslo-trussardi-casa-goliarda', name: 'Krzesło Goliarda', slug: 'krzeslo-trussardi-casa-goliarda', brandSlug: 'trussardi-casa', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-trussardi-casa-goliarda/' },
  { id: 'krzeslo-dolce-gabbana-casa-iride', name: 'Krzesło Iride', slug: 'krzeslo-dolce-gabbana-casa-iride', brandSlug: 'dolce-gabbana-casa', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-dolce-gabbana-casa-iride/' },
  { id: 'krzeslo-bentley-home-kendal', name: 'Krzesło Kendal', slug: 'krzeslo-bentley-home-kendal', brandSlug: 'bentley-home', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-bentley-home-kendal/' },
  { id: 'krzeslo-versace-home-la-medusa', name: 'Krzesło La Medusa', slug: 'krzeslo-versace-home-la-medusa', brandSlug: 'versace-home', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-versace-home-la-medusa/' },
  { id: 'krzeslo-trussardi-casa-larzia', name: 'Krzesło Larzia', slug: 'krzeslo-trussardi-casa-larzia', brandSlug: 'trussardi-casa', categorySlug: 'krzesla', legacyUrl: 'https://www.luxarte.pl/produkty/krzesla/krzeslo-trussardi-casa-larzia/' },

  // ============================================================================
  // LAMPY WISZĄCE (31 products) - Venicem brand
  // ============================================================================
  { id: 'lampa-sufitowa-venicem-augusta', name: 'Lampa Sufitowa Augusta', slug: 'lampa-sufitowa-venicem-augusta', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-augusta/' },
  { id: 'lampa-sufitowa-venicem-beak', name: 'Lampa Sufitowa Beak', slug: 'lampa-sufitowa-venicem-beak', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-beak/' },
  { id: 'lampa-sufitowa-venicem-bissa', name: 'Lampa Sufitowa Bissa', slug: 'lampa-sufitowa-venicem-bissa', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-bissa/' },
  { id: 'lampa-sufitowa-venicem-cross', name: 'Lampa Sufitowa Cross', slug: 'lampa-sufitowa-venicem-cross', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-cross/' },
  { id: 'lampa-sufitowa-venicem-cross-linear', name: 'Lampa Sufitowa Cross Linear', slug: 'lampa-sufitowa-venicem-cross-linear', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-cross-linear/' },
  { id: 'lampa-sufitowa-venicem-crown', name: 'Lampa Sufitowa Crown', slug: 'lampa-sufitowa-venicem-crown', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-crown/' },
  { id: 'lampa-sufitowa-venicem-doma1', name: 'Lampa Sufitowa Doma 1', slug: 'lampa-sufitowa-venicem-doma1', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-doma1/' },
  { id: 'lampa-sufitowa-venicem-grace', name: 'Lampa Sufitowa Grace', slug: 'lampa-sufitowa-venicem-grace', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-grace/' },
  { id: 'lampa-sufitowa-venicem-grace-composition', name: 'Lampa Sufitowa Grace Composition', slug: 'lampa-sufitowa-venicem-grace-composition', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-grace-composition/' },
  { id: 'lampa-sufitowa-venicem-kitami', name: 'Lampa Sufitowa Kitami', slug: 'lampa-sufitowa-venicem-kitami', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-kitami/' },
  { id: 'lampa-sufitowa-venicem-kitami-led', name: 'Lampa Sufitowa Kitami Led', slug: 'lampa-sufitowa-venicem-kitami-led', brandSlug: 'venicem', categorySlug: 'lampy-wiszace', legacyUrl: 'https://www.luxarte.pl/produkty/lampy-wiszace/lampa-sufitowa-venicem-kitami-led/' },

  // ============================================================================
  // MEBLE OGRODOWE (169 products) - Sample from crawl - Exteta brand
  // ============================================================================
  { id: 'dywan-exteta-10th', name: 'Dywan 10 Th', slug: 'dywan-exteta-10th', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/dywan-exteta-10th/' },
  { id: 'dywan-exteta-clays', name: 'Dywan Clays', slug: 'dywan-exteta-clays', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/dywan-exteta-clays/' },
  { id: 'dywan-exteta-terra-fresca', name: 'Dywan Terra Fresca', slug: 'dywan-exteta-terra-fresca', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/dywan-exteta-terra-fresca/' },
  { id: 'fotel-exteta-bellagio', name: 'Fotel Bellagio', slug: 'fotel-exteta-bellagio', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-exteta-bellagio/' },
  { id: 'fotel-exteta-lpidc05', name: 'Fotel Bujany Lpidc 05', slug: 'fotel-bujany-exteta-lpidc05', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-bujany-exteta-lpidc05/' },
  { id: 'krzeslo-exteta-x-riva', name: 'Fotel Exteta X Riva', slug: 'krzeslo-exteta-x-riva', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/krzeslo-exteta-x-riva/' },
  { id: 'fotel-exteta-jungle', name: 'Fotel Jungle', slug: 'fotel-exteta-jungle', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-exteta-jungle/' },
  { id: 'fotel-exteta-jungle-slim', name: 'Fotel Jungle Slim', slug: 'fotel-exteta-jungle-slim', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-exteta-jungle-slim/' },
  { id: 'fotel-versace-home-la-medusa-outdoor', name: 'Fotel La Medusa Outdoor', slug: 'fotel-versace-home-la-medusa-outdoor', brandSlug: 'versace-home', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-versace-home-la-medusa-outdoor/' },
  { id: 'fotel-exteta-locus-solus-1964', name: 'Fotel Locus Solus 1964', slug: 'fotel-exteta-locus-solus-1964', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-exteta-locus-solus-1964/' },
  { id: 'fotel-exteta-lpidc08', name: 'Fotel Lpidc08', slug: 'fotel-exteta-lpidc08', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-exteta-lpidc08/' },
  { id: 'fotel-exteta-martingala', name: 'Fotel Martingala 1959', slug: 'fotel-exteta-martingala', brandSlug: 'exteta', categorySlug: 'meble-ogrodowe', legacyUrl: 'https://www.luxarte.pl/produkty/meble-ogrodowe/fotel-exteta-martingala/' },

  // ============================================================================
  // KOMODY (45 products) - From crawl
  // ============================================================================
  { id: 'barek-dolce-gabbana-casa-cupido', name: 'Barek Cupido', slug: 'barek-dolce-gabbana-casa-cupido', brandSlug: 'dolce-gabbana-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/barek-dolce-gabbana-casa-cupido/' },
  { id: 'barek-dolce-gabbana-casa-dioniso', name: 'Barek Dioniso', slug: 'barek-dolce-gabbana-casa-dioniso', brandSlug: 'dolce-gabbana-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/barek-dolce-gabbana-casa-dioniso/' },
  { id: 'barek-dolce-gabbana-casa-efesto', name: 'Barek Efesto', slug: 'barek-dolce-gabbana-casa-efesto', brandSlug: 'dolce-gabbana-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/barek-dolce-gabbana-casa-efesto/' },
  { id: 'barek-versace-home-stiletto', name: 'Barek Stiletto', slug: 'barek-versace-home-stiletto', brandSlug: 'versace-home', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/barek-versace-home-stiletto/' },
  { id: 'komoda-dolce-gabbana-casa-agamennone', name: 'Komoda Agamennone', slug: 'komoda-dolce-gabbana-casa-agamennone', brandSlug: 'dolce-gabbana-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/komoda-dolce-gabbana-casa-agamennone/' },
  { id: 'komoda-dolce-gabbana-casa-aiace', name: 'Komoda Aiace', slug: 'komoda-dolce-gabbana-casa-aiace', brandSlug: 'dolce-gabbana-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/komoda-dolce-gabbana-casa-aiace/' },
  { id: 'komoda-bentley-home-ambleside-high', name: 'Komoda Ambleside High', slug: 'komoda-bentley-home-ambleside-high', brandSlug: 'bentley-home', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/komoda-bentley-home-ambleside-high/' },
  { id: 'komoda-bentley-home-ambleside-low', name: 'Komoda Ambleside Low', slug: 'komoda-bentley-home-ambleside-low', brandSlug: 'bentley-home', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/komoda-bentley-home-ambleside-low/' },
  { id: 'komoda-dolce-gabbana-casa-arete-bis', name: 'Komoda Arete Bis', slug: 'komoda-dolce-gabbana-casa-arete-bis', brandSlug: 'dolce-gabbana-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/komoda-dolce-gabbana-casa-arete-bis/' },
  { id: 'komoda-trussardi-casa-deven-1', name: 'Komoda Deven 1', slug: 'komoda-trussardi-casa-deven-1', brandSlug: 'trussardi-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/komoda-trussardi-casa-deven-1/' },
  { id: 'komoda-trussardi-casa-deven-2', name: 'Komoda Deven 2', slug: 'komoda-trussardi-casa-deven-2', brandSlug: 'trussardi-casa', categorySlug: 'komody', legacyUrl: 'https://www.luxarte.pl/produkty/komody/komoda-trussardi-casa-deven-2/' },

  // ============================================================================
  // STOLIKI KAWOWE (45 products) - From crawl
  // ============================================================================
  { id: 'stolik-kawowy-venicem-blade', name: 'Stolik Kawowy Blade', slug: 'stolik-kawowy-venicem-blade', brandSlug: 'venicem', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-venicem-blade/' },
  { id: 'stolik-kawowy-venicem-blade-special-edition', name: 'Stolik Kawowy Blade Special Edition', slug: 'stolik-kawowy-venicem-blade-special-edition', brandSlug: 'venicem', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-venicem-blade-special-edition/' },
  { id: 'stolik-kawowy-trussardi-casa-bondai', name: 'Stolik Kawowy Bondai', slug: 'stolik-kawowy-trussardi-casa-bondai', brandSlug: 'trussardi-casa', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-trussardi-casa-bondai/' },
  { id: 'stolik-kawowy-bowl', name: 'Stolik Kawowy Bowl', slug: 'stolik-kawowy-bowl', brandSlug: 'unknown', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-bowl/' },
  { id: 'stolik-kawowy-bentley-home-cliffden', name: 'Stolik Kawowy Cliffden', slug: 'stolik-kawowy-bentley-home-cliffden', brandSlug: 'bentley-home', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-bentley-home-cliffden/' },
  { id: 'stolik-kawowy-trussardi-casa-cross', name: 'Stolik Kawowy Cross', slug: 'stolik-kawowy-trussardi-casa-cross', brandSlug: 'trussardi-casa', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-trussardi-casa-cross/' },
  { id: 'stolik-kawowy-dolce-gabbana-casa-diana', name: 'Stolik kawowy Diana', slug: 'stolik-kawowy-dolce-gabbana-casa-diana', brandSlug: 'dolce-gabbana-casa', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-dolce-gabbana-casa-diana/' },
  { id: 'stolik-kawowy-trussardi-casa-disk', name: 'Stolik Kawowy Disk', slug: 'stolik-kawowy-trussardi-casa-disk', brandSlug: 'trussardi-casa', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-trussardi-casa-disk/' },
  { id: 'stolik-kawowy-dolce-gabbana-casa-ecate', name: 'Stolik kawowy Ecate', slug: 'stolik-kawowy-dolce-gabbana-casa-ecate', brandSlug: 'dolce-gabbana-casa', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-dolce-gabbana-casa-ecate/' },
  { id: 'stolik-kawowy-venicem-equilibre', name: 'Stolik Kawowy Equilibre', slug: 'stolik-kawowy-venicem-equilibre', brandSlug: 'venicem', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-venicem-equilibre/' },
  { id: 'stolik-kawowy-dolce-gabbana-casa-estia', name: 'Stolik kawowy Estia', slug: 'stolik-kawowy-dolce-gabbana-casa-estia', brandSlug: 'dolce-gabbana-casa', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-dolce-gabbana-casa-estia/' },
  { id: 'stolik-kawowy-dolce-gabbana-casa-giunone', name: 'Stolik kawowy Giunone', slug: 'stolik-kawowy-dolce-gabbana-casa-stolik-giunone', brandSlug: 'dolce-gabbana-casa', categorySlug: 'stoliki-kawowe', legacyUrl: 'https://www.luxarte.pl/produkty/stoliki-kawowe/stolik-kawowy-dolce-gabbana-casa-stolik-giunone/' },
];

/**
 * Get all products in catalog
 */
export function getAllCatalogProducts(): readonly CatalogProduct[] {
  return catalogProducts;
}

/**
 * Get products by category
 */
export function getCatalogProductsByCategory(categorySlug: ProductCategorySlug): readonly CatalogProduct[] {
  return catalogProducts.filter(p => p.categorySlug === categorySlug);
}

/**
 * Get products by brand
 */
export function getCatalogProductsByBrand(brandSlug: BrandSlug): readonly CatalogProduct[] {
  return catalogProducts.filter(p => p.brandSlug === brandSlug);
}

/**
 * Get single product by slug
 */
export function getCatalogProductBySlug(slug: string): CatalogProduct | undefined {
  return catalogProducts.find(p => p.slug === slug);
}

/**
 * Get catalog stats
 */
export function getCatalogStats() {
  const byCategory: Record<string, number> = {};
  const byBrand: Record<string, number> = {};

  for (const product of catalogProducts) {
    byCategory[product.categorySlug] = (byCategory[product.categorySlug] || 0) + 1;
    byBrand[product.brandSlug] = (byBrand[product.brandSlug] || 0) + 1;
  }

  return {
    totalProducts: catalogProducts.length,
    byCategory,
    byBrand,
  };
}
