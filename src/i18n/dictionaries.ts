/**
 * ============================================================================
 * LUXARTE I18N — UI Dictionaries
 * ============================================================================
 * 
 * Shared UI strings for Header, Footer, and common components.
 * Page-specific content lives inline in each page file.
 */

import type { Locale } from './locale';

export interface UIDictionary {
  // Header
  nav: {
    gallery: string;
    bentleyCinema: string;
    outlet: string;
    news: string;
    about: string;
    contact: string;
  };
  header: {
    openMenu: string;
    closeMenu: string;
    menuTitle: string;
  };
  // Footer
  footer: {
    warsawTitle: string;
    wroclawTitle: string;
    brandsTitle: string;
    socialTitle: string;
    copyright: string;
    buildingName: string;
  };
  // Outlet
  outlet: {
    heroSubtitle: string;
    heroDiscount: string;
  };
  // Common
  common: {
    home: string;
    ourBrands: string;
    loading: string;
    noPhoto: string;
    backToOutlet: string;
    askAboutPrice: string;
    clearFilters: string;
    categories: string;
    brands: string;
    clearAllFilters: string;
    filters: string;
    openFilters: string;
    noProducts: string;
    noProductsMessage: string;
    seeAllProducts: string;
    pagination: string;
    firstPage: string;
    prevPage: string;
    nextPage: string;
    lastPage: string;
    productsOf: string;
    products: string;
    contactUs: string;
    relatedPosts: string;
    backToNews: string;
    dimensions: string;
    askForOffer: string;
    similarProducts: string;
    breadcrumbNav: string;
    productCount: string;
    askAboutProducts: string;
    show: string;
    all: string;
    photo2: string;
    categoryProducts: string;
    // Gallery / Lightbox
    enlargePhoto: string;
    closeLabel: string;
    prevPhoto: string;
    nextPhoto: string;
    photoN: string;
    thumbnailN: string;
    noPhotos: string;
  };
}

const pl: UIDictionary = {
  nav: {
    gallery: 'GALERIA',
    bentleyCinema: 'BENTLEY\u00A0HOME CINEMA',
    outlet: 'OUTLET',
    news: 'AKTUALNOŚCI',
    about: 'O NAS',
    contact: 'KONTAKT',
  },
  header: {
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    menuTitle: 'Menu',
  },
  footer: {
    warsawTitle: 'LUXARTE WARSZAWA SHOWROOM',
    wroclawTitle: 'LUXARTE WROCŁAW PROJECT DEPARTMENT',
    brandsTitle: 'NASZE MARKI',
    socialTitle: 'MEDIA SPOŁECZNOŚCIOWE',
    copyright: 'Wszystkie prawa zastrzeżone.',
    buildingName: 'Budynek Opery Narodowej',
  },
  outlet: {
    heroSubtitle: "ZOBACZ MEBLE NAJLEPSZYCH MAREK DOSTĘPNE OD RĘKI W SHOWROOM'ACH LUXARTE!",
    heroDiscount: 'CENY OBNIŻONE NAWET DO – 60 %',
  },
  common: {
    home: 'Strona główna',
    ourBrands: 'Nasze marki',
    loading: 'Ładowanie...',
    noPhoto: 'Brak zdjęcia',
    backToOutlet: '← Wróć do Outlet',
    askAboutPrice: 'ZAPYTAJ O CENĘ',
    clearFilters: 'Wyczyść filtry',
    categories: 'Kategorie',
    brands: 'Marki',
    clearAllFilters: 'Wyczyść wszystkie filtry',
    filters: 'FILTRY',
    openFilters: 'Otwórz filtry',
    noProducts: 'Brak produktów',
    noProductsMessage: 'Nie znaleziono produktów spełniających wybrane kryteria.',
    seeAllProducts: 'Zobacz wszystkie produkty',
    pagination: 'Paginacja',
    firstPage: 'Pierwsza strona',
    prevPage: 'Poprzednia strona',
    nextPage: 'Następna strona',
    lastPage: 'Ostatnia strona',
    productsOf: 'z',
    products: 'produktów',
    contactUs: 'Skontaktuj się z nami',
    relatedPosts: 'Powiązane posty',
    backToNews: '← Powrót do aktualności',
    dimensions: 'Wymiary',
    askForOffer: 'Zapytaj o ofertę',
    similarProducts: 'Podobne produkty',
    breadcrumbNav: 'Ścieżka nawigacji',
    productCount: 'produktów',
    askAboutProducts: 'Zapytaj o produkty',
    show: 'Pokaż',
    all: 'Wszystkie',
    photo2: 'zdjęcie 2',
    categoryProducts: 'Brak produktów w wybranej kategorii.',    enlargePhoto: 'Powi\u0119ksz zdj\u0119cie',
    closeLabel: 'Zamknij',
    prevPhoto: 'Poprzednie zdj\u0119cie',
    nextPhoto: 'Nast\u0119pne zdj\u0119cie',
    photoN: 'Zdj\u0119cie',
    thumbnailN: 'Miniatura',
    noPhotos: 'Brak zdj\u0119\u0107 produktu',  },
};

const en: UIDictionary = {
  nav: {
    gallery: 'GALLERY',
    bentleyCinema: 'BENTLEY\u00A0HOME CINEMA',
    outlet: 'OUTLET',
    news: 'NEWS',
    about: 'ABOUT',
    contact: 'CONTACT',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuTitle: 'Menu',
  },
  footer: {
    warsawTitle: 'LUXARTE WARSAW SHOWROOM',
    wroclawTitle: 'LUXARTE WROCŁAW PROJECT DEPARTMENT',
    brandsTitle: 'OUR BRANDS',
    socialTitle: 'SOCIAL MEDIA',
    copyright: 'All rights reserved.',
    buildingName: 'National Opera Building',
  },
  outlet: {
    heroSubtitle: 'DISCOVER PREMIUM FURNITURE AVAILABLE IMMEDIATELY AT LUXARTE SHOWROOMS!',
    heroDiscount: 'PRICES REDUCED BY UP TO 60%',
  },
  common: {
    home: 'Home',
    ourBrands: 'Our brands',
    loading: 'Loading...',
    noPhoto: 'No photo',
    backToOutlet: '← Back to Outlet',
    askAboutPrice: 'ASK FOR PRICE',
    clearFilters: 'Clear filters',
    categories: 'Categories',
    brands: 'Brands',
    clearAllFilters: 'Clear all filters',
    filters: 'FILTERS',
    openFilters: 'Open filters',
    noProducts: 'No products',
    noProductsMessage: 'No products found matching selected criteria.',
    seeAllProducts: 'See all products',
    pagination: 'Pagination',
    firstPage: 'First page',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    lastPage: 'Last page',
    productsOf: 'of',
    products: 'products',
    contactUs: 'Contact us',
    relatedPosts: 'Related posts',
    backToNews: '← Back to news',
    dimensions: 'Dimensions',
    askForOffer: 'Request a quote',
    similarProducts: 'Similar products',
    breadcrumbNav: 'Breadcrumb navigation',
    productCount: 'products',
    askAboutProducts: 'Ask about',
    show: 'Show',
    all: 'All',
    photo2: 'photo 2',
    categoryProducts: 'No products in selected category.',
    enlargePhoto: 'Enlarge photo',
    closeLabel: 'Close',
    prevPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    photoN: 'Photo',
    thumbnailN: 'Thumbnail',
    noPhotos: 'No product photos',
  },
};

const dictionaries: Record<Locale, UIDictionary> = { pl, en };

export function getDictionary(locale: Locale): UIDictionary {
  return dictionaries[locale];
}
