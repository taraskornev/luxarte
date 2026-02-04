/**
 * ============================================================================
 * KNOWLEDGE BASE DATA - LUXARTE
 * ============================================================================
 *
 * Centralized data source for /knowledge-base index and /knowledge-base/[slug] pages.
 * Expert knowledge hub replacing the old "aktualnosci" news model.
 * All content extracted from live production site.
 *
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Topic/Category for filtering articles
 */
export type ArticleTopic =
  | 'marki'
  | 'kolekcje'
  | 'kuchnie'
  | 'oswietlenie'
  | 'design'
  | 'materialy'
  | 'targi';

/**
 * Topic Labels (Polish)
 */
export const topicLabels: Record<ArticleTopic, string> = {
  marki: 'Marki',
  kolekcje: 'Kolekcje',
  kuchnie: 'Kuchnie',
  oswietlenie: 'Oświetlenie',
  design: 'Design',
  materialy: 'Materiały',
  targi: 'Targi',
};

/**
 * Body Section Types
 */
export interface ArticleSection {
  readonly type: 'paragraph' | 'heading' | 'quote';
  readonly content: string;
  readonly level?: 2 | 3; // For headings
  readonly author?: string; // For quotes
}

/**
 * Article Data Interface
 */
export interface Article {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly heroImage: {
    readonly src: string;
    readonly alt: string;
  };
  readonly excerpt: string;
  readonly body: readonly ArticleSection[];
  readonly topics: readonly ArticleTopic[];
  readonly relatedBrands: readonly string[];
  readonly relatedCategories: readonly string[];
  readonly relatedService?: boolean;
  readonly publishDate?: string; // ISO date, only if real date known
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

/**
 * All Articles Data
 */
export const articles: readonly Article[] = [
  // ============================================================================
  // VENICEM - MURANO LIGHTING
  // ============================================================================
  {
    id: 'venicem-murano',
    title: 'Venicem – Nowoczesne Oblicze Oświetlenia z Murano',
    slug: 'venicem-nowoczesne-oblicze-oswietlenia-z-murano',
    heroImage: {
      src: `${CDN_BASE}/2025/08/venicem-nowoczesne-oswietlenie-murano.webp`,
      alt: 'Lampy Venicem - nowoczesne oświetlenie ze szkła Murano',
    },
    excerpt:
      'Venicem to więcej niż marka – to współczesna twarz weneckiego szkła, gdzie każda lampa tworzy nie tylko światło, lecz atmosferę. Geometria, materia, blask – wszystko składa się w ponadczasowy język formy.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Dziedzictwo z przyszłością',
      },
      {
        type: 'paragraph',
        content:
          'Venicem to więcej niż marka – to współczesna twarz weneckiego szkła, gdzie każda lampa tworzy nie tylko światło, lecz atmosferę. Geometria, materia, blask – wszystko składa się w ponadczasowy język formy. W ten sposób Venicem redefiniuje to, jak myślimy o szklanym rzemiośle, łącząc bogatą przeszłość tradycji Murano ze współczesnością designu.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Rzemiosło spotyka design – materiały i procesy',
      },
      {
        type: 'paragraph',
        content:
          'Kluczem do wyjątkowości Venicem jest subtelne balansowanie między ręcznym rzemiosłem a precyzją nowoczesnej formy. Tradycyjne szkło Murano, obrabiane „na oko" i według pradawnych technik, łączy się z nowoczesnym w charakterze metalem o szerokiej palecie wykończeń.',
      },
      {
        type: 'paragraph',
        content:
          'Każdy element powstaje w ścisłej współpracy z rzemieślnikami, którzy nadają każdej oprawie indywidualny charakter. W efekcie powstają lampy, które nie tylko oświetlają przestrzeń, ale ją definiują.',
      },
      {
        type: 'paragraph',
        content:
          'Proces tworzenia oświetlenia Venicem rozpoczyna się od precyzyjnie wyselekcjonowanych materiałów – szkła z Murano i wysokogatunkowych metali, głównie mosiądzu. Szkło formowane jest ręcznie, tradycyjną techniką „a soffio" – dmuchania na gorąco, która wymaga nie tylko siły fizycznej, ale i wieloletniego doświadczenia w pracy z płynnym materiałem.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Most między tradycją Murano a nowoczesnym wzornictwem',
      },
      {
        type: 'paragraph',
        content:
          'Venicem, założony w 2013 roku przez Massimo Tonetto i Melissę Lunardi, to marka, która rodzi się z głębokiego związku z rzemiosłem Murano – kolebki szkła włoskiego – i z żarliwym dążeniem do współczesnej elegancji. Siedziba w Treviso, tuż obok Wenecji i wyspy Murano, stwarza idealne warunki do czerpania z mistrzowskich technik formowania szkła, a jednocześnie wprowadza je w nowy wymiar dzięki nowoczesnemu spojrzeniu na design.',
      },
      {
        type: 'paragraph',
        content:
          'Projektanci Venicem czerpią z historycznego dziedzictwa nie tylko formy, ale i emocje zaklęte w szkle. Ich celem jest tworzenie obiektów, które są ponadczasowe – zakorzenione w przeszłości, a jednocześnie wyprzedzające swoje czasy.',
      },
    ],
    topics: ['oswietlenie', 'marki', 'materialy'],
    relatedBrands: [],
    relatedCategories: ['oswietlenie'],
    relatedService: true,
    publishDate: '2025-08-29',
    seo: {
      title: 'Venicem – Nowoczesne Oblicze Oświetlenia z Murano | LuxArte',
      description:
        'Poznaj markę Venicem – połączenie tradycji szkła Murano z nowoczesnym designem. Luksusowe lampy tworzone ręcznie przez włoskich rzemieślników.',
    },
  },

  // ============================================================================
  // VERSACE HOME - DESIGN MOTIFS
  // ============================================================================
  {
    id: 'versace-home-design',
    title: 'Moda w Designie Kolekcji Mebli Versace Home',
    slug: 'moda-w-designie-kolekcji-mebli-versace-home',
    heroImage: {
      src: `${CDN_BASE}/2025/02/versace-home-meble-design-luxarte.webp`,
      alt: 'Kolekcja mebli Versace Home - motywy designu',
    },
    excerpt:
      'Marka Versace zawsze znana była z silnych motywów, czerpanych przez jego twórcę, Gianniego Versace, ze świata mitologii, antyku i historii sztuki. Odkryj DNA marki w kolekcji mebli.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Motywy marki kolekcji mebli Versace Home',
      },
      {
        type: 'paragraph',
        content:
          'Marka Versace zawsze znana był z silnych motywów, czerpanych przez jego twórcę, Gianniego Versace, ze świata mitologii, antyku i historii sztuki. Donatella Versace, która osobiście była zaangażowana w tworzenie kolekcji Home, udostępniła szereg motywów charakterystycznych dla włoskiego domu mody, by odbiorcy mogli odnaleźć je również w detalach mebli.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fotel Venus',
      },
      {
        type: 'paragraph',
        content:
          'Fotel Venus jest wyjątkowym przykładem w kolekcji mebli Versace, ponieważ inspiracją jego do powstania była cała stylizacja i kobieta jako muza sama w sobie. Czarna suknia, której kształt przeniesiono w linii designu fotela, została zaprojektowana przez Gianniego Versace z myślą o Naomi Campbell, której trudno nie uznać jako postać współczesnej Venus, bogini wybiegów, wzór kobiecości.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La Medusa',
      },
      {
        type: 'paragraph',
        content:
          'Logo marki, najbardziej rozpoznawalny znak domu mody Versace. Meduza, mityczna prabogini, na której widok wszystko, co żywe dębiało i obracało się w kamień. Właśnie efekt osłupienia przyświecał Gianniemu Versace, którego chciał zatrzymać wzrok wszystkich, którzy spojrzą na kobietę ubraną w jego ubrania.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La Greca',
      },
      {
        type: 'paragraph',
        content:
          'Meander, charakterystyczny motyw dekoracyjny starożytności, Gianni Versace zaczerpnął z rodzimej Sycylii, gdzie wzrastał wśród wszechobecnych śladów antycznej kultury. Widoczny w szczególności w okuciach torebek, został przeniesiony również na okucia metalowe w kolekcji ostatniej kolekcji mebli.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Barocco',
      },
      {
        type: 'paragraph',
        content:
          'Najbogatszy w historii sztuki, pełen przepychu, skupiony na zmysłach i emocjach okres Baroku musiał odcisnąć swoje piętno na Giannim Versace, któremu zależało na wyzwoleniu piękna kobiety i wywołaniu niepohamowanego zachwytu. Ornament Barocco, którego nazwa jest ukłonem dla epoki, jest flagowym motywem tkanin marki Versace.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'V-Logo',
      },
      {
        type: 'paragraph',
        content:
          'Charakterystycznemu pikowaniu torebek Versace, zawsze towarzyszy dekoracyjny, metalowy monogram V-logo. To połączenie zostało przeniesione w kolekcji V-marble. Stół obiadowy i stoliki kawowe z marmurowym blatem posiadają pikowaną podstawę zwieńczoną charakterystycznym monogramem.',
      },
    ],
    topics: ['marki', 'design', 'kolekcje'],
    relatedBrands: ['versace-home'],
    relatedCategories: ['sofy', 'fotele'],
    relatedService: true,
    publishDate: '2025-02-13',
    seo: {
      title: 'Moda w Designie Mebli Versace Home - Motywy i Inspiracje | LuxArte',
      description:
        'Odkryj kultowe motywy Versace w kolekcji mebli: La Medusa, Barocco, La Greca. Historia designu od Gianniego Versace do współczesnych kolekcji Home.',
    },
  },

  // ============================================================================
  // ARCHIGRAPHICA - VALCUCINE KITCHEN
  // ============================================================================
  {
    id: 'archigraphica-valcucine',
    title: 'Archigraphica – Nowoczesna Kuchnia Bliska Naturze',
    slug: 'archigraphica-nowoczesna-kuchnia-bliska-naturze',
    heroImage: {
      src: `${CDN_BASE}/2025/04/archigraphica-valcucine-kuchnia-naturalne-drewno.webp`,
      alt: 'Kuchnia Archigraphica Valcucine z naturalnym drewnem',
    },
    excerpt:
      'Najnowsza kolekcja Valcucine łączy świat nowoczesny i pierwotny. Naturalne drewno orzechowe, lite uchwyty i minimalistyczne szkło tworzą kuchnię o przytulnym, ciepłym charakterze.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Esencja drewna',
      },
      {
        type: 'paragraph',
        content:
          'Nowoczesny design kuchni Valcucine od lat inspiruje i wyznacza trendy na rynku eksluzywnych kuchni. Najnowsza kapsułowa kolekcja, Archigraphica, jest propozycją, która łączy świat nowoczesny i pierwotny. Baza kuchni, wykończona w naturalnym orzechu, została wyposażona w lite uchwyty, które rysują perspektywiczny rysunek bryły.',
      },
      {
        type: 'paragraph',
        content:
          'Wydłużone uchwyty tworzą indywidualny rysunek kuchni, który będzie zewnętrznym wyrazem układu funkcjonalnego, dobranego pod indywidualny projekt. Naturalny orzech, przyjemna faktura i ciepły kolor, wprowadzają przytulną atmosferę we wnętrzu. Zestawienie z minimalistycznymi frontami ze szkła, dodaje kuchni lekkości i nowoczesnego charakteru.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Połączenie materiałów',
      },
      {
        type: 'paragraph',
        content:
          'Niezmiennym elementem kuchni Archigraphica jest drewniany profil, który w zależności od układu funkcjonalnego, determinuje rysunek kuchni. Fronty mogą zostać wykończone drewnem lub szkłem. Kontrast charakteru tych materiałów sprawia, że otrzymujemy kuchnię nowoczesną o ciepłym, przytulnym charakterze.',
      },
      {
        type: 'paragraph',
        content:
          'Trzecim elementem jest matał blatu, obejmujący dolne korpusy, który może zostać wykonany z marmuru, piaskowca, czy wykończony w lakierze. Spektrum możliwości pozwala na integrację kuchni z charakterem wnętrza i ekspresję indywidualnych potrzeb.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tradycja innowacji',
      },
      {
        type: 'quote',
        content:
          'Zawsze pracowałem nad czystymi bryłami, w przypadku Archigraphica chciałem dodać do powierzchni mebli graficzny projekt wykonany z naturalnej materii. W społeczeństwie, które coraz bardziej odrywa się od natury i dostosowuje się do materiałów syntetycznych, uznałem, że ważne jest zaproponowanie drewna nie tylko jako powierzchniowego forniru, ale jako masy, jako naturalnej materii, aby zaspokoić wrażenia dotykowe i przywrócić pamięć przodków, która uczyniła drewno przyjaznym materiałem dla ludzkości przez tysiące lat.',
        author: 'Gabriele Centazzo, założyciel Valcucine',
      },
    ],
    topics: ['kuchnie', 'marki', 'materialy', 'design'],
    relatedBrands: ['valcucine'],
    relatedCategories: ['kuchnie'],
    relatedService: true,
    publishDate: '2025-04-29',
    seo: {
      title: 'Archigraphica Valcucine – Nowoczesna Kuchnia z Naturalnym Drewnem | LuxArte',
      description:
        'Odkryj kolekcję Archigraphica od Valcucine. Naturalne drewno orzechowe, szkło i metal tworzą kuchnię łączącą nowoczesny design z ciepłem natury.',
    },
  },

  // ============================================================================
  // EXTETA - LORO PIANA COLLECTION
  // ============================================================================
  {
    id: 'exteta-loro-piana',
    title: 'Exteta – Kolekcja Loro Piana – Ponadczasowe Meble Ogrodowe',
    slug: 'exteta-kolekcja-loro-piana-ponadczasowe-meble-ogrodowe',
    heroImage: {
      src: `${CDN_BASE}/2025/07/exteta-loro-piana-meble-ogrodowe-luxarte.webp`,
      alt: 'Kolekcja Delight Chairs Exteta x Loro Piana',
    },
    excerpt:
      'Kolekcja The Delight Chairs to owoc współpracy dwóch włoskich ikoni luksusu: Exteta, mistrza mebli outdoorowych, oraz Loro Piana Interiors, specjalizującej się w ekskluzywnych tkaninach.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Spotkanie dwóch ikon luksusu',
      },
      {
        type: 'paragraph',
        content:
          'Kolekcja The Delight Chairs to owoc współpracy dwóch włoskich marek: Exteta, mistrza mebli outdoorowych, oraz Loro Piana Interiors, specjalizującej się w ekskluzywnych tkaninach. Projekt powstał z potrzeby reinterpretacji klasycznego krzesła reżyserskiego – symbolu beztroskiego wypoczynku – w wersji luksusowej, eleganckiej i funkcjonalnej.',
      },
      {
        type: 'paragraph',
        content:
          'Wspólnie z projektantką Paolą Navone, marki stworzyły kolekcję, która łączy tradycję rzemiosła z nowoczesnym stylem życia.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Filozofia hybrydowej przestrzeni Exteta',
      },
      {
        type: 'paragraph',
        content:
          'Exteta od lat promuje ideę przestrzeni bez granic, gdzie wnętrze płynnie przechodzi w zewnętrze. Kolekcja Delight Chairs doskonale wpisuje się w tę filozofię – meble zaprojektowano z myślą o użytkowaniu zarówno na jachtach, tarasach, jak i w eleganckich wnętrzach.',
      },
      {
        type: 'paragraph',
        content:
          'Dzięki zastosowaniu materiałów odpornych na warunki atmosferyczne, takich jak mahoniowe drewno Sapelli i tkaniny Loro Piana z technologią Storm System®, krzesła są trwałe, stylowe i uniwersalne.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Design inspirowany naturą i modą',
      },
      {
        type: 'paragraph',
        content:
          'Sukces kolekcji pozwolił na poszerzenie kolekcji, a każdy element – składane krzesło, fotel i stołek – został wykonany ręcznie z dbałością o detale. Letnia wersja zachwyca tkaninami w paski i jednolitych kolorach, natomiast zimowa odsłona St. Moritz oferuje kaszmirowe pokrowce Cashfur, które dodają miękkości i ciepła.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Rzemiosło i zrównoważony luksus',
      },
      {
        type: 'paragraph',
        content:
          'Zarówno Exteta, jak i Loro Piana Interiors, kładą nacisk na etyczne pozyskiwanie materiałów i dbałość o środowisko. Produkty powstają w duchu „Made in Italy", z wykorzystaniem lokalnych zasobów i tradycyjnych technik. Delight Chairs to nie tylko meble – to manifest jakości, stylu i odpowiedzialności, który redefiniuje pojęcie luksusu w przestrzeni outdoorowej.',
      },
    ],
    topics: ['marki', 'kolekcje', 'materialy'],
    relatedBrands: [],
    relatedCategories: [],
    relatedService: true,
    publishDate: '2025-07-10',
    seo: {
      title: 'Exteta x Loro Piana – Luksusowe Meble Ogrodowe | LuxArte',
      description:
        'Poznaj kolekcję Delight Chairs od Exteta i Loro Piana. Luksusowe meble outdoorowe łączące włoskie rzemiosło z najwyższej jakości tkaninami.',
    },
  },

  // ============================================================================
  // BENTLEY HOME - 2025 COLLECTION
  // ============================================================================
  {
    id: 'bentley-home-2025',
    title: 'Bentley Home – Nowa Kolekcja 2025',
    slug: 'bentley-home-nowa-kolekcja-2025',
    heroImage: {
      src: `${CDN_BASE}/2025/04/bentley-home-kolekcja-2025-milan-design-week.webp`,
      alt: 'Nowa kolekcja Bentley Home 2025 - Milan Design Week',
    },
    excerpt:
      'Prezentacja najnowszej kolekcji Bentley Home podczas Milan Design Week 2025. Luksus szyty na miarę z innowacyjnym podejściem do palety materiałów i DNA motoryzacyjnej marki.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Premiera nowej kolekcji Bentley Home podczas Milan Design Week 2025',
      },
      {
        type: 'paragraph',
        content:
          'Prezentacja najnowszej kolekcji odbyła się w Atelier marki przy Corso Venezia, którego patio wprowadzało w nastrój, inspirowany atmosferą angielskiego ogrodu przez ogrom bujnej roślinności w swoich naturalnych formach i kolorach, zapewniając niezwykłe doświadczenie dla zmysłów. Wśród zieleni, zapierającej dech w piersiach scenerii, naturalnie odnalazła się kolekcja mebli ogrodowych i akcesoriów.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Luksus szyty na miarę',
      },
      {
        type: 'paragraph',
        content:
          'Nowa kolekcja kontynuuje obrany kierunek designu Bentley Home poprzez podwyższone innowacyjne podejście do palety materiałów. Tegoroczna kolekcja skupia się wokół DNA marki, które jest charakterystyczne dla wnętrz samochodów. Chodzi oczywiście o drewno, którego forniry zostały poszerzone o matowe wykończenia z otwartymi porami, oferując nowy poziom głębi sensorycznej.',
      },
      {
        type: 'paragraph',
        content:
          'Również paleta kamienia wzbogaciła się o tegoroczną selekcję, czyli marmur Verde Belvedere, uderzający zielony kamień o ziemistych odcieniach i wykwintnych detalach, wzmacniający powierzchnie swoją naturalną elegancją i głębią. Nowością jest również szczotkowany Ivory Onyx, dodający wyrafinowaną grę faktury i światła.',
      },
      {
        type: 'paragraph',
        content:
          'Marka Bentley Home podnosi poziom doświadczenia prywatnej przestrzeni życiowej, oferując niezrównane rzemiosło i etos projektowania marki. Każdy element jest w pełni konfigurowalny, podnosząc poziom indywidualizmu. Ten poziom personalizacji pozwala na starannie wyselekcjonowany wybór wykwintnych materiałów, zaprojektowanych dla najbardziej ekskluzywnych wnętrz.',
      },
    ],
    topics: ['marki', 'kolekcje', 'targi', 'materialy'],
    relatedBrands: ['bentley-home'],
    relatedCategories: ['sofy', 'fotele'],
    relatedService: true,
    publishDate: '2025-04-15',
    seo: {
      title: 'Bentley Home Kolekcja 2025 – Milan Design Week | LuxArte',
      description:
        'Odkryj nową kolekcję Bentley Home 2025. Luksusowe meble z DNA motoryzacyjnej ikony - drewno, marmur Verde Belvedere i Ivory Onyx.',
    },
  },

  // ============================================================================
  // TRUSSARDI CASA - 2025 COLLECTION
  // ============================================================================
  {
    id: 'trussardi-casa-2025',
    title: 'Trussardi Casa – Nowa Kolekcja 2025',
    slug: 'trussardi-casa-nowa-kolekcja-2025',
    heroImage: {
      src: `${CDN_BASE}/2025/04/trussardi-casa-kolekcja-2025-milan.webp`,
      alt: 'Nowa kolekcja Trussardi Casa 2025',
    },
    excerpt:
      'Marka Trussardi od lat konsekwentnie kontynuuje ideę „quiet luxury", gdzie design jest doświadczeniem, styl postawą, a dom miejscem, w którym można intymnie wyrazić siebie.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Świat marki Trussardi',
      },
      {
        type: 'paragraph',
        content:
          'Marka Trussardi od lat konsekwentnie kontynuuje ideę „quiet luxury", gdzie design jest doświadczeniem, styl postawą, a dom miejscem, w którym można intymnie wyrazić siebie. Podczas Milan Design Week mieliśmy okazję zobaczyć jak świat mody wpływa na design mebli, ponieważ nowa kolekcja została zaprezentowana w siedzibie Trussardi, Miroglio, mediolańskim pałacu przy Via Burlamacchi 4.',
      },
      {
        type: 'paragraph',
        content:
          'Design, narodzony w modzie, przekracza jej granice i przenika design. Marka Trussardi pioniersko interpretowała luksus w sposób daleki od ostentacji, wykraczając poza konwencjonalne schematy, aby uczynić go bardziej inkluzywnym i świadomym; luksus oparty na jakości, autentyczności i świadomości.',
      },
      {
        type: 'paragraph',
        content:
          'Nowoczesny design wymaga maksymalnej precyzji i najlepszej jakości materiałów. Meblom towarzyszy również kolekcja akcesoriów, które dodają wnętrzu życia, a jednocześnie intymnego charakteru.',
      },
    ],
    topics: ['marki', 'kolekcje', 'targi', 'design'],
    relatedBrands: ['trussardi-casa'],
    relatedCategories: ['sofy', 'fotele'],
    relatedService: true,
    publishDate: '2025-04-18',
    seo: {
      title: 'Trussardi Casa Kolekcja 2025 – Quiet Luxury | LuxArte',
      description:
        'Poznaj nową kolekcję Trussardi Casa 2025. Filozofia „quiet luxury" w najczystszej formie - design jako doświadczenie, styl jako postawa.',
    },
  },

  // ============================================================================
  // MILAN DESIGN WEEK 2025
  // ============================================================================
  {
    id: 'milan-design-week-2025',
    title: 'Zapraszamy na Milan Design Week 2025!',
    slug: 'zapraszamy-na-milan-design-week-2025',
    heroImage: {
      src: `${CDN_BASE}/2025/03/milan-design-week-2025-salone-del-mobile.webp`,
      alt: 'Milan Design Week 2025 - Salone del Mobile',
    },
    excerpt:
      'Milan Design Week to najważniejsze wydarzenie w świecie designu i luksusowych wnętrz. Zapraszamy do odkrycia najnowszych trendów i kolekcji prezentowanych przez nasze marki.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Najważniejsze wydarzenie w świecie designu',
      },
      {
        type: 'paragraph',
        content:
          'Milan Design Week i towarzyszący mu Salone del Mobile to coroczne święto designu, podczas którego najważniejsze marki prezentują swoje najnowsze kolekcje. To miejsce, gdzie rodzi się przyszłość wzornictwa – od mebli po oświetlenie, od materiałów po technologie.',
      },
      {
        type: 'paragraph',
        content:
          'Marki dostępne w LuxArte – Bentley Home, Trussardi Casa, Versace Home, Bugatti Home i wiele innych – tradycyjnie prezentują podczas tego wydarzenia swoje nowości, wyznaczając trendy na kolejne sezony.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Nowości marek LuxArte',
      },
      {
        type: 'paragraph',
        content:
          'Podczas tegorocznej edycji Milan Design Week 2025 szczególną uwagę zwracają premiery nowych kolekcji Bentley Home oraz Trussardi Casa, które prezentują innowacyjne podejście do materiałów i form, kontynuując jednocześnie DNA swoich marek.',
      },
    ],
    topics: ['targi', 'kolekcje', 'design'],
    relatedBrands: ['bentley-home', 'trussardi-casa', 'versace-home', 'bugatti-home'],
    relatedCategories: [],
    relatedService: true,
    publishDate: '2025-03-03',
    seo: {
      title: 'Milan Design Week 2025 – Targi i Nowości | LuxArte',
      description:
        'Milan Design Week 2025 - najważniejsze wydarzenie w świecie designu. Odkryj nowości Bentley Home, Trussardi Casa i innych marek dostępnych w LuxArte.',
    },
  },

  // ============================================================================
  // BUGATTI HOME - MAISON & OBJET 2025
  // ============================================================================
  {
    id: 'bugatti-home-maison-objet-2025',
    title: 'Maison & Object 2025 – Kolekcja Bugatti Home',
    slug: 'maison-objet-2025-kolekcja-bugatti-home',
    heroImage: {
      src: `${CDN_BASE}/2025/02/bugatti-home-maison-objet-2025.webp`,
      alt: 'Kolekcja Bugatti Home na Maison & Object 2025',
    },
    excerpt:
      'Bugatti Home zaprezentowało na targach Maison & Object 2025 w Paryżu swoją wyjątkową kolekcję mebli, łączącą DNA legendarnej marki motoryzacyjnej z włoskim rzemiosłem.',
    body: [
      {
        type: 'heading',
        level: 2,
        content: 'Bugatti Home na Maison & Object',
      },
      {
        type: 'paragraph',
        content:
          'Targi Maison & Object w Paryżu to jedno z najważniejszych wydarzeń w świecie designu wnętrz, przyciągające projektantów i marki z całego świata. Bugatti Home, marka łącząca dziedzictwo legendarnego producenta samochodów z włoskim rzemiosłem meblarskim, zaprezentowała podczas tegorocznej edycji swoją wyjątkową kolekcję.',
      },
      {
        type: 'paragraph',
        content:
          'Kolekcja Bugatti Home charakteryzuje się odważnymi formami inspirowanymi aerodynamiką samochodów marki, wykorzystaniem najwyższej jakości materiałów – w tym karbonu, aluminium i skóry – oraz precyzją wykonania godną manufaktury Molsheim.',
      },
    ],
    topics: ['marki', 'targi', 'kolekcje'],
    relatedBrands: ['bugatti-home'],
    relatedCategories: ['sofy', 'fotele'],
    relatedService: true,
    publishDate: '2025-02-10',
    seo: {
      title: 'Bugatti Home na Maison & Object 2025 | LuxArte',
      description:
        'Bugatti Home na targach Maison & Object 2025 w Paryżu. Odkryj kolekcję mebli łączącą DNA legendarnej marki motoryzacyjnej z włoskim rzemiosłem.',
    },
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all article slugs for static generation
 */
export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/**
 * Get all unique topics from articles
 */
export function getAllTopics(): ArticleTopic[] {
  const topicsSet = new Set<ArticleTopic>();
  articles.forEach((article) => {
    article.topics.forEach((topic) => topicsSet.add(topic));
  });
  return Array.from(topicsSet);
}

/**
 * Get articles by topic
 */
export function getArticlesByTopic(topic: ArticleTopic): readonly Article[] {
  return articles.filter((article) => article.topics.includes(topic));
}

/**
 * Get related articles (by shared topics, excluding current)
 */
export function getRelatedArticles(
  currentSlug: string,
  limit: number = 3
): readonly Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  return articles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => ({
      article,
      score: article.topics.filter((t) => current.topics.includes(t)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}

/**
 * Default SEO for knowledge base index
 */
export const knowledgeBaseIndexSeo = {
  title: 'Baza Wiedzy – Eksperci Luksusowego Designu | LuxArte',
  description:
    'Odkryj świat luksusowego designu wnętrz. Artykuły o markach, materiałach, trendach i kolekcjach mebli premium. Wiedza ekspercka od LuxArte.',
};
