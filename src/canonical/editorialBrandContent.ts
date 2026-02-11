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

import { mediaUrl } from '@/lib/buildMode';
import type { Locale } from '@/i18n/locale';

export interface EditorialBrandContent {
  slug: string;
  name: string;
  intro: string[];
  introEn?: string[];
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
    introEn: [
      'After 35 years at the forefront of luxury fashion, Versace Home needs no introduction. The endlessly iconic Italian fashion house is synonymous with the "more is more" philosophy. Oversized damask patterns, gold and silver foil accents, and ornamental fringes blend harmoniously to create some of the most luxurious furniture you have ever seen.',
      'The latest collection is a masterful blend of modern design and classical motifs, making Versace Home the answer for those who refuse to settle for ordinary interior décor.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/versace-home/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'trussardi-casa': {
    slug: 'trussardi-casa',
    name: 'Trussardi Casa',
    intro: [
      'Kolekcja Trussardi Casa to ponadczasowa elegancja inspirowana dynamiką metropolii Mediolanu.',
      'Rozwiązania dla części dziennej i sypialnej charakteryzują się czystymi liniami i unikalnymi materiałami i pozostają wierne koncepcji nieformalnej elegancji, która od ponad stu lat jest znakiem rozpoznawczym marki Greyhound.',
    ],
    introEn: [
      'The Trussardi Casa collection embodies timeless elegance inspired by the dynamic energy of Milan.',
      'Solutions for living and sleeping areas feature clean lines and unique materials, staying true to the concept of informal elegance that has been the hallmark of the Greyhound brand for over a century.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/trussardi-casa/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'bentley-home': {
    slug: 'bentley-home',
    name: 'Bentley Home',
    intro: [
      'Bentley Home to marka stworzona ku celebracji tradycji i charakteru jakim jest marka Bentley Motors. Kultowe i niepowtarzalne kształty, drogocenne materiały, wyrafinowane sylwetki najbardziej luksusowych aut marki Bentley zostały przetłumaczone na język interior design. Niekończąca się pasja do technologii, szybkości, elegancji i wyrafinowania pozwala na stworzenie spersonalizowanego unikalnego wnętrza.',
      'Najnowsza kolekcja Bentley Home została przedstawiona światu w kwietniu 2021 roku. Motywem przewodnim było rzucenie wyzwania konwencjom współczesnego designu, zmiana zasad, eksploracja nowych, nieznanych do tej pory terytoriów.',
      'Najnowsza kolekcja definiowana jest przez szlachetne materiały, nowoczesne technologie, chęć przeniesienie poziomu kunsztu na jeszcze wyższy poziom. Nadzwyczajna podróż zaczyna się od domu…',
    ],
    introEn: [
      'Bentley Home is a brand created to celebrate the heritage and character of Bentley Motors. Iconic, inimitable shapes, precious materials, and the refined silhouettes of the most luxurious Bentley cars have been translated into the language of interior design. An unending passion for technology, speed, elegance, and sophistication enables the creation of a personalized, unique living space.',
      'The latest Bentley Home collection was unveiled to the world in April 2021. The guiding theme was to challenge the conventions of contemporary design, rewrite the rules, and explore new, previously uncharted territories.',
      'The latest collection is defined by noble materials, modern technologies, and a desire to elevate craftsmanship to even greater heights. The extraordinary journey begins at home…',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/bentley-home/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'bugatti-home': {
    slug: 'bugatti-home',
    name: 'Bugatti Home',
    intro: [],
    galleryImages: Array.from({ length: 18 }, (_, i) => mediaUrl(`/media/marki/bugatti-home/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'dolce-gabbana-casa': {
    slug: 'dolce-gabbana-casa',
    name: 'Dolce & Gabbana Casa',
    intro: [
      'Meble Dolce&Gabbana Casa to elegancka kolekcja kolorowych osobliwości oferująca pełną gamę wyposażenia, od sof, przez jadalnię, po szafki nocne — każdy element ozdobiony jednym z czterech charakterystycznych motywów: Blue Mediterraneo, Carretto, Leo, Zebra. Główne motywy uzupełnia baza monochromatyczna w bieli, czerni lub złocie.',
      'Tworząc swoje kreacje, słynny włoski Dom Mody nawiązał współpracę z weneckimi markami i artystami, od legendarnych wytwórców szkła z Murano, takich jak Barbini i Salviati, po luksusową firmę tekstylną Tessitura Luigi Bevilacqua. Duet Dolce&Gabbana wykreował elementy dla domu, które nie tylko podkreślają przestrzeń, ale ją tworzą i definiują w całości. Podobnie jak ich ubrania, które wydają się zawsze ucieleśniać aurę czarującej, zmysłowej Włoszki, kolekcja Dolce&Gabbana Casa jest żywa, kobieca i odważna, przeznaczona dla maksymalisty, który emanuje przepychem, uważa lamparta za neutralny, i ubiera siebie i swój dom „w wyobraźni i fantazji".',
      'W warszawskim showroomie Luxarte można zobaczyć jedyną w Polsce ekspozycję mebli Dolce&Gabbana Casa oraz kolekcję akcesoriów. Nowatorskie podejście do wykończeń i tkanin zostało przeniesione z DNA świata mody do świata designu i wyposażenia wnętrz.',
    ],
    introEn: [
      'Dolce&Gabbana Casa furniture is an elegant collection of colourful curiosities offering a full range of furnishings — from sofas and dining sets to nightstands — each adorned with one of four signature motifs: Blue Mediterraneo, Carretto, Leo, and Zebra. The main motifs are complemented by a monochromatic base in white, black, or gold.',
      'In creating their designs, the celebrated Italian fashion house collaborated with Venetian brands and artisans, from legendary Murano glassmakers such as Barbini and Salviati to the luxury textile firm Tessitura Luigi Bevilacqua. The Dolce&Gabbana duo crafted home pieces that do not merely accent a space but create and define it entirely. Much like their garments, which always seem to embody the aura of a charming, sensuous Italian woman, the Dolce&Gabbana Casa collection is vibrant, feminine, and bold — designed for the maximalist who exudes opulence, considers leopard print a neutral, and dresses both themselves and their home "in imagination and fantasy."',
      'At the LuxArte showroom in Warsaw you can view the only Dolce&Gabbana Casa furniture exhibition in Poland, along with an accessories collection. The innovative approach to finishes and fabrics has been carried over from the DNA of the fashion world into the world of design and interior furnishings.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/dolce-gabbana-casa/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'visionnaire': {
    slug: 'visionnaire',
    name: 'Visionnaire',
    intro: [
      'Visionnaire to kolekcja zaprojektowana przez światowej sławy projektantów takich jak Samuel Mazza, Alessandro La Spada czy Roberto Tapinnasi.',
      'Visionnaire łączy barok z nowoczesnością, dzięki czemu dostarcza nowych wrażeń. „Wchodząc w świat Visionnaire uświadomisz sobie, że wszystko co widziałeś do tej pory, będzie wydawać ci się przestarzałe" mówi Leopold Cavalli, prezes IPE Cavalli Group.',
    ],
    introEn: [
      'Visionnaire is a collection designed by world-renowned designers such as Samuel Mazza, Alessandro La Spada, and Roberto Tapinnasi.',
      '"Entering the world of Visionnaire, you will realise that everything you have seen before will seem outdated," says Leopold Cavalli, president of IPE Cavalli Group. Visionnaire seamlessly blends baroque opulence with modernity, delivering an entirely new sensory experience.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/visionnaire/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'misuraemme': {
    slug: 'misuraemme',
    name: 'MisuraEmme',
    intro: [],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/misuraemme/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
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
    introEn: [
      'SCIC Italia is a brand that has been setting the standard in luxury kitchen design for over 75 years. Its story began in 1948 in Parma, where a passion for wood and precision gave rise to the first carpentry workshop. Today SCIC is an international symbol of Italian design, blending tradition with modernity. Every project is crafted with meticulous attention to detail, using the finest materials and innovative technological solutions. It is this synergy that makes SCIC Italia the choice of clients seeking timeless elegance.',
      'Premium SCIC kitchens are more than functional spaces — they are a lifestyle. An Italian kitchen as interpreted by SCIC is a fusion of aesthetics, ergonomics, and a passion for cooking. Collections such as Canossa and Modena captivate with refined form, noble materials, and flawless finishes. Each luxury SCIC kitchen is individually designed to match the client\'s needs and taste, creating a space that inspires and delights every day.',
      'SCIC Italia also offers luxury wardrobe systems designed with aesthetics, functionality, and comfort in mind. Made to order using noble materials such as natural wood, glass, and leather, they are the perfect complement to a luxurious interior. SCIC wardrobes are not merely storage — they are a statement of style, elegance, and individual character.',
      'Choosing SCIC Italia means choosing more than furniture — it means choosing a philosophy of beauty, harmony, and the Italian way of life. The brand continually develops its collections, collaborating with renowned designers and fashion houses to create spaces that transcend functionality. Luxury SCIC kitchens and wardrobes are for those who value quality, design, and the unique atmosphere of Italian craftsmanship. SCIC Italia is where the everyday becomes art.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/scic-italia/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'valcucine': {
    slug: 'valcucine',
    name: 'Valcucine',
    intro: [
      'Każda kolekcja kuchni marki Valcucine została zaprojektowana z myślą przede wszystkim o jej użytkownikach, aby tworzyć produkty, które odpowiadają na ich potrzeby – w efekcie firma na przestrzeni trzydziestu pięciu lat działalności zyskała reputację jako marka skoncentrowana na ergonomii, wyznaczająca światowe trendy designu nowoczesnej kuchni. Innowacyjne rozwiązania wykorzystania przestrzeni są podkreślone przez minimalistyczny design, który nabiera luksusowego charakteru dzięki precyzji wykonania oraz materiałom wykończeniowym najwyższej jakości. Ekskluzywne kuchnie Valcucine dostarczają paletę możliwości do wykreowania wyjątkowej przestrzeni, w która stanie się integralną częścią domu.',
    ],
    introEn: [
      'Every Valcucine kitchen collection has been designed first and foremost with its users in mind, creating products that respond to their needs. As a result, over thirty-five years of operation the company has earned a reputation as an ergonomics-focused brand that sets global trends in modern kitchen design. Innovative spatial solutions are underscored by minimalist design that takes on a luxurious character through precision craftsmanship and the finest finishing materials. Exclusive Valcucine kitchens offer a palette of possibilities for creating an exceptional space that becomes an integral part of the home.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/valcucine/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
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
    introEn: [
      'Exteta is more than a brand — it is a philosophy of life that celebrates beauty, craftsmanship, and emotions rooted in Italian tradition. Born in the heart of Brianza, a region renowned for masterful craftsmanship and refined design created for terraces and gardens that become one with the home interior.',
      'Every project is a manifesto of aesthetics where form meets function and materials tell their own story. Inspired by the Italian art of living, the brand creates objects that do not merely decorate a space but define it — as a place of comfort, harmony, and individual expression.',
      'At the heart of Exteta beats the pulse of handcraft. Master artisans from Brianza, recognized worldwide for "Made in Italy" excellence, work with passion and precision to draw out the deepest essence of their materials. Wood, marble, luxury fabrics — each element is carefully selected, handcrafted, and composed with attention to every detail.',
      'These are not mass-produced items — they are unique works of functional art, made to order with the client\'s personal preferences in mind. This is what makes every Exteta piece inimitable, full of character and emotion.',
      'Exteta redefines the way we perceive space. In its vision, there is no longer a boundary between indoors and outdoors — instead, we encounter fluid, hybrid environments shaped by a creative eye. Exteta furniture is designed to coexist harmoniously with nature, creating places that inspire, relax, and delight.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/exteta/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'gaggenau': {
    slug: 'gaggenau',
    name: 'Gaggenau',
    intro: [],
    galleryImages: Array.from({ length: 12 }, (_, i) => mediaUrl(`/media/marki/gaggenau/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'roberto-cavalli': {
    slug: 'roberto-cavalli',
    name: 'Roberto Cavalli Home Interiors',
    intro: [
      'Intensywne kolory, modowe detale i wpływy afrykańskie połączone z włoską finezją i bogatą tradycją. Roberto Cavalli Home Interiors przedstawia wizję wnętrz w stylu spójnym z modowym dziedzictwem marki, w której możemy odnaleźć odważne, a jednocześnie eleganckie formy. Dbałość o precyzję wykonania widoczna jest w każdym detalu połączeń najwyższej jakości materiałów.',
    ],
    introEn: [
      'Intense colours, fashion-forward details, and African influences blended with Italian finesse and rich tradition. Roberto Cavalli Home Interiors presents a vision of interiors consistent with the brand\'s fashion heritage — bold yet elegant forms where meticulous craftsmanship is visible in every detail and in the pairing of the finest materials.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/roberto-cavalli/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
  'venicem': {
    slug: 'venicem',
    name: 'Venicem',
    intro: [
      'Założona w 2013 roku przez duet projektantów Massimo Tonetto i Melissę Lunardi, marka Venicem to synonim wyrafinowanego designu i rzemiosła najwyższej próby. Jej siedziba mieści się w pobliżu Wenecji, co nie jest przypadkowe – to właśnie bogactwo kulturowe i artystyczne tego regionu inspiruje twórców do eksperymentowania z formą, materiałem i światłem. Luksusowe lampy i meble Venicem powstają z nieustannego dialogu między prostymi, pierwotnymi kształtami a szlachetnymi surowcami, takimi jak szkło Murano czy polerowane metale.',
      'Każdy produkt Venicem to efekt ręcznej pracy mistrzów rzemiosła, którzy potrafią wydobyć piękno z niedoskonałości materiału. Marka celebruje naturalne cechy surowców – ich faktury, refleksy i nieregularności – przekształcając je w ponadczasowe dzieła sztuki użytkowej. Proces twórczy opiera się na równowadze między tradycyjnymi technikami a nowoczesnym podejściem do designu. Dzięki temu lampy Venicem nie tylko oświetlają przestrzeń, ale też ją definiują – jako rzeźbiarskie formy balansujące między światłem a materią.',
      'Produkty Venicem doskonale odnajdują się zarówno w przestrzeniach mieszkalnych, jak i komercyjnych – od luksusowych hoteli po nowoczesne apartamenty. Ich elegancka prostota i subtelna gra światła sprawiają, że są idealnym dopełnieniem każdego projektu wnętrzarskiego. Marka oferuje kolekcje oświetlenia, które łączą funkcjonalność z artystycznym wyrazem, nadając każdemu pomieszczeniu niepowtarzalny klimat. Wybierając ekskluzywne oświetlenie Venicem, inwestujesz nie tylko w design, ale w emocje, które rodzi światło.',
    ],
    introEn: [
      'Founded in 2013 by the design duo Massimo Tonetto and Melissa Lunardi, Venicem is synonymous with refined design and the highest level of craftsmanship. Headquartered near Venice, the brand draws on the region\'s rich cultural and artistic heritage to experiment with form, material, and light. Venicem\'s luxury lamps and furniture are born from a continuous dialogue between simple, primal shapes and noble materials such as Murano glass and polished metals.',
      'Every Venicem product is the result of handwork by master craftspeople who know how to draw beauty from the imperfections of a material. The brand celebrates the natural qualities of raw materials — their textures, reflections, and irregularities — transforming them into timeless works of functional art. The creative process rests on a balance between traditional techniques and a modern approach to design. As a result, Venicem lamps do not merely illuminate a space — they define it, as sculptural forms that balance between light and matter.',
      'Venicem products feel at home in both residential and commercial spaces — from luxury hotels to modern apartments. Their elegant simplicity and subtle play of light make them the ideal complement to any interior project. The brand offers lighting collections that combine functionality with artistic expression, giving every room a unique atmosphere. Choosing exclusive Venicem lighting means investing not just in design but in the emotions that light can evoke.',
    ],
    galleryImages: Array.from({ length: 17 }, (_, i) => mediaUrl(`/media/marki/venicem/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
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
    introEn: [
      'Vanory is a German brand that redefines the concept of lighting by merging innovative technology with emotional design. Its flagship Estelle collection is not merely a source of light but a tool for creating atmosphere. With the ability to change the mood at a single touch or through an app, Vanory gives users complete control over their space.',
      'Every Estelle lamp is a work of art — crafted from hand-blown glass, it combines solidity of form with lightness and transparency. Inside, 384 individually controlled light sources create mesmerizing effects of depth and colour. Thanks to the use of unique textiles and intelligent technology, Estelle has earned the acclaim of experts, including the German Design Award jury.',
      'Vanory understands that light affects our well-being. That is why the Mood Collection offers over 200 ready-made lighting scenes that can be tailored to any moment — from a romantic dinner to a lively social gathering. Estelle works beautifully in a variety of settings: as a pendant lamp above the table, a standing lamp beside the sofa, or a decorative fixture on a bedroom dresser.',
      'Vanory is more than aesthetics — it is a philosophy of living. The brand strives to create a home that lives alongside us, adapting to our needs and moods. Simple operation, extensive personalization, and a constantly evolving collection make Vanory the choice for those who value beauty, functionality, and emotional experiences.',
    ],
    galleryImages: Array.from({ length: 13 }, (_, i) => mediaUrl(`/media/marki/vanory/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
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
    introEn: [
      'Flos is a brand that has been setting the standard in lighting design for decades, combining innovation with timeless aesthetics. Its products do not merely brighten interiors — they give them character and depth. From public spaces to private residences, Flos creates light that resonates with architecture and emotion.',
      'Collaborations with acclaimed designers such as Michael Anastassiades and Philippe Starck have produced collections that marry minimalism with sophisticated technology. Models like Bellhop Glass and My Spot exemplify how Flos can transform everyday lighting into functional works of art. Each product is a considered form that meets the needs of contemporary spaces.',
      'Flos Professional offers comprehensive support for architects and designers — from consultations to bespoke solutions. Collections such as Zero Track Pro and Spine Bespoke enable full integration with a space while preserving clean lines and functionality. The brand continually expands its portfolio, responding to the evolving demands of the market.',
      'For Flos, light is more than technology — it is a way to express emotion, create atmosphere, and build a relationship with space. Through initiatives like Flos Hosting and projects in prestigious locations, the brand celebrates creativity and design culture. Flos is the choice for those seeking something more than just a lamp — it is light with a soul.',
    ],
    galleryImages: Array.from({ length: 20 }, (_, i) => mediaUrl(`/media/marki/flos/gallery-${(i + 1).toString().padStart(2, '0')}.webp`)),
  },
};

/**
 * Get editorial brand content by slug
 */
export function getEditorialBrandContent(slug: string): EditorialBrandContent | undefined {
  return editorialBrandContent[slug];
}

/**
 * Get localized intro paragraphs for a brand
 */
export function getBrandIntro(slug: string, locale: Locale = 'pl'): string[] {
  const content = editorialBrandContent[slug];
  if (!content) return [];
  if (locale === 'en' && content.introEn && content.introEn.length > 0) {
    return content.introEn;
  }
  return content.intro;
}
