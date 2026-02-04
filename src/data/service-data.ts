/**
 * ============================================================================
 * SERVICE DATA - LUXARTE INTERIOR DESIGN
 * ============================================================================
 *
 * Centralized data for the Interior Design Service page.
 * Content sourced and cleaned from existing site content.
 *
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Service Hero Data
 */
export const serviceHero = {
  title: 'Projektowanie Wnętrz',
  titleEn: 'Interior Design',
  subtitle: 'Sztuka projektowania wnętrz',
  description:
    'Firma LuxArte rozpoczęła swoją działalność jako studio projektowe. Obecnie jest to miejsce, w którym kompleksowo kreujemy luksusowe wnętrza dla najbardziej wymagających Klientów. Pracując z takimi markami jak Versace Home, Dolce & Gabbana Casa, Roberto Cavalli czy Bentley Home, w naszym atelier możemy tworzyć wnętrza czerpiące ze świata mody i sygnowane logo największych włoskich domów mody.',
  image: {
    src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
    alt: 'Luksusowe wnętrze zaprojektowane przez LuxArte',
    width: 1900,
    height: 1060,
  },
  ctaText: 'Zapytaj o ofertę',
  ctaSection: 'contact-form',
} as const;

/**
 * Value Proposition Points
 */
export interface ValueProposition {
  readonly id: string;
  readonly icon: 'compass' | 'palette' | 'crown' | 'handshake' | 'check';
  readonly title: string;
  readonly description: string;
}

export const valuePropositions: readonly ValueProposition[] = [
  {
    id: 'vp-1',
    icon: 'compass',
    title: 'Kompleksowa obsługa',
    description:
      'Projektowanie, aranżacja i nadzór wykonawczy — pełen zakres usług od koncepcji do realizacji.',
  },
  {
    id: 'vp-2',
    icon: 'palette',
    title: 'Włoski design',
    description:
      'Dostęp do ekskluzywnych kolekcji Versace Home, Dolce & Gabbana Casa, Bentley Home i innych.',
  },
  {
    id: 'vp-3',
    icon: 'crown',
    title: 'Luksusowe materiały',
    description:
      'Szeroka paleta najwyższej jakości materiałów wykończeniowych prezentowana w showroomie.',
  },
  {
    id: 'vp-4',
    icon: 'handshake',
    title: 'Indywidualne podejście',
    description:
      'Każdy projekt tworzony w ścisłej konsultacji z Klientem, zgodnie z indywidualnymi potrzebami.',
  },
  {
    id: 'vp-5',
    icon: 'check',
    title: 'Nadzór autorski',
    description:
      'Kontrola nad wykonawcami prac wykończeniowych, by zachować pełną zgodność z projektem.',
  },
] as const;

/**
 * Process Steps
 */
export interface ProcessStep {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly description: string;
}

export const processSteps: readonly ProcessStep[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Wizja lokalna',
    description:
      'Przeprowadzamy wizję lokalną, by zebrać jak najwięcej danych dotyczących wnętrza. Bierzemy pod uwagę wytyczne od Inwestora i tworzymy ramy do dalszej pracy nad projektem.',
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Układ funkcjonalny',
    description:
      'Stworzenie odpowiedniego układu funkcjonalnego powstaje w konsultacji z Klientem, czego efektem będzie kilka propozycji układów funkcjonalnych.',
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Wizualizacje 3D',
    description:
      'Wizualizacje to narzędzie, które pomaga przedstawić Państwu naszą koncepcję wnętrza. Oprócz wizualizacji prezentujemy również moodboard z sugerowaną kolorystyką i selekcją materiałów wykończeniowych.',
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Rysunki wykonawcze',
    description:
      'Podsumowaniem etapu kreacji będzie stworzenie specyfikacji technicznej zawierającej szczegóły wykonawcze projektu. Ważnym elementem jest szczegółowy wykaz wszystkich materiałów wykończeniowych.',
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Specyfikacja wyposażenia',
    description:
      'Szczegółowy wykaz elementów wyposażenia i dekoracji z uwzględnieniem mebli, oświetlenia i akcesoriów od naszych partnerskich marek.',
  },
  {
    id: 'step-6',
    number: 6,
    title: 'Nadzór autorski',
    description:
      'Dajemy Państwu możliwość czerpania z naszego wieloletniego doświadczenia oferując opcję Nadzoru autorskiego — kontrolę nad wykonawcami prac wykończeniowych.',
  },
] as const;

/**
 * Deliverables
 */
export interface Deliverable {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
}

export const deliverables: readonly Deliverable[] = [
  {
    id: 'del-1',
    title: 'Koncepcja projektowa',
    description: 'Wizualna reprezentacja Twojego wnętrza',
    items: [
      'Moodboard z kolorystyką i materiałami',
      'Wizualizacje 3D wnętrz',
      'Propozycje układów funkcjonalnych',
    ],
  },
  {
    id: 'del-2',
    title: 'Dokumentacja techniczna',
    description: 'Kompletna specyfikacja do realizacji',
    items: [
      'Rysunki wykonawcze',
      'Specyfikacja materiałów wykończeniowych',
      'Rzuty i przekroje techniczne',
    ],
  },
  {
    id: 'del-3',
    title: 'Wyposażenie wnętrza',
    description: 'Selekcja mebli i akcesoriów',
    items: [
      'Wykaz mebli i oświetlenia',
      'Dobór tekstyliów i dekoracji',
      'Koordynacja zamówień u producentów',
    ],
  },
  {
    id: 'del-4',
    title: 'Nadzór realizacji',
    description: 'Wsparcie na etapie wykonawstwa',
    items: [
      'Kontrola zgodności z projektem',
      'Koordynacja ekip wykonawczych',
      'Odbiory etapowe prac',
    ],
  },
] as const;

/**
 * Budget Tiers (labeled only, no specific numbers)
 */
export interface BudgetTier {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly examples: readonly string[];
}

export const budgetTiers: readonly BudgetTier[] = [
  {
    id: 'tier-standard',
    name: 'Standard',
    description: 'Projekty pojedynczych pomieszczeń lub mniejszych apartamentów',
    examples: ['Salon', 'Sypialnia', 'Łazienka', 'Gabinet'],
  },
  {
    id: 'tier-premium',
    name: 'Premium',
    description: 'Kompleksowe projekty apartamentów i domów',
    examples: ['Apartament', 'Dom jednorodzinny', 'Penthouse'],
  },
  {
    id: 'tier-exclusive',
    name: 'Exclusive',
    description: 'Rezydencje i projekty o wyjątkowym charakterze',
    examples: ['Rezydencja', 'Willa', 'Przestrzeń komercyjna premium'],
  },
] as const;

/**
 * Featured Projects for Case Preview
 */
export interface FeaturedProject {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly image: string;
  readonly slug: string;
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: 'project-1',
    title: 'Apartament Trussardi Casa',
    category: 'Apartament',
    image: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
    slug: 'projects/apartament-trussardi',
  },
  {
    id: 'project-2',
    title: 'Willa Bentley Home',
    category: 'Rezydencja',
    image: `${CDN_BASE}/2025/06/BE-villa-01-scaled.jpg`,
    slug: 'projects/willa-bentley',
  },
] as const;

/**
 * Trust Signals / Proof
 */
export const trustSignals = {
  brands: [
    'Versace Home',
    'Dolce & Gabbana Casa',
    'Roberto Cavalli Home Interiors',
    'Bentley Home',
    'Bugatti Home',
    'Visionnaire',
    'Flos',
    'SCIC',
  ],
  showroomLocation: 'Plac Piłsudskiego 9, Warszawa',
  contactEmail: 'info@luxarte.pl',
  contactPhone: '+48 22 433 38 83',
} as const;

/**
 * FAQ Items for Interior Design Service
 */
export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export const serviceFAQ: readonly FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Jak wygląda proces współpracy z LuxArte?',
    answer:
      'Proces rozpoczyna się od spotkania w showroomie i wizji lokalnej. Następnie przechodzimy przez etapy: układ funkcjonalny, wizualizacje 3D, dokumentacja techniczna, specyfikacja wyposażenia i opcjonalny nadzór autorski.',
  },
  {
    id: 'faq-2',
    question: 'Czy mogę zobaczyć materiały wykończeniowe przed decyzją?',
    answer:
      'Tak, zapraszamy do showroomu w Warszawie, gdzie prezentujemy szeroką paletę materiałów wykończeniowych oraz ekspozycję mebli od naszych partnerskich marek.',
  },
  {
    id: 'faq-3',
    question: 'Czy LuxArte oferuje nadzór nad realizacją projektu?',
    answer:
      'Tak, oferujemy opcję nadzoru autorskiego, która obejmuje kontrolę nad wykonawcami prac wykończeniowych na terenie inwestycji, by zachować pełną zgodność z projektem.',
  },
  {
    id: 'faq-4',
    question: 'Z jakimi markami mebli współpracuje LuxArte?',
    answer:
      'Jesteśmy autoryzowanym dealerem najbardziej prestiżowych włoskich marek, w tym Versace Home, Dolce & Gabbana Casa, Roberto Cavalli Home Interiors, Bentley Home, Visionnaire i wielu innych.',
  },
  {
    id: 'faq-5',
    question: 'Jak umówić się na spotkanie projektowe?',
    answer:
      'Prosimy o kontakt telefoniczny pod numer +48 22 433 38 83 lub mailowy na adres info@luxarte.pl. Możesz również wypełnić formularz kontaktowy na tej stronie.',
  },
] as const;

/**
 * Form Field Options
 */
export const projectTypes = [
  'Apartament',
  'Dom jednorodzinny',
  'Rezydencja / Willa',
  'Penthouse',
  'Pojedyncze pomieszczenie',
  'Przestrzeń komercyjna',
  'Inny',
] as const;

export const budgetRanges = [
  'Do ustalenia',
  'Standard',
  'Premium',
  'Exclusive',
] as const;

export const areaSizes = [
  'Do 50 m²',
  '50–100 m²',
  '100–200 m²',
  '200–500 m²',
  'Powyżej 500 m²',
] as const;

/**
 * SEO Metadata
 */
export const seoData = {
  title: 'Projektowanie Wnętrz | LuxArte - Fashion for Home',
  description:
    'Kompleksowe projektowanie luksusowych wnętrz. Versace Home, Dolce & Gabbana Casa, Bentley Home. Studio projektowe w Warszawie.',
  canonical: 'https://www.luxarte.pl/interior-design-service',
} as const;

/**
 * Service Images
 */
export const serviceImages = {
  hero: {
    src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
    alt: 'Projektowanie wnętrz LuxArte',
    width: 1900,
    height: 1060,
  },
  moodboard1: {
    src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
    alt: 'Moodboard LuxArte',
    width: 1266,
    height: 1328,
  },
  moodboard2: {
    src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.25.40.webp`,
    alt: 'Moodboard LuxArte',
    width: 1266,
    height: 1330,
  },
  villa1: {
    src: `${CDN_BASE}/2025/06/BE-villa-01-scaled.jpg`,
    alt: 'Willa Bentley Home',
    width: 2560,
    height: 1920,
  },
  villa2: {
    src: `${CDN_BASE}/2025/06/BE-villa-02-scaled.jpg`,
    alt: 'Willa Bentley Home',
    width: 2560,
    height: 1920,
  },
  background: {
    src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
    alt: 'Interior Design Background',
  },
} as const;

export default {
  serviceHero,
  valuePropositions,
  processSteps,
  deliverables,
  budgetTiers,
  featuredProjects,
  trustSignals,
  serviceFAQ,
  projectTypes,
  budgetRanges,
  areaSizes,
  seoData,
  serviceImages,
};
