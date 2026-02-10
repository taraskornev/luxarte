/**
 * LuxArte Articles Data
 * Step 18: Content Parity - Real article data from legacy site
 * 
 * All content sourced directly from luxarte.pl legacy articles
 */

import { mediaUrl } from '@/lib/buildMode';

export interface ArticleSection {
  heading?: string;
  content: string;
  images?: string[];
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  heroImage: string;
  excerpt: string;
  sections: ArticleSection[];
  gallery?: string[];
  tags?: string[];
}

export const articles: Article[] = [
  {
    slug: 'venicem-nowoczesne-oblicze-oswietlenia-z-murano',
    title: 'VENICEM – NOWOCZESNE OBLICZE OŚWIETLENIA Z MURANO',
    date: '29 SIERPNIA 2025',
    category: 'AKTUALNOŚCI',
    image: mediaUrl('/media/pages/aktualnosci/venicem/image-01.jpeg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/venicem/image-01.jpeg'),
    excerpt: 'Venicem to więcej niż marka – to współczesna twarz weneckiego szkła, gdzie każda lampa tworzy nie tylko światło, lecz atmosferę.',
    sections: [
      {
        heading: 'Dziedzictwo z przyszłością',
        content: 'Venicem to więcej niż marka – to współczesna twarz weneckiego szkła, gdzie każda lampa tworzy nie tylko światło, lecz atmosferę. Geometria, materia, blask – wszystko składa się w ponadczasowy język formy. W ten sposób Venicem redefiniuje to, jak myślimy o szklanym rzemiośle, łącząc bogatą przeszłość tradycji Murano ze współczesnością designu.',
        images: [
          mediaUrl('/media/pages/aktualnosci/venicem/image-02.jpg'),
          mediaUrl('/media/pages/aktualnosci/venicem/image-03.jpg')
        ]
      },
      {
        heading: 'Rzemiosło spotyka design – materiały i procesy',
        content: 'Kluczem do wyjątkowości Venicem jest subtelne balansowanie między ręcznym rzemiosłem a precyzją nowoczesnej formy. Tradycyjne szkło Murano, obrabiane „na oko" i według pradawnych technik, łączy się z nowoczesnym w charakterze metalem o szerokiej palecie wykończeń. Każdy element powstaje w ścisłej współpracy z rzemieślnikami, którzy nadają każdej oprawie indywidualny charakter. W efekcie powstają lampy, które nie tylko oświetlają przestrzeń, ale ją definiują.\n\nProces tworzenia oświetlenia Venicem rozpoczyna się od precyzyjnie wyselekcjonowanych materiałów – szkła z Murano i wysokogatunkowych metali, głównie mosiądzu. Szkło formowane jest ręcznie, tradycyjną techniką „a soffio" – dmuchania na gorąco, która wymaga nie tylko siły fizycznej, ale i wieloletniego doświadczenia w pracy z płynnym materiałem. W tym samym czasie metal poddawany jest obróbce mechanicznej i ręcznej: cięciu, gięciu, szlifowaniu, a następnie wykańczany przez oksydację, szczotkowanie lub polerowanie, zależnie od projektu. Każdy detal – od krzywizny szkła po strukturę powierzchni metalu – przechodzi przez ludzkie ręce, co nadaje każdemu egzemplarzowi unikalny charakter i niepowtarzalny rytm formy.',
        images: [
          mediaUrl('/media/pages/aktualnosci/venicem/image-04.jpg'),
          mediaUrl('/media/pages/aktualnosci/venicem/image-05.jpg')
        ]
      },
      {
        heading: 'Most między tradycją Murano a nowoczesnym wzornictwem',
        content: 'Venicem, założony w 2013 roku przez Massimo Tonetto i Melissę Lunardi, to marka, która rodzi się z głębokiego związku z rzemiosłem Murano – kolebki szkła włoskiego – i z żarliwym dążeniem do współczesnej elegancji. Siedziba w Treviso, tuż obok Wenecji i wyspy Murano, stwarza idealne warunki do czerpania z mistrzowskich technik formowania szkła, a jednocześnie wprowadza je w nowy wymiar dzięki nowoczesnemu spojrzeniu na design. Projektanci Venicem czerpią z historycznego dziedzictwa nie tylko formy, ale i emocje zaklęte w szkle. Ich celem jest tworzenie obiektów, które są ponadczasowe – zakorzenione w przeszłości, a jednocześnie wyprzedzające swoje czasy.',
        images: [
          mediaUrl('/media/pages/aktualnosci/venicem/image-06.jpg'),
          mediaUrl('/media/pages/aktualnosci/venicem/image-07.jpg')
        ]
      },
      {
        heading: 'Oferta marki Venicem dostępna w LuxArte',
        content: 'Cieszymy się, że możemy dzielić się z Państwem ofertą najlepszych włoskich marek. Zapraszamy do kontaktu pod adresem info@luxarte.pl lub umówienia spotkania w naszym showroomie, jeśli chcieliby Państwo dowiedzieć się więcej na temat marki Venicem.',
        images: [mediaUrl('/media/pages/aktualnosci/venicem/image-08.jpg')]
      }
    ],
    tags: ['Lampy Venicem', 'Luksusowe Oświetlenie', 'Nowoczesne Oświetlenie', 'Oświetlenie Premium']
  },
  {
    slug: 'exteta-kolekcja-loro-piana-ponadczasowe-meble-ogrodowe',
    title: 'EXTETA – KOLEKCJA LORO PIANA – PONADCZASOWE MEBLE OGRODOWE',
    date: '10 LIPCA 2025',
    category: 'NOWA KOLEKCJA',
    image: mediaUrl('/media/pages/aktualnosci/exteta/image-01.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/exteta/image-01.jpg'),
    excerpt: 'Kolekcja The Delight Chairs to owoc współpracy dwóch włoskich marek: Exteta, mistrza mebli outdoorowych, oraz Loro Piana Interiors.',
    sections: [
      {
        heading: 'Spotkanie dwóch ikon luksusu',
        content: 'Kolekcja The Delight Chairs to owoc współpracy dwóch włoskich marek: Exteta, mistrza mebli outdoorowych, oraz Loro Piana Interiors, specjalizującej się w ekskluzywnych tkaninach. Projekt powstał z potrzeby reinterpretacji klasycznego krzesła reżyserskiego – symbolu beztroskiego wypoczynku – w wersji luksusowej, eleganckiej i funkcjonalnej. Wspólnie z projektantką Paolą Navone, marki stworzyły kolekcję, która łączy tradycję rzemiosła z nowoczesnym stylem życia.',
        images: [mediaUrl('/media/pages/aktualnosci/exteta/image-02.jpg'), mediaUrl('/media/pages/aktualnosci/exteta/image-03.webp')]
      },
      {
        heading: 'Filozofia hybrydowej przestrzeni Exteta',
        content: 'Exteta od lat promuje ideę przestrzeni bez granic, gdzie wnętrze płynnie przechodzi w zewnętrze. Kolekcja Delight Chairs doskonale wpisuje się w tę filozofię – meble zaprojektowano z myślą o użytkowaniu zarówno na jachtach, tarasach, jak i w eleganckich wnętrzach. Dzięki zastosowaniu materiałów odpornych na warunki atmosferyczne, takich jak mahoniowe drewno Sapelli i tkaniny Loro Piana z technologią Storm System®, krzesła są trwałe, stylowe i uniwersalne.',
        images: [mediaUrl('/media/pages/aktualnosci/exteta/image-04.webp')]
      },
      {
        heading: 'Design inspirowany naturą i modą',
        content: 'Sukces kolekcji pozwolił na poszerzenie kolekcji, a każdy element – składane krzesło, fotel i stołek – został wykonany ręcznie z dbałością o detale. Letnia wersja zachwyca tkaninami w paski i jednolitych kolorach, natomiast zimowa odsłona St. Moritz oferuje kaszmirowe pokrowce Cashfur, które dodają miękkości i ciepła. Inspiracją były nie tylko klasyczne formy, ale też świat jachtów i górskich kurortów, co nadaje kolekcji wyjątkowy charakter.',
        images: [mediaUrl('/media/pages/aktualnosci/exteta/image-05.jpg'), mediaUrl('/media/pages/aktualnosci/exteta/image-06.webp')]
      },
      {
        heading: 'Rzemiosło i zrównoważony luksus',
        content: 'Zarówno Exteta, jak i Loro Piana Interiors, kładą nacisk na etyczne pozyskiwanie materiałów i dbałość o środowisko. Produkty powstają w duchu „Made in Italy", z wykorzystaniem lokalnych zasobów i tradycyjnych technik. Delight Chairs to nie tylko meble – to manifest jakości, stylu i odpowiedzialności, który redefiniuje pojęcie luksusu w przestrzeni outdoorowej.'
      },
      {
        heading: 'Oferta marki Exteta dostępna w LuxArte',
        content: 'Cieszymy się, że możemy dzielić się z Państwem oferta najlepszych włoskich marek. Zapraszamy do kontaktu pod adresem info@luxarte.pl lub umówienia spotkania w naszym showroomie, jeśli chcieliby Państwo dowiedzieć się więcej na temat kolekcji.',
        images: [mediaUrl('/media/pages/aktualnosci/exteta/image-07.webp')]
      }
    ],
    tags: ['Loro Piana', 'Luksusowe Meble Ogrodowe', 'Meble Exteta']
  },
  {
    slug: 'archigraphica-nowoczesna-kuchnia-bliska-naturze',
    title: 'ARCHIGRAPHICA – NOWOCZESNA KUCHNIA BLISKA NATURZE',
    date: '29 KWIETNIA 2025',
    category: 'NOWA KOLEKCJA',
    image: mediaUrl('/media/pages/aktualnosci/archigraphica/image-01.webp'),
    heroImage: mediaUrl('/media/pages/aktualnosci/archigraphica/image-01.webp'),
    excerpt: 'Nowoczesny design kuchni Valcucine od lat inspiruje i wyznacza trendy na rynku ekskluzywnych kuchni.',
    sections: [
      {
        heading: 'Esencja drewna',
        content: 'Nowoczesny design kuchni Valcucine od lat inspiruje i wyznacza trendy na rynku eksluzywnych kuchni. Najnowsza kapsułowa kolekcja, Archigraphica, jest propozycją, która łączy świat nowoczesny i pierwotny. Baza kuchni, wykończona w naturalnym orzechu, została wyposażona w lite uchwyty, które rysują perspektywiczny rysunek bryły. Wydłużone uchwyty tworzą indywidualny rysunek kuchni, który będzie zewnętrznym wyrazem układu funkcjonalnego, dobranego pod indywidualny projekt. Naturalny orzech, przyjemna faktura i ciepły kolor, wprowadzają przytulną atmosferę we wnętrzu. Zestawienie z minimalistycznymi frontami ze szkła, dodaje kuchni lekkości i nowoczesnego charakteru.',
        images: [mediaUrl('/media/pages/aktualnosci/archigraphica/image-02.webp')]
      },
      {
        heading: 'Połączenie materiałów',
        content: 'Niezmiennym elementem kuchni Archigraphica jest drewniany profil, który w zależności od układu funkcjonalnego, determinuje rysunek kuchni. Fronty mogą zostać wykończone drewnem lub szkłem. Kontrast charakteru tych materiałów sprawia, że otrzymujemy kuchnię nowoczesną o ciepłym, przytulnym charakterze. Trzecim elementem jest matał blatu, obejmujący dolne korpusy, który może zostać wykonany z marmuru, piaskowca, czy wykończony w lakierze.\n\nSpektrum możliwości pozwala na integrację kuchni z charakterem wnętrza i ekspresję indywidualnych potrzeb.',
        images: [mediaUrl('/media/pages/aktualnosci/archigraphica/image-03.jpeg'), mediaUrl('/media/pages/aktualnosci/archigraphica/image-04.jpeg')]
      },
      {
        heading: 'Tradycja innowacji',
        content: 'Gabriele Centazzo, założyciel marki i główny designer, od początku zyskał uznanie na rynku dzięki nieszablonowemu podejście i innowacyjnym rozwiązaniom.\n\n„Zawsze pracowałem nad czystymi bryłami, w przypadku Archigraphica chciałem dodać do powierzchni mebli graficzny projekt wykonany z naturalnej materii. W społeczeństwie, które coraz bardziej odrywa się od natury i dostosowuje się do materiałów syntetycznych, uznałem, że ważne jest zaproponowanie drewna nie tylko jako powierzchniowego forniru, ale jako masy, jako naturalnej materii, aby zaspokoić wrażenia dotykowe i przywrócić pamięć przodków, która uczyniła drewno przyjaznym materiałem dla ludzkości przez tysiące lat. Projekt graficzny, który można swobodnie komponować, oferuje projektantom wyjątkową swobodę ekspresji, pozwalając zaprojektować materialność i architekturę fasady ich kuchni".\n\nGabriele Centazzo'
      },
      {
        heading: 'Valcucine tylko w LuxArte',
        content: 'Cieszymy się, że jako jedyni w Polsce, możemy zaoferować Państwu luksusowe kuchnie marki Valcucine. Ekspozycja znajduje się w naszym warszawskim shworoom\'ie przy Placu Piłsudskiego 9. Nasz zespół doradzi w wyborze najbardziej optymalnego modelu dla potrzeb wnętrza.\n\nZapraszamy do kontaktu pod adresem: warszawa@luxarte.pl',
        images: [mediaUrl('/media/pages/aktualnosci/archigraphica/image-05.jpeg')]
      }
    ],
    tags: ['Ekskluzywna Kuchnia', 'Kuchnie Valcucine', 'Nowoczesna Kuchnia']
  },
  {
    slug: 'trussardi-casa-nowa-kolekcja-2025',
    title: 'TRUSSARDI CASA – NOWA KOLEKCJA 2025',
    date: '18 KWIETNIA 2025',
    category: 'NOWA KOLEKCJA',
    image: mediaUrl('/media/pages/aktualnosci/trussardi/image-01.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/trussardi/image-01.jpg'),
    excerpt: 'Marka Trussardi od lat konsekwentnie kontynuuje ideę „quiet luxury", gdzie design jest doświadczeniem, styl postawą.',
    sections: [
      {
        heading: 'Świat marki Trussardi',
        content: 'Marka Trussardi od lat konsekwentnie kontynuuje ideę „quiet luxury", gdzie design jest doświadczeniem, styl postawą, a dom miejscem, w którym można intymnie wyrazić siebie. Podczas Milan Design Week mieliśmy okazje zobaczyć jak świat mody wpływa na design mebli, ponieważ nowa kolekcja została zaprezentowana w siedzibie Trussardi, Miroglio, mediolańskim pałacu przy Via Burlamacchi 4.\n\nDesign, narodzony w modzie, przekracza jej granice i przenika design. Marka Trussardi pioniersko interpretowała luksus w sposób daleki od ostentacji, wykraczając poza konwencjonalne schematy, aby uczynić go bardziej inkluzywnym i świadomym; luksus oparty na jakości, autentyczności i świadomości.\n\nNowoczesny design wymaga maksymalnej precyzji i najlepszej jakości materiałów. Meblom towarzyszy również kolekcja akcesoriów, które dodają wnętrzu życia, a jednocześnie intymnego charakteru.',
        images: [
          mediaUrl('/media/pages/aktualnosci/trussardi/image-02.jpg'),
          mediaUrl('/media/pages/aktualnosci/trussardi/image-03.webp'),
          mediaUrl('/media/pages/aktualnosci/trussardi/image-04.jpg'),
          mediaUrl('/media/pages/aktualnosci/trussardi/image-05.jpg')
        ]
      }
    ],
    tags: ['MilanDesignWeek2025', 'SaloneDelMobile2025']
  },
  {
    slug: 'bentley-home-nowa-kolekcja-2025',
    title: 'BENTLEY HOME – NOWA KOLEKCJA 2025',
    date: '15 KWIETNIA 2025',
    category: 'NOWA KOLEKCJA',
    image: mediaUrl('/media/pages/aktualnosci/bentley-2025/image-01.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/bentley-2025/image-01.jpg'),
    excerpt: 'Prezentacja najnowszej kolekcji odbyła się w Atelier marki przy Corso Venezia.',
    sections: [
      {
        heading: 'Premiera nowej kolekcji Bentley Home podczas Milan Design Week 2025',
        content: 'Prezentacja najnowszej kolekcji odbyła się w Atelier marki przy Corso Venezia, którego patio wprowadzało w nastrój, inspirowany atmosferą angielskiego ogrodu przez ogrom bujnej roślinności w swoich naturalnych formach i kolorach, zapewniając niezwykłe doświadczenie dla zmysłów. Wśród zieleni, zapierającej dech w piersiach scenerii, naturalnie odnalazła się mebli ogrodowych i akcesoriów.',
        images: [
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-02.jpg'),
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-03.jpg'),
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-04.jpg'),
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-05.jpg')
        ]
      },
      {
        heading: 'Luksus szyty na miarę',
        content: 'Nowa kolekcja kontynuuje obrany kierunek designu Bentley Home poprzez podwyższoną innowacyjne podejście do palety materiałów. Tegoroczna kolekcja skupia się wokół DNA marki, które jest charakterystyczne dla wnętrz samochodów. Chodzi oczywiście o drewno, którego forniry zostały poszerzone o matowych wykończenia z otwartymi porami, oferując nowy poziom głębi sensorycznej.\n\nRównież paleta kamienia wzbogaciła się o tegoroczną selekcję, czyli marmur Verde Belvedere, uderzający zielony kamień o ziemistych odcieniach i wykwintnych detalach, wzmacniający powierzchnie swoją naturalną elegancją i głębią. Nowością jest również szczotkowany Ivory Onyx, dodający wyrafinowaną grę faktury i światła.\n\nMarka Bentley Home podnosi poziom doświadczenia prywatnej przestrzeni życiowej, oferując niezrównane rzemiosło i etos projektowania marki. Każdy element jest w pełni konfigurowalny, podnosząc poziom indywidualizmu. Ten poziom personalizacji pozwala na starannie wyselekcjonowany wybór wykwintnych materiałów, zaprojektowanych dla najbardziej ekskluzywnych wnętrz.',
        images: [
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-06.jpg'),
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-07.jpg'),
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-08.jpg'),
          mediaUrl('/media/pages/aktualnosci/bentley-2025/image-09.jpg')
        ]
      }
    ],
    tags: ['BentleyHome', 'MilanDesignWeek2025', 'SaloneDelMobile2025']
  },
  {
    slug: 'zapraszamy-na-milan-design-week-2025',
    title: 'ZAPRASZAMY NA MILAN DESIGN WEEK 2025!',
    date: '3 MARCA 2025',
    category: 'AKTUALNOŚCI',
    image: mediaUrl('/media/pages/aktualnosci/milan-design-week-2025/hero.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/milan-design-week-2025/hero.jpg'),
    excerpt: 'Jak co roku, nie możemy się doczekać największego święta Designu.',
    sections: [
      {
        heading: 'Zapraszamy na Milan Design Week 2025',
        content: 'Jak co roku, nie możemy się doczekać największego święta Designu. Targom Salone del Mobile towarzyszy tydzień intensywnych wydarzeń w przestrzeni Mediolanu. Wystawy, nowości, wieczorne bankiety – wszystko to sprawia, że każdy, kto osobiście doświadczy tej niezwykłej atmosfery zrozumie, dlaczego właśnie Włosi wiodą prym i wyznaczają światowe standardy luksusu i projektowania.\n\nZapraszamy do umówienia spotkania w Mediolanie podczas targów, szczególnie na stoiskach wiodących marek z naszego portfolio, które można zobaczyć na poniższej mapce.\n\nProsimy o wiadomość na adres: info@luxarte.pl',
        images: [mediaUrl('/media/pages/aktualnosci/milan-design-week-2025/img-01.png')]
      }
    ],
    tags: ['MilanDesignWeek2025', 'SaloneDelMobile2025']
  },
  {
    slug: 'moda-w-designie-kolekcji-mebli-versace-home',
    title: 'MODA W DESIGNIE KOLEKCJI MEBLI VERSACE HOME',
    date: '13 LUTEGO 2025',
    category: 'AKTUALNOŚCI',
    image: mediaUrl('/media/pages/aktualnosci/versace-home/hero.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/versace-home/hero.jpg'),
    excerpt: 'Marka Versace zawsze znana był z silnych motywów, czerpanych przez jego twórcę ze świata mitologii, antyku i historii sztuki.',
    sections: [
      {
        heading: 'Motywy marki kolekcji mebli Versace Home',
        content: 'Marka Versace zawsze znana był z silnych motywów, czerpanych przez jego twórcę, Gianniego Versace, ze świata mitologii, antyku i historii sztuki. Donatella Versace, która osobiście była zaangażowana w tworzenie kolekcji Home, udostępniła szereg motywów charakterystycznych dla włoskiego domu mody, by odbiorcy mogli odnaleźć je również w detalach mebli. Fani domu mody Versace na pewno doskonale odnajdują inspiracje jakie towarzyszyły designerom przy tworzeniu kolekcji mebli, a my chcielibyśmy pokazać Państwu w najważniejsze z nich.'
      },
      {
        heading: 'Fotel Venus',
        content: 'Fotel Venus jest wyjątkowym przykładem w kolekcji mebli Versace, ponieważ inspiracją jego do powstania była cała stylizacja i kobieta jako muza sama w sobie. Czarna suknia, której kształt przeniesiono w linii designu fotela, została zaprojektowana przez Gianniego Versace z myślą o Naomi Campbell, której trudno nie uznać jako postać współczesnej Venus, bogini wybiegów, wzór kobiecości. Asymetryczna forma o obłych kształtach została osadzona na cieniutkiej podstawie, która przywozi nam na myśl wysoki obcas. Do tego detal w postaci, złotego zamka na tyle oparcia, który sprawia, że mebel przywodzi na myśl prawdziwą kreację wieczorową.',
        images: [mediaUrl('/media/pages/aktualnosci/versace-home/img-01.webp')]
      },
      {
        heading: 'Ramoneska i fotel Stiletto',
        content: 'Charakterystyczne oparcie sof i foteli Stiletto, zostało zainspirowane kurtką evergreenem w świecie mody. Ramoneska, to czarna skórzana kurtka o rockowym charakterze – dlatego, naszym zdaniem, kolekcja Stiletto w pełni ujawnia swoje DNA wykończona w czarnej skórze. Charakterystyczny kołnierz kurtki był bazową linią dla projektu całej lini mebli z kolekcji Versace Home.',
        images: [mediaUrl('/media/pages/aktualnosci/versace-home/img-02.webp')]
      },
      {
        heading: 'La Medusa',
        content: 'Logo marki, najbardziej rozpoznawalny znak domu mody Versace. Meduza, mityczna prabogini, na której widok wszystko, co żywe dębiało i obracało się w kamień. Właśnie efekt osłupienia przyświecał Gianniemu Versace, którego chciał zatrzymać wzrok wszystkich, którzy spojrzą na kobietę ubraną w jego ubrania. Wyrazistość kolekcji modowej również jest widoczna w kolekcji dla domu. Meble Versace Home z pewnością nie pozostawią nikogo obojętnym.',
        images: [mediaUrl('/media/pages/aktualnosci/versace-home/img-03.webp')]
      },
      {
        heading: 'La Greca',
        content: 'Meander, charakterystyczny motyw dekoracyjny starożytności, Gianni Versace zaczerpnął z rodzimej Sycylii, gdzie wzrastał wśród wszechobecnych śladów antycznej kultury. Widoczny w szczególności w okuciach torebek, został przeniesiony również na okucia metalowe w kolekcji ostatniej kolekcji mebli.',
        images: [mediaUrl('/media/pages/aktualnosci/versace-home/img-04.webp')]
      },
      {
        heading: 'Barocco',
        content: 'Najbogatszy w historii sztuki, pełen przepychu, skupiony na zmysłach i emocjach okres Baroku musiał odcisnąć swoje piętno na Giannim Versace, któremu zależało na wyzwoleniu piękna kobiety i wywołaniu niepohamowanego zachwytu. Ornament Barocco, którego nazwa jest ukłonem dla epoki, jest flagowym motywem tkanin marki Versace. Oczywiście nie mogło go zabraknąć w kolekcji Home, gdzie pojawia się w całej palecie kolorystycznej – od charakterystycznych złota i czerni, po monochromatyczne żakardy.',
        images: [mediaUrl('/media/pages/aktualnosci/versace-home/img-05.webp')]
      },
      {
        heading: 'V-Logo',
        content: 'Charakterystycznemu pikowaniu torebek Versace, zawsze towarzyszy dekoracyjny, metalowy monogram V-logo. To połączenie zostało przeniesione w kolekcji V-marble. Stół obiadowy i stoliki kawowe z marmurowym blatem posiadają pikowaną podstawę zwieńczoną charakterystycznym monogramem.\n\nDziedzictwo domu mody Versace i jego przeniesienie do świata designu jest kontynuacją drogi jaką wytyczył Gianni Versace. Charakterystyczne motywy pozwalają zachować ciągłość i spójność designu, który od lat intryguje miliony osób. Kolekcja Versace Home daje szansę stworzenia nietuzinkowego, oryginalnego wnętrza, które będzie tętnić włoskim stylem życia.',
        images: [mediaUrl('/media/pages/aktualnosci/versace-home/img-06.jpg')]
      }
    ],
    tags: ['VersaceHome']
  },
  {
    slug: 'maison-objet-2025-kolekcja-bugatti-home',
    title: 'MAISON & OBJECT 2025 – KOLEKCJA BUGATTI HOME',
    date: '23 STYCZNIA 2025',
    category: 'NOWA KOLEKCJA',
    image: mediaUrl('/media/pages/aktualnosci/bugatti-home/hero.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/bugatti-home/hero.jpg'),
    excerpt: 'W ramach Maison&Objet In The City, po raz pierwszy kolekcja Bugatti Home została zaprezentowana w Paryżu.',
    sections: [
      {
        content: 'W ramach Maison&Objet In The City, po raz pierwszy kolekcja Bugatti Home została zaprezentowana w Paryżu, w przestrzeni ekskluzywnej ekspozycji showroom\'u Luxury Living przy legendarnej Avenue George V.\n\nW dniu paryskiej premiery kolekcji klienci po przybyciu na trzypoziomową wystawę byli powitani obecnością jedynego w swoim rodzaju samochodu Bugatti, legendarnego La Voiture Noire. To kultowe arcydzieło, cenione za niezrównany design i inżynierię, jest ucieleśnieniem zaangażowania firmy Bugatti w przekraczanie granic i tworzenie ponadczasowych dzieł sztuki.',
        images: [mediaUrl('/media/pages/aktualnosci/bugatti-home/img-01.jpg')]
      },
      {
        content: 'Podczas święta designu w Paryżu zaprezentowana zostały kultowe elementy kolekcji mebli, jak sofa TYPE_3, sofa TYPE_1, krzesło TYPE_5, stół TYPE_4 i lustro TYPE_9, które odzwierciedlają dążenie Bugatti do innowacyjności.\n\nBugatti Home, prawdziwe świadectwo bogatego dziedzictwa marki Bugatti, w swojej nowej paryskiej siedzibie na nowo interpretuje wartości i wizję swojego założyciela, Ettore Bugattiego. Jako hołd dla tego wydarzenia klienci będą mogli również odkryć rzadki Bugatti Baby II – replikę w skali 75% kultowego modelu Type 35, dzieła Ettore i najbardziej udanego samochodu wyścigowego w historii – we współpracy z Hedley Studios. Ten przedmiot kolekcjonerski, wyprodukowany w zaledwie 500 egzemplarzach na całym świecie, upamiętnia setną rocznicę legendarnego modelu Type 35 i jego dziedzictwo dla marki, sto lat później. Obecność tego arcydzieła podkreśla nieprzemijające dziedzictwo Bugatti i jego wpływ na pokolenia.',
        images: [mediaUrl('/media/pages/aktualnosci/bugatti-home/img-02.jpg')]
      },
      {
        content: 'Kolekcja łączy w sobie naturalne i zaawansowane technologicznie materiały, takie jak gładkie aluminium i dąb o otwartych porach, podkreślające kunszt rzemieślniczy, który jest nieodłącznym elementem tożsamości Bugatti Home. Narrację wzbogacają nowe rozwiązania oświetleniowe, takie jak kolekcja lamp TYPE_13, oraz wyraziste elementy, takie jak kredens TYPE_6 i stolik kawowy TYPE_10.\n\nWystawa w Paryżu nie tylko celebruje dziedzictwo Bugatti, ale także otwiera nowy rozdział w historii firmy. Podczas swojego paryskiego debiutu Bugatti Home zaprasza gości do świata, w którym osiągi motoryzacji i luksusowy design łączą się ze sobą. Kolejna prezentacja nowości z kolekcji czeka nas Mediolanie podczas Milano Design Week 2025. Już nie możemy się doczekać!'
      }
    ],
    tags: ['BugattiHome', 'Maison&Objet2025']
  },
  {
    slug: 'odsluch-najnowszej-plyty-justyny-steczkowskiej-bentley-home-cinema',
    title: 'ODSŁUCH NAJNOWSZEJ PŁYTY JUSTYNY STECZKOWSKIEJ W BENTLEY HOME CINEMA',
    date: '21 STYCZNIA 2025',
    category: 'AKTUALNOŚCI',
    image: mediaUrl('/media/pages/aktualnosci/steczkowska/hero.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/steczkowska/hero.jpg'),
    excerpt: 'Cieszymy się, że Bentley Home Cinema wzbudza zainteresowanie najbardziej wymagających słuchaczy.',
    sections: [
      {
        content: 'Cieszymy się, że Bentley Home Cinema wzbudza zainteresowanie najbardziej wymagających słuchaczy. Przestrzeń naszego kina została wybrana przez Justynę Steczkowską do przedpremierowego odsłuchu jej najnowszego albumu „Witch Tarohoro".\n\nArtystka szukała miejsca, które zapewnia najlepszy dźwięk dzięki systemowi Dolby Atmos 7.1. Idealne warunki techniczne oraz atmosfera i design miejsca okazały się idealne, by zaprosić wybranych gości na wyjątkowy, wspólny odsłuch najnowszej płyty i podzielić się wrażeniami z autorką. Nasz system, składający się z 22 głośników, wydobył najbardziej subtelne detale „Witch Tarohoro", który jest monumentalnym albumem o bogatej aranżacji.\n\nPo odsłuchu wszyscy mogliśmy podzielić się wrażeniami z Panią Justyną i porozmawiać z nią o jej twórczości i inspiracjach. Gratulujemy przepięknej płyty i dziękujemy za wybór Bentley Home Cinema!',
        images: [mediaUrl('/media/pages/aktualnosci/steczkowska/img-01.jpg'), mediaUrl('/media/pages/aktualnosci/steczkowska/img-02.jpg'), mediaUrl('/media/pages/aktualnosci/steczkowska/img-03.jpg')]
      }
    ],
    tags: ['BentleyHome', 'Bentleyhomecinema', 'Cinematic', 'Luxarte', 'Prywatna Sala Kinowa']
  },
  {
    slug: 'bentley-home-cinema-premiera',
    title: 'BENTLEY HOME CINEMA – PREMIERA',
    date: '4 PAŹDZIERNIKA 2024',
    category: 'AKTUALNOŚCI',
    image: mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/hero.jpg'),
    heroImage: mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/hero.jpg'),
    excerpt: 'Cieszymy się, że możemy podzielić się z Wami projektem, nad którym pracowaliśmy przez ostatnie miesiące.',
    sections: [
      {
        content: 'Cieszymy się, że możemy podzielić się z Wami projektem, nad którym pracowaliśmy przez ostatnie miesiące. Nasz warszawski showroom poszerzył ekspozycję o unikatową przestrzeń – Bentley Home Cinema.\n\nWe wrześniu miała miejsce uroczysta premiera, podczas której prezentowaliśmy naszym gościom filmy i fragmenty koncertów w najwyższej jakości Audio-Video. Prezentacjom towarzyszyła degustacja whiskey Macallan, a o lifecooaking perfekcyjnie zadbał Witek Iwański z HUB Praga. Magiczny wieczór podkreśliła również obecność partnera Bentley Motors, dzięki któremu możemy zapewnić naszym klientom pełne doświadczenie atmosfery marki.',
        images: [mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-01.jpg'), mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-02.jpg'), mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-03.jpg')]
      },
      {
        content: 'Luxarte jako pierwszy w Polsce showroom z wyposażeniem wnętrz, przedstawia możliwości wyposażenia pomieszczeń Audio-Video najwyższej klasy.\n\nWnętrze zostało wyposażone w meble Bentley Home. Nawiązania do motoryzacji w kolekcji mebli pokazują detale, które zostały przeniesione z charakterystycznych wzorów i form, dobrze znanym fanom marki Bentley. Oryginalna atmosfera i najwyższy kunszt rzemiosła zrobi wrażenie również na osobach ceniących najwyższą jakość i ponadczasowy design. O stronę Audio-Video zadbał nasz partner, firma Cinematic, z ponad 20-letnim doświadczeniem w projektowaniu systemów AV dla przestrzeni prywatnych.',
        images: [mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-04.jpg'), mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-05.jpg'), mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-06.jpg')]
      },
      {
        content: 'Magię tego wieczoru będziemy się starać odtworzyć podczas indywidualnych prezentacji przestrzeni Bentley Home Cinema. W celu zapewnienia najwyższej jakości obsługi, wszystkie prezentacje i spotkania w naszym showroomie odbywają się wyłącznie po wcześniejszym umówieniu. Chcemy zagwarantować pełną uwagę i profesjonalne przygotowanie, dopasowane do Państwa potrzeb i oczekiwań. Zapraszamy do rezerwacji spotkania.',
        images: [mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-07.jpg'), mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-08.jpg'), mediaUrl('/media/pages/aktualnosci/bentley-cinema-premiera/img-09.jpg')]
      }
    ],
    tags: ['BentleyHome', 'Bentleyhomecinema', 'Cinematic', 'Luxarte']
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map(article => article.slug);
}
