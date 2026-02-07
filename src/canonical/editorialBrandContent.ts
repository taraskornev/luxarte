/**
 * ============================================================================
 * EDITORIAL BRAND CONTENT - LUXARTE
 * ============================================================================
 *
 * Content extracted from legacy editorial brand pages.
 * Used by /marki/[slug] pages.
 *
 * @version 1.0.0
 */

export interface EditorialBrandContent {
  slug: string;
  name: string;
  intro: string[];
  galleryImages: string[];
}

// Content for all 15 editorial brand pages
export const editorialBrandContent: Record<string, EditorialBrandContent> = {
  'versace-home': {
    slug: 'versace-home',
    name: 'Versace Home',
    intro: [
      'Po 35 latach w czołówce luksusowej mody, Versace Home nie potrzebuje wprowadzenia. Nieustannie kultowy włoski dom mody jest synonimem filozofii „więcej znaczy więcej". Ponadgabarytowe wzory adamaszku, użycie złotej i srebrnej folii, a także frędzle łączą się harmonijnie, tworząc jedne z najbardziej luksusowych mebli, jakie kiedykolwiek widziałeś.',
      'Najnowsza kolekcja to mistrzowskie połączenie nowoczesnego designu i klasycznych motywów, które sprawia, że Versace Home jest odpowiedzią dla tych, którzy nie tolerują zwykłego wystroju wnętrz.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/versace-home/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'trussardi-casa': {
    slug: 'trussardi-casa',
    name: 'Trussardi Casa',
    intro: [
      'Kolekcja Trussardi Casa to ponadczasowa elegancja inspirowana dynamiką metropolii Mediolanu.',
      'Rozwiązania dla części dziennej i sypialnej charakteryzują się czystymi liniami i unikalnymi materiałami i pozostają wierne koncepcji nieformalnej elegancji, która od ponad stu lat jest znakiem rozpoznawczym marki Greyhound.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/trussardi-casa/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'bentley-home': {
    slug: 'bentley-home',
    name: 'Bentley Home',
    intro: [
      'Bentley Home to marka stworzona ku celebracji tradycji i charakteru jakim jest marka Bentley Motors. Kultowe i niepowtarzalne kształty, drogocenne materiały, wyrafinowane sylwetki najbardziej luksusowych aut marki Bentley zostały przetłumaczone na język interior design. Niekończąca się pasja do technologii, szybkości, elegancji i wyrafinowania pozwala na stworzenie spersonalizowanego unikalnego wnętrza.',
      'Najnowsza kolekcja Bentley Home została przedstawiona światu w kwietniu 2021 roku. Motywem przewodnim było rzucenie wyzwania konwencjom współczesnego designu, zmiana zasad, eksploracja nowych, nieznanych do tej pory terytoriów.',
      'Najnowsza kolekcja definiowana jest przez szlachetne materiały, nowoczesne technologie, chęć przeniesienie poziomu kunsztu na jeszcze wyższy poziom. Nadzwyczajna podróż zaczyna się od domu…',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/bentley-home/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'bugatti-home': {
    slug: 'bugatti-home',
    name: 'Bugatti Home',
    intro: [],
    galleryImages: Array.from({ length: 18 }, (_, i) => `/media/marki/bugatti-home/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'dolce-gabbana-casa': {
    slug: 'dolce-gabbana-casa',
    name: 'Dolce & Gabbana Casa',
    intro: [
      'Meble Dolce&Gabbana Casa to elegancka kolekcja kolorowych osobliwości oferująca pełną gamę wyposażenia, od sof, przez jadalnię, po szafki nocne — każdy element ozdobiony jednym z czterech charakterystycznych motywów: Blue Mediterraneo, Carretto, Leo, Zebra. Główne motywy uzupełnia baza monochromatyczna w bieli, czerni lub złocie.',
      'Tworząc swoje kreacje, słynny włoski Dom Mody nawiązał współpracę z weneckimi markami i artystami, od legendarnych wytwórców szkła z Murano, takich jak Barbini i Salviati, po luksusową firmę tekstylną Tessitura Luigi Bevilacqua. Duet Dolce&Gabbana wykreował elementy dla domu, które nie tylko podkreślają przestrzeń, ale ją tworzą i definiują w całości. Podobnie jak ich ubrania, które wydają się zawsze ucieleśniać aurę czarującej, zmysłowej Włoszki, kolekcja Dolce&Gabbana Casa jest żywa, kobieca i odważna, przeznaczona dla maksymalisty, który emanuje przepychem, uważa lamparta za neutralny, i ubiera siebie i swój dom „w wyobraźni i fantazji".',
      'W warszawskim showroomie Luxarte można zobaczyć jedyną w Polsce ekspozycję mebli Dolce&Gabbana Casa oraz kolekcję akcesoriów. Nowatorskie podejście do wykończeń i tkanin zostało przeniesione z DNA świata mody do świata designu i wyposażenia wnętrz.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/dolce-gabbana-casa/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'visionnaire': {
    slug: 'visionnaire',
    name: 'Visionnaire',
    intro: [
      'Visionnaire to kolekcja zaprojektowana przez światowej sławy projektantów takich jak Samuel Mazza, Alessandro La Spada czy Roberto Tapinnasi.',
      'Visionnaire łączy barok z nowoczesnością, dzięki czemu dostarcza nowych wrażeń. „Wchodząc w świat Visionnaire uświadomisz sobie, że wszystko co widziałeś do tej pory, będzie wydawać ci się przestarzałe" mówi Leopold Cavalli, prezes IPE Cavalli Group.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/visionnaire/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'misuraemme': {
    slug: 'misuraemme',
    name: 'MisuraEmme',
    intro: [],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/misuraemme/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'scic-italia': {
    slug: 'scic-italia',
    name: 'SCIC Italia',
    intro: [
      'SCIC Italia to marka, która od ponad 75 lat wyznacza kierunki w projektowaniu luksusowych kuchni. Jej historia rozpoczęła się w 1948 roku w Parmie, gdzie z pasji do drewna i precyzji powstał pierwszy warsztat stolarski. Dziś SCIC to międzynarodowy symbol włoskiego designu, łączący tradycję z nowoczesnością. Każdy projekt powstaje z dbałością o detal, z wykorzystaniem najwyższej jakości materiałów i innowacyjnych rozwiązań technologicznych. To właśnie ta synergia sprawia, że SCIC Italia jest wyborem klientów poszukujących ponadczasowej elegancji.',
      'Kuchnie premium SCIC to nie tylko funkcjonalne przestrzenie – to styl życia. Włoska kuchnia w interpretacji SCIC to połączenie estetyki, ergonomii i pasji do gotowania. Kolekcje takie jak Canossa, czy Modena zachwycają wyrafinowaną formą, szlachetnymi materiałami i perfekcyjnym wykończeniem. Każda luksusowa kuchnia SCIC jest projektowana indywidualnie, z uwzględnieniem potrzeb i gustu klienta, tworząc przestrzeń, która inspiruje i zachwyca każdego dnia.',
      'SCIC Italia oferuje również systemy i rozwiązania dla luksusowej garderoby, które zostały zaporojektowane z myślą o estetyce, funkcjonalności i komforcie użytkowania. Wykonywane na zamówienie, z wykorzystaniem szlachetnych materiałów, takich jak naturalne drewno, szkło czy skóra, stanowią idealne dopełnienie luksusowego wnętrza. Garderoby SCIC to nie tylko miejsce przechowywania – to manifest stylu, elegancji i indywidualnego charakteru.',
      'Wybierając SCIC Italia, wybierasz coś więcej niż meble – wybierasz filozofię piękna, harmonii i włoskiego stylu życia. Marka nieustannie rozwija swoje kolekcje, współpracując z renomowanymi projektantami i domami mody, by tworzyć przestrzenie, które przekraczają granice funkcjonalności. Luksusowe kuchnie i garderoby SCIC to propozycja dla tych, którzy cenią jakość, design i niepowtarzalny klimat włoskiego rzemiosła. SCIC Italia to miejsce, gdzie codzienność staje się sztuką.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/scic-italia/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'valcucine': {
    slug: 'valcucine',
    name: 'Valcucine',
    intro: [
      'Każda kolekcja kuchni marki Valcucine została zaprojektowana z myślą przede wszystkim o jej użytkownikach, aby tworzyć produkty, które odpowiadają na ich potrzeby – w efekcie firma na przestrzeni trzydziestu pięciu lat działalności zyskała reputację jako marka skoncentrowana na ergonomii, wyznaczająca światowe trendy designu nowoczesnej kuchni. Innowacyjne rozwiązania wykorzystania przestrzeni są podkreślone przez minimalistyczny design, który nabiera luksusowego charakteru dzięki precyzji wykonania oraz materiałom wykończeniowym najwyższej jakości. Ekskluzywne kuchnie Valcucine dostarczają paletę możliwości do wykreowania wyjątkowej przestrzeni, w która stanie się integralną częścią domu.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/valcucine/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'exteta': {
    slug: 'exteta',
    name: 'Exteta',
    intro: [
      'Exteta to więcej niż marka — to filozofia życia, która celebruje piękno, rzemiosło i emocje zakorzenione w włoskiej tradycji. Zrodzona w sercu Brianzy, regionu słynącego z mistrzowskiego rzemiosła i wyrafinowanego wzornictwa stworzonego z myślą o przestrzeni tarasu i ogrodu, która staje się jednością z wnętrzem naszego domu.',
      'Każdy projekt to manifest estetyki, w którym forma spotyka funkcję, a materiały opowiadają własną historię. Inspirowana włoską sztuką życia, marka tworzy przedmioty, które nie tylko zdobią przestrzeń, ale ją definiują — jako miejsce komfortu, harmonii i indywidualnego wyrazu.',
      'W sercu Exteta bije puls rękodzieła. Mistrzowie z Brianzy, uznani na całym świecie za kunszt „Made in Italy", pracują z pasją i precyzją, wydobywając z materiałów ich najgłębszą esencję. Drewno, marmur, luksusowe tkaniny — każdy element jest starannie dobierany, obrabiany ręcznie i komponowany z dbałością o każdy detal.',
      'To nie są produkty seryjne — to unikatowe dzieła sztuki użytkowej, które powstają na zamówienie, z uwzględnieniem osobistych preferencji klienta. Dzięki temu każdy mebel marki Exteta jest niepowtarzalny, pełen charakteru i emocji.',
      'Exteta redefiniuje sposób, w jaki postrzegamy przestrzeń. W jej wizji nie istnieje już podział na wnętrze i plener — zamiast tego mamy do czynienia z płynnymi, hybrydowymi środowiskami, które można kształtować kreatywnym okiem. Meble Exteta są zaprojektowane tak, by harmonijnie współistnieć z naturą, tworząc miejsca, które inspirują, relaksują i zachwycają.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/exteta/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'gaggenau': {
    slug: 'gaggenau',
    name: 'Gaggenau',
    intro: [],
    galleryImages: Array.from({ length: 12 }, (_, i) => `/media/marki/gaggenau/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'roberto-cavalli': {
    slug: 'roberto-cavalli',
    name: 'Roberto Cavalli Home Interiors',
    intro: [
      'Intensywne kolory, modowe detale i wpływy afrykańskie połączone z włoską finezją i bogatą tradycją. Roberto Cavalli Home Interiors przedstawia wizję wnętrz w stylu spójnym z modowym dziedzictwem marki, w której możemy odnaleźć odważne, a jednocześnie eleganckie formy. Dbałość o precyzję wykonania widoczna jest w każdym detalu połączeń najwyższej jakości materiałów.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/roberto-cavalli/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'venicem': {
    slug: 'venicem',
    name: 'Venicem',
    intro: [
      'Założona w 2013 roku przez duet projektantów Massimo Tonetto i Melissę Lunardi, marka Venicem to synonim wyrafinowanego designu i rzemiosła najwyższej próby. Jej siedziba mieści się w pobliżu Wenecji, co nie jest przypadkowe – to właśnie bogactwo kulturowe i artystyczne tego regionu inspiruje twórców do eksperymentowania z formą, materiałem i światłem. Luksusowe lampy i meble Venicem powstają z nieustannego dialogu między prostymi, pierwotnymi kształtami a szlachetnymi surowcami, takimi jak szkło Murano czy polerowane metale.',
      'Każdy produkt Venicem to efekt ręcznej pracy mistrzów rzemiosła, którzy potrafią wydobyć piękno z niedoskonałości materiału. Marka celebruje naturalne cechy surowców – ich faktury, refleksy i nieregularności – przekształcając je w ponadczasowe dzieła sztuki użytkowej. Proces twórczy opiera się na równowadze między tradycyjnymi technikami a nowoczesnym podejściem do designu. Dzięki temu lampy Venicem nie tylko oświetlają przestrzeń, ale też ją definiują – jako rzeźbiarskie formy balansujące między światłem a materią.',
      'Produkty Venicem doskonale odnajdują się zarówno w przestrzeniach mieszkalnych, jak i komercyjnych – od luksusowych hoteli po nowoczesne apartamenty. Ich elegancka prostota i subtelna gra światła sprawiają, że są idealnym dopełnieniem każdego projektu wnętrzarskiego. Marka oferuje kolekcje oświetlenia, które łączą funkcjonalność z artystycznym wyrazem, nadając każdemu pomieszczeniu niepowtarzalny klimat. Wybierając ekskluzywne oświetlenie Venicem, inwestujesz nie tylko w design, ale w emocje, które rodzi światło.',
    ],
    galleryImages: Array.from({ length: 17 }, (_, i) => `/media/marki/venicem/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'vanory': {
    slug: 'vanory',
    name: 'Vanory',
    intro: [
      'Vanory to niemiecka marka, która redefiniuje pojęcie oświetlenia, łącząc innowacyjną technologię z emocjonalnym designem. Jej flagowa kolekcja Estelle to nie tylko źródło światła, ale także narzędzie do kreowania atmosfery. Dzięki możliwości zmiany nastroju jednym dotknięciem lub za pomocą aplikacji, Vanory oferuje użytkownikom pełną kontrolę nad przestrzenią.',
      'Każda lampa Estelle to dzieło sztuki – wykonana z ręcznie dmuchanego szkła, łączy w sobie solidność formy z lekkością i przejrzystością. Wnętrze skrywa 384 indywidualnie sterowane źródła światła, które tworzą hipnotyzujące efekty głębi i kolorów. Dzięki zastosowaniu unikalnych tekstyliów i inteligentnej technologii, Estelle zdobyła uznanie ekspertów, m.in. jury German Design Award.',
      'Vanory rozumie, że światło wpływa na nasze samopoczucie. Dlatego kolekcja Mood Collection oferuje ponad 200 gotowych scen świetlnych, które można dostosować do każdej chwili – od romantycznej kolacji po dynamiczne spotkanie towarzyskie. Estelle sprawdza się w różnych przestrzeniach: jako lampa wisząca nad stołem, stojąca obok sofy czy dekoracyjna na komodzie w sypialni.',
      'Vanory to nie tylko estetyka – to filozofia życia. Marka dąży do stworzenia domu, który żyje razem z nami, dostosowując się do naszych potrzeb i nastrojów. Prosta obsługa, możliwość personalizacji i nieustannie rozwijana kolekcja sprawiają, że Vanory to wybór dla tych, którzy cenią sobie piękno, funkcjonalność i emocjonalne doświadczenia.',
    ],
    galleryImages: Array.from({ length: 13 }, (_, i) => `/media/marki/vanory/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
  'flos': {
    slug: 'flos',
    name: 'Flos',
    intro: [
      'Flos to marka, która od dekad wyznacza standardy w projektowaniu oświetlenia, łącząc innowacyjność z ponadczasową estetyką. Jej produkty nie tylko rozświetlają wnętrza, ale także nadają im charakter i głębię. Od przestrzeni publicznych po prywatne rezydencje – Flos tworzy światło, które współgra z architekturą i emocjami.',
      'Współpraca z uznanymi projektantami, takimi jak Michael Anastassiades czy Philippe Starck, zaowocowała kolekcjami, które łączą minimalizm z wyrafinowaną technologią. Modele takie jak Bellhop Glass czy My Spot to przykłady, jak Flos potrafi przekształcić codzienne oświetlenie w dzieło sztuki użytkowej. Każdy produkt to przemyślana forma, która odpowiada na potrzeby współczesnych przestrzeni.',
      'Flos Professional oferuje kompleksowe wsparcie dla architektów i projektantów – od konsultacji po rozwiązania szyte na miarę. Kolekcje takie jak Zero Track Pro czy Spine Bespoke pozwalają na pełną integrację z przestrzenią, zachowując czystość linii i funkcjonalność. Marka nieustannie rozwija swoje portfolio, odpowiadając na zmieniające się potrzeby rynku.',
      'Dla marki Flos światło to nie tylko technologia – to sposób wyrażania emocji, tworzenia atmosfery i budowania relacji z przestrzenią. Poprzez inicjatywy takie jak Flos Hosting czy projekty w prestiżowych lokalizacjach, marka celebruje kreatywność i kulturę designu. Flos to wybór dla tych, którzy szukają czegoś więcej niż tylko lampy – to światło z duszą.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => `/media/marki/flos/gallery-${(i + 1).toString().padStart(2, '0')}.webp`),
  },
};

/**
 * Get editorial brand content by slug
 */
export function getEditorialBrandContent(slug: string): EditorialBrandContent | undefined {
  return editorialBrandContent[slug];
}
