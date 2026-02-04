/**
 * ============================================================================
 * SHOWROOM DATA - LUXARTE
 * ============================================================================
 *
 * Centralized contact/showroom data sourced from live site.
 * Real addresses, phones, hours - no invented data.
 *
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Opening Hours Interface
 */
export interface OpeningHours {
  readonly dayOfWeek: string;
  readonly opens: string;
  readonly closes: string;
}

/**
 * Location Interface
 */
export interface ShowroomLocation {
  readonly id: string;
  readonly name: string;
  readonly type: 'showroom' | 'project-department';
  readonly address: {
    readonly streetAddress: string;
    readonly addressLocality: string;
    readonly postalCode: string;
    readonly addressCountry: string;
    readonly buildingNote?: string;
  };
  readonly phone: string;
  readonly email: string;
  readonly openingHours: readonly OpeningHours[];
  readonly coordinates: {
    readonly lat: number;
    readonly lng: number;
  };
  readonly mapUrl: string;
}

/**
 * Social Link Interface
 */
export interface SocialLink {
  readonly platform: 'facebook' | 'instagram' | 'linkedin' | 'pinterest';
  readonly url: string;
  readonly label: string;
}

/**
 * Intent Options for Form
 */
export type InquiryIntent =
  | 'general'
  | 'product'
  | 'brand'
  | 'project'
  | 'outlet'
  | 'design'
  | 'visit';

/**
 * FAQ Item Interface
 */
export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

/**
 * Showroom Data
 */
export const showroomData = {
  company: {
    name: 'LuxArte',
    legalName: 'LuxArte Marek Cimke',
    tagline: 'Fashion for Home',
    nip: '6911137209',
    legalAddress: 'ul. Księcia Witolda 42/1, 50-202 Wrocław',
  },

  locations: [
    {
      id: 'warszawa',
      name: 'LuxArte Showroom Warszawa',
      type: 'showroom',
      address: {
        streetAddress: 'Plac Piłsudskiego 9',
        addressLocality: 'Warszawa',
        postalCode: '00-078',
        addressCountry: 'PL',
        buildingNote: 'Budynek Teatru Wielkiego – Opery Narodowej',
      },
      phone: '+48 22 629 04 58',
      email: 'warszawa@luxarte.pl',
      openingHours: [
        { dayOfWeek: 'Monday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Tuesday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Wednesday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Thursday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Friday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Saturday', opens: '11:00', closes: '15:00' },
      ],
      coordinates: {
        lat: 52.2427796,
        lng: 21.0121966,
      },
      mapUrl:
        'https://www.google.pl/maps/place/LuxArte+-+Showroom+Fendi+Casa,+Bentley+Home/@52.2427796,21.0100078,17z',
    },
    {
      id: 'wroclaw',
      name: 'LuxArte Project Department Wrocław',
      type: 'project-department',
      address: {
        streetAddress: 'ul. Księcia Witolda 42/1',
        addressLocality: 'Wrocław',
        postalCode: '50-202',
        addressCountry: 'PL',
      },
      phone: '+48 507 047 399',
      email: 'wroclaw@luxarte.pl',
      openingHours: [
        { dayOfWeek: 'Monday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Tuesday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Wednesday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Thursday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Friday', opens: '10:00', closes: '18:00' },
        { dayOfWeek: 'Saturday', opens: '11:00', closes: '15:00' },
      ],
      coordinates: {
        lat: 51.1151795,
        lng: 17.0257418,
      },
      mapUrl:
        'https://www.google.com/maps/place/Ksi%C4%99cia+Witolda+42,+50-202+Wroc%C5%82aw/@51.1151795,17.0235576,17z',
    },
  ] as const satisfies readonly ShowroomLocation[],

  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/Luxarte1',
      label: 'Facebook',
    },
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/luxarte/',
      label: 'Instagram',
    },
  ] as const satisfies readonly SocialLink[],

  heroImage: {
    src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-1.webp`,
    alt: 'LuxArte Showroom - ekskluzywne wnętrza',
    width: 1900,
    height: 1060,
  },

  intentOptions: [
    { value: 'general', label: 'Zapytanie ogólne' },
    { value: 'product', label: 'Zapytanie o produkt' },
    { value: 'brand', label: 'Zapytanie o markę' },
    { value: 'project', label: 'Zapytanie o realizację' },
    { value: 'outlet', label: 'Outlet - dostępność' },
    { value: 'design', label: 'Projektowanie wnętrz' },
    { value: 'visit', label: 'Wizyta w showroomie' },
  ] as const,

  faq: [
    {
      id: 'delivery',
      question: 'Jak wygląda proces dostawy mebli?',
      answer:
        'Wszystkie meble dostarczamy bezpośrednio do klienta z profesjonalnym montażem. Termin i szczegóły dostawy ustalamy indywidualnie po złożeniu zamówienia.',
    },
    {
      id: 'lead-time',
      question: 'Jaki jest czas realizacji zamówienia?',
      answer:
        'Czas realizacji zależy od producenta i specyfikacji produktu. Meble z kolekcji standardowej realizowane są zazwyczaj w ciągu 8-12 tygodni. Produkty na zamówienie mogą wymagać dłuższego czasu.',
    },
    {
      id: 'visit',
      question: 'Czy mogę odwiedzić showroom bez wcześniejszego umówienia?',
      answer:
        'Tak, zapraszamy do naszego showroomu w godzinach otwarcia. Zalecamy jednak wcześniejszy kontakt telefoniczny, aby zapewnić Państwu pełną uwagę naszych konsultantów.',
    },
    {
      id: 'custom',
      question: 'Czy oferujecie meble na wymiar?',
      answer:
        'Tak, wiele marek z naszej oferty umożliwia personalizację wymiarów, materiałów i wykończeń. Skontaktuj się z nami, aby omówić możliwości dostosowania produktu do Twoich potrzeb.',
    },
  ] as const satisfies readonly FAQItem[],

  seo: {
    title: 'Showroom & Kontakt | LuxArte – Fashion for Home',
    description:
      'Odwiedź showroom LuxArte w Warszawie. Ekskluzywne meble Versace Home, Bentley Home, Dolce & Gabbana Casa. Umów wizytę lub skontaktuj się z nami.',
  },
} as const;

/**
 * Get location by ID
 */
export function getLocationById(id: string): ShowroomLocation | undefined {
  return showroomData.locations.find((loc) => loc.id === id);
}

/**
 * Get primary showroom (Warszawa)
 */
export function getPrimaryShowroom(): ShowroomLocation {
  return showroomData.locations[0];
}

/**
 * Format opening hours for display
 */
export function formatOpeningHours(hours: readonly OpeningHours[]): string {
  const weekdays = hours.filter((h) =>
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(h.dayOfWeek)
  );
  const saturday = hours.find((h) => h.dayOfWeek === 'Saturday');

  const weekdayHours =
    weekdays.length > 0 ? `Pon–Pt: ${weekdays[0].opens}–${weekdays[0].closes}` : '';
  const saturdayHours = saturday ? `Sob: ${saturday.opens}–${saturday.closes}` : '';

  return [weekdayHours, saturdayHours].filter(Boolean).join(' | ');
}

/**
 * Day name translations
 */
export const dayTranslations: Record<string, string> = {
  Monday: 'Poniedziałek',
  Tuesday: 'Wtorek',
  Wednesday: 'Środa',
  Thursday: 'Czwartek',
  Friday: 'Piątek',
  Saturday: 'Sobota',
  Sunday: 'Niedziela',
};
