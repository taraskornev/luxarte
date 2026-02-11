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

/* ── Locale helpers for EN pages ─────────────────────────────── */

const categoryMap: Record<string, string> = {
  'AKTUALNOŚCI': 'NEWS',
  'NOWA KOLEKCJA': 'NEW COLLECTION',
};

const monthMap: Record<string, string> = {
  'STYCZNIA': 'JANUARY', 'LUTEGO': 'FEBRUARY', 'MARCA': 'MARCH',
  'KWIETNIA': 'APRIL', 'MAJA': 'MAY', 'CZERWCA': 'JUNE',
  'LIPCA': 'JULY', 'SIERPNIA': 'AUGUST', 'WRZEŚNIA': 'SEPTEMBER',
  'PAŹDZIERNIKA': 'OCTOBER', 'LISTOPADA': 'NOVEMBER', 'GRUDNIA': 'DECEMBER',
};

/** English titles and excerpts for the listing page */
const articleTitleEn: Record<string, string> = {
  'venicem-nowoczesne-oblicze-oswietlenia-z-murano': 'VENICEM – THE MODERN FACE OF MURANO LIGHTING',
  'exteta-kolekcja-loro-piana-ponadczasowe-meble-ogrodowe': 'EXTETA – LORO PIANA COLLECTION – TIMELESS OUTDOOR FURNITURE',
  'archigraphica-nowoczesna-kuchnia-bliska-naturze': 'ARCHIGRAPHICA – A MODERN KITCHEN CLOSE TO NATURE',
  'trussardi-casa-nowa-kolekcja-2025': 'TRUSSARDI CASA – NEW 2025 COLLECTION',
  'bentley-home-nowa-kolekcja-2025': 'BENTLEY HOME – NEW 2025 COLLECTION',
  'zapraszamy-na-milan-design-week-2025': 'JOIN US AT MILAN DESIGN WEEK 2025!',
  'moda-w-designie-kolekcji-mebli-versace-home': 'FASHION IN DESIGN: VERSACE HOME FURNITURE COLLECTION',
  'maison-objet-2025-kolekcja-bugatti-home': 'MAISON & OBJET 2025 – BUGATTI HOME COLLECTION',
  'odsluch-najnowszej-plyty-justyny-steczkowskiej-bentley-home-cinema': 'LISTENING SESSION AT BENTLEY HOME CINEMA',
  'bentley-home-cinema-premiera': 'BENTLEY HOME CINEMA – PREMIERE',
};

const articleExcerptEn: Record<string, string> = {
  'venicem-nowoczesne-oblicze-oswietlenia-z-murano': 'Venicem is more than a brand – it is the contemporary face of Venetian glass, where every lamp creates not just light but atmosphere.',
  'exteta-kolekcja-loro-piana-ponadczasowe-meble-ogrodowe': 'The Delight Chairs collection is the fruit of collaboration between two Italian brands: Exteta, the master of outdoor furniture, and Loro Piana Interiors.',
  'archigraphica-nowoczesna-kuchnia-bliska-naturze': 'Valcucine\'s modern kitchen design has been inspiring and setting trends in the exclusive kitchen market for years.',
  'trussardi-casa-nowa-kolekcja-2025': 'Trussardi has consistently continued the idea of "quiet luxury", where design is an experience and style is an attitude.',
  'bentley-home-nowa-kolekcja-2025': 'The latest collection was presented at the brand\'s Atelier on Corso Venezia.',
  'zapraszamy-na-milan-design-week-2025': 'As every year, we can\'t wait for the greatest design celebration.',
  'moda-w-designie-kolekcji-mebli-versace-home': 'Versace has always been known for strong motifs drawn from mythology, antiquity, and art history.',
  'maison-objet-2025-kolekcja-bugatti-home': 'As part of Maison&Objet In The City, the Bugatti Home collection was presented in Paris for the first time.',
  'odsluch-najnowszej-plyty-justyny-steczkowskiej-bentley-home-cinema': 'We are delighted that Bentley Home Cinema attracts the most discerning listeners.',
  'bentley-home-cinema-premiera': 'We are excited to share a project we have been working on for months.',
};

/** English section content for each article */
const articleSectionsEn: Record<string, { heading?: string; content: string }[]> = {
  'venicem-nowoczesne-oblicze-oswietlenia-z-murano': [
    {
      heading: 'A Legacy with a Future',
      content: 'Venicem is more than a brand – it is the contemporary face of Venetian glass, where every lamp creates not just light but atmosphere. Geometry, material, brilliance – everything comes together in a timeless language of form. In this way, Venicem redefines how we think about glass craftsmanship, combining the rich heritage of Murano tradition with contemporary design.',
    },
    {
      heading: 'Craftsmanship Meets Design – Materials and Processes',
      content: 'The key to Venicem\'s uniqueness lies in the subtle balance between handcraft and the precision of modern form. Traditional Murano glass, shaped "by eye" using ancient techniques, combines with metal of a distinctly modern character in a wide palette of finishes. Each element is created in close collaboration with artisans who give every fixture an individual character. The result is lamps that not only illuminate a space but define it.\n\nThe process of creating Venicem lighting begins with precisely selected materials – Murano glass and high-grade metals, primarily brass. The glass is hand-formed using the traditional "a soffio" technique – hot-blowing that requires not only physical strength but years of experience working with molten material. At the same time, the metal undergoes mechanical and manual processing: cutting, bending, grinding, and then finishing through oxidation, brushing or polishing, depending on the design. Every detail – from the curvature of the glass to the texture of the metal surface – passes through human hands, giving each piece a unique character and an unrepeatable rhythm of form.',
    },
    {
      heading: 'A Bridge Between Murano Tradition and Modern Design',
      content: 'Venicem, founded in 2013 by Massimo Tonetto and Melissa Lunardi, is a brand born from a deep connection to the craft of Murano – the cradle of Italian glass – and a passionate pursuit of contemporary elegance. Its headquarters in Treviso, close to Venice and the island of Murano, provides ideal conditions for drawing on the masterful glass-forming techniques while bringing them into a new dimension through a modern design perspective. Venicem\'s designers draw from the historical heritage not only forms but also the emotions embedded in glass. Their aim is to create objects that are timeless – rooted in the past yet ahead of their time.',
    },
    {
      heading: 'Venicem Collection Available at LuxArte',
      content: 'We are delighted to share the offering of the finest Italian brands with you. Please contact us at info@luxarte.pl or arrange a meeting at our showroom if you would like to learn more about the Venicem brand.',
    },
  ],
  'exteta-kolekcja-loro-piana-ponadczasowe-meble-ogrodowe': [
    {
      heading: 'A Meeting of Two Icons of Luxury',
      content: 'The Delight Chairs collection is the fruit of collaboration between two Italian brands: Exteta, the master of outdoor furniture, and Loro Piana Interiors, specialising in exclusive fabrics. The project was born from the need to reinterpret the classic director\'s chair – a symbol of carefree relaxation – in a luxurious, elegant and functional version. Together with designer Paola Navone, the brands created a collection that combines craftsmanship tradition with a modern lifestyle.',
    },
    {
      heading: 'Exteta\'s Philosophy of Hybrid Spaces',
      content: 'Exteta has long promoted the idea of boundless spaces, where interior flows seamlessly into exterior. The Delight Chairs collection perfectly embodies this philosophy – the furniture was designed for use on yachts, terraces and in elegant interiors alike. Thanks to weather-resistant materials such as Sapelli mahogany wood and Loro Piana fabrics with Storm System\u00AE technology, the chairs are durable, stylish and versatile.',
    },
    {
      heading: 'Design Inspired by Nature and Fashion',
      content: 'The success of the collection allowed for its expansion, and each element – the folding chair, armchair and stool – is handcrafted with meticulous attention to detail. The summer version delights with striped and solid-colour fabrics, while the winter St. Moritz edition offers Cashfur cashmere covers that add softness and warmth. The inspiration came not only from classic forms but also from the world of yachts and mountain resorts, giving the collection an exceptional character.',
    },
    {
      heading: 'Craftsmanship and Sustainable Luxury',
      content: 'Both Exteta and Loro Piana Interiors place emphasis on ethical sourcing of materials and environmental care. The products are created in the spirit of "Made in Italy", using local resources and traditional techniques. Delight Chairs are not just furniture – they are a manifesto of quality, style and responsibility that redefines the concept of luxury in outdoor spaces.',
    },
    {
      heading: 'Exteta Collection Available at LuxArte',
      content: 'We are delighted to share the offering of the finest Italian brands with you. Please contact us at info@luxarte.pl or arrange a meeting at our showroom if you would like to learn more about the collection.',
    },
  ],
  'archigraphica-nowoczesna-kuchnia-bliska-naturze': [
    {
      heading: 'The Essence of Wood',
      content: 'Valcucine\'s modern kitchen design has been inspiring and setting trends in the exclusive kitchen market for years. The latest capsule collection, Archigraphica, is a proposition that bridges the modern and the primal. The kitchen base, finished in natural walnut, is equipped with solid handles that trace the perspective lines of the form. The elongated handles create an individual pattern for each kitchen, serving as an external expression of the functional layout tailored to the individual project. Natural walnut, with its pleasant texture and warm colour, introduces a cosy atmosphere into the interior. Combined with minimalist glass fronts, it adds lightness and a contemporary character to the kitchen.',
    },
    {
      heading: 'A Combination of Materials',
      content: 'A constant element of the Archigraphica kitchen is the wooden profile, which – depending on the functional layout – determines the kitchen\'s visual pattern. Fronts can be finished in wood or glass. The contrast between these materials produces a modern kitchen with a warm, cosy character. The third element is the countertop, encasing the lower cabinets, which can be made from marble, sandstone or finished in lacquer.\n\nThe spectrum of possibilities allows the kitchen to integrate with the character of the interior and express individual needs.',
    },
    {
      heading: 'A Tradition of Innovation',
      content: 'Gabriele Centazzo, the brand\'s founder and lead designer, earned recognition from the outset thanks to his unconventional approach and innovative solutions.\n\n"I have always worked with pure forms; in the case of Archigraphica I wanted to add a graphic design made from natural matter to the surface of the furniture. In a society that increasingly detaches itself from nature and adapts to synthetic materials, I felt it was important to propose wood not merely as a surface veneer, but as mass, as natural matter, to satisfy tactile sensations and restore the ancestral memory that made wood a friendly material for humanity for thousands of years. The graphic design, which can be freely composed, offers designers exceptional freedom of expression, allowing them to design the materiality and architecture of their kitchen facade."\n\nGabriele Centazzo',
    },
    {
      heading: 'Valcucine Exclusively at LuxArte',
      content: 'We are proud to be the sole representative in Poland offering the luxury kitchens of the Valcucine brand. The exhibition is located in our Warsaw showroom at Plac Pi\u0142sudskiego 9. Our team will advise you in choosing the most optimal model for your interior.\n\nPlease contact us at: warszawa@luxarte.pl',
    },
  ],
  'trussardi-casa-nowa-kolekcja-2025': [
    {
      heading: 'The World of Trussardi',
      content: 'Trussardi has consistently continued the idea of "quiet luxury", where design is an experience, style is an attitude, and home is a place where one can intimately express oneself. During Milan Design Week, we had the opportunity to see how the world of fashion influences furniture design, as the new collection was presented at the Trussardi headquarters, Miroglio, a Milanese palazzo on Via Burlamacchi 4.\n\nDesign, born in fashion, transcends its boundaries and permeates interiors. Trussardi pioneered the interpretation of luxury in a way far from ostentation, going beyond conventional patterns to make it more inclusive and conscious; luxury based on quality, authenticity and awareness.\n\nModern design demands maximum precision and the finest quality materials. The furniture is accompanied by a collection of accessories that bring life to the interior while adding an intimate character.',
    },
  ],
  'bentley-home-nowa-kolekcja-2025': [
    {
      heading: 'Premiere of the New Bentley Home Collection at Milan Design Week 2025',
      content: 'The latest collection was presented at the brand\'s Atelier on Corso Venezia, whose patio set the mood inspired by the atmosphere of an English garden through an abundance of lush vegetation in its natural forms and colours, providing an extraordinary sensory experience. Among the greenery, in a breathtaking setting, the outdoor furniture and accessories found their natural home.',
    },
    {
      heading: 'Bespoke Luxury',
      content: 'The new collection continues the established design direction of Bentley Home through an elevated, innovative approach to the material palette. This year\'s collection centres around the brand\'s DNA, which is characteristic of car interiors. This naturally refers to wood, whose veneers have been expanded with matte finishes with open pores, offering a new level of sensory depth.\n\nThe stone palette has also been enriched with this year\'s selection: Verde Belvedere marble – a striking green stone with earthy tones and exquisite details that strengthens surfaces with its natural elegance and depth. Another novelty is brushed Ivory Onyx, adding a refined interplay of texture and light.\n\nBentley Home elevates the experience of private living spaces, offering unparalleled craftsmanship and the brand\'s design ethos. Every element is fully configurable, raising the level of individuality. This level of personalisation allows for a carefully curated selection of exquisite materials, designed for the most exclusive interiors.',
    },
  ],
  'zapraszamy-na-milan-design-week-2025': [
    {
      heading: 'Join Us at Milan Design Week 2025',
      content: 'As every year, we can\'t wait for the greatest design celebration. The Salone del Mobile fair is accompanied by a week of intensive events throughout Milan. Exhibitions, new launches, evening banquets – all of this makes anyone who personally experiences this extraordinary atmosphere understand why the Italians lead the way and set global standards of luxury and design.\n\nWe invite you to arrange a meeting in Milan during the fair, particularly at the stands of the leading brands from our portfolio, which can be seen on the map below.\n\nPlease send a message to: info@luxarte.pl',
    },
  ],
  'moda-w-designie-kolekcji-mebli-versace-home': [
    {
      heading: 'The Motifs of the Versace Home Furniture Collection',
      content: 'Versace has always been known for its strong motifs, drawn by its creator, Gianni Versace, from the worlds of mythology, antiquity and art history. Donatella Versace, who was personally involved in creating the Home collection, made available a range of motifs characteristic of the Italian fashion house, so that enthusiasts could find them in the details of the furniture as well. Fans of the Versace fashion house undoubtedly recognise the inspirations that guided the designers in creating the furniture collection, and we would like to present the most important of them to you.',
    },
    {
      heading: 'Venus Armchair',
      content: 'The Venus Armchair is an exceptional example in the Versace furniture collection, as the inspiration for its creation was an entire styling and the woman as a muse in herself. The black dress, whose shape was transferred into the design line of the armchair, was designed by Gianni Versace with Naomi Campbell in mind – who is hard not to recognise as a contemporary Venus, goddess of the runway and an icon of femininity. The asymmetric form with rounded shapes rests on a slender base that reminds us of a high heel. Added to this is a golden zipper detail at the back of the backrest, making the piece of furniture evoke a true evening gown.',
    },
    {
      heading: 'Biker Jacket and the Stiletto Armchair',
      content: 'The distinctive backrest of Stiletto sofas and armchairs was inspired by the evergreen jacket of the fashion world. The biker jacket – a black leather jacket with a rock character – is why, in our opinion, the Stiletto collection fully reveals its DNA when finished in black leather. The characteristic collar of the jacket served as the foundational design line for the entire furniture range in the Versace Home collection.',
    },
    {
      heading: 'La Medusa',
      content: 'The brand\'s logo, the most recognisable symbol of the Versace fashion house. Medusa, the mythical primal goddess, at whose sight everything living turned to stone. It was precisely this effect of astonishment that guided Gianni Versace, who wanted to capture the gaze of everyone who looked at a woman wearing his clothes. The expressiveness of the fashion collection is also visible in the Home collection. Versace Home furniture certainly will not leave anyone indifferent.',
    },
    {
      heading: 'La Greca',
      content: 'The meander, a characteristic decorative motif from antiquity, was adopted by Gianni Versace from his native Sicily, where he grew up surrounded by the omnipresent traces of ancient culture. Particularly visible in handbag hardware, it has also been transferred to the metal fittings in the latest furniture collection.',
    },
    {
      heading: 'Barocco',
      content: 'The richest period in art history, full of splendour, focused on the senses and emotions, the Baroque era inevitably left its mark on Gianni Versace, who sought to liberate feminine beauty and evoke unbridled admiration. The Barocco ornament, whose name is a tribute to the epoch, is the flagship fabric motif of the Versace brand. Naturally, it could not be absent from the Home collection, where it appears across the full colour palette – from the characteristic gold and black to monochromatic jacquards.',
    },
    {
      heading: 'V-Logo',
      content: 'Versace\'s characteristic quilting on handbags is always accompanied by a decorative metallic V-logo monogram. This combination has been transferred to the V-marble collection. The dining table and coffee tables with marble tops feature a quilted base crowned with the characteristic monogram.\n\nThe heritage of the Versace fashion house and its translation into the world of design is a continuation of the path charted by Gianni Versace. The characteristic motifs maintain continuity and coherence of a design that has intrigued millions over the years. The Versace Home collection offers the chance to create an extraordinary, original interior that will pulse with the Italian way of life.',
    },
  ],
  'maison-objet-2025-kolekcja-bugatti-home': [
    {
      content: 'As part of Maison&Objet In The City, the Bugatti Home collection was presented in Paris for the first time, in the exclusive showroom space of Luxury Living on the legendary Avenue George V.\n\nOn the day of the Parisian premiere, guests arriving at the three-level exhibition were greeted by the presence of a one-of-a-kind Bugatti car, the legendary La Voiture Noire. This iconic masterpiece, prized for its unparalleled design and engineering, is the embodiment of Bugatti\'s commitment to pushing boundaries and creating timeless works of art.',
    },
    {
      content: 'During the design celebration in Paris, iconic elements of the furniture collection were presented, such as the TYPE_3 sofa, TYPE_1 sofa, TYPE_5 chair, TYPE_4 table and TYPE_9 mirror, which reflect Bugatti\'s pursuit of innovation.\n\nBugatti Home, a true testament to the rich heritage of the Bugatti brand, reinterprets the values and vision of its founder, Ettore Bugatti, in its new Parisian home. As a tribute to this event, guests were also able to discover a rare Bugatti Baby II – a 75% scale replica of the iconic Type 35 model, Ettore\'s creation and the most successful racing car in history – in collaboration with Hedley Studios. This collector\'s item, produced in only 500 units worldwide, commemorates the centenary of the legendary Type 35 model and its legacy for the brand, one hundred years later. The presence of this masterpiece underscores Bugatti\'s enduring heritage and its influence across generations.',
    },
    {
      content: 'The collection combines natural and technologically advanced materials, such as smooth aluminium and open-pore oak, highlighting the craftsmanship that is an integral part of Bugatti Home\'s identity. The narrative is enriched by new lighting solutions, such as the TYPE_13 lamp collection, and expressive elements like the TYPE_6 credenza and the TYPE_10 coffee table.\n\nThe Paris exhibition not only celebrates Bugatti\'s heritage but also opens a new chapter in the company\'s history. During its Parisian debut, Bugatti Home invites guests into a world where automotive performance and luxury design converge. The next presentation of new collection pieces awaits us in Milan at Milano Design Week 2025. We simply cannot wait!',
    },
  ],
  'odsluch-najnowszej-plyty-justyny-steczkowskiej-bentley-home-cinema': [
    {
      content: 'We are delighted that Bentley Home Cinema attracts the most discerning listeners. Our cinema space was chosen by Justyna Steczkowska for the pre-release listening session of her latest album "Witch Tarohoro".\n\nThe artist was looking for a venue that ensures the best sound thanks to the Dolby Atmos 7.1 system. The ideal technical conditions along with the atmosphere and design of the space proved perfect for inviting selected guests to an exclusive, shared listening of the latest album and sharing impressions with the author. Our system, consisting of 22 speakers, brought out the most subtle details of "Witch Tarohoro", a monumental album with rich arrangements.\n\nAfter the listening session, we all had the opportunity to share our impressions with Ms Justyna and talk with her about her work and inspirations. Congratulations on a beautiful album and thank you for choosing Bentley Home Cinema!',
    },
  ],
  'bentley-home-cinema-premiera': [
    {
      content: 'We are excited to share a project we have been working on for months. Our Warsaw showroom has expanded its exhibition with a unique space – Bentley Home Cinema.\n\nIn September, a grand premiere took place, during which we presented our guests with films and concert excerpts in the highest audio-video quality. The presentations were accompanied by a Macallan whisky tasting, and Witek Iwa\u0144ski from HUB Praga took perfect care of the live cooking. The magical evening was further enhanced by the presence of a Bentley Motors partner, thanks to whom we can offer our clients the full brand experience.',
    },
    {
      content: 'LuxArte, as the first showroom in Poland dedicated to interior furnishings, showcases the possibilities of equipping audio-video rooms at the highest level.\n\nThe interior has been furnished with Bentley Home furniture. The automotive references in the furniture collection reveal details transferred from the characteristic patterns and forms well known to fans of the Bentley brand. The original atmosphere and the highest craftsmanship will also impress those who appreciate the finest quality and timeless design. The audio-video side was handled by our partner, Cinematic, with over 20 years of experience in designing AV systems for private spaces.',
    },
    {
      content: 'We will endeavour to recreate the magic of that evening during individual presentations of the Bentley Home Cinema space. To ensure the highest quality of service, all presentations and meetings at our showroom take place exclusively by prior appointment. We want to guarantee full attention and professional preparation, tailored to your needs and expectations. We invite you to book a meeting.',
    },
  ],
};

/** Translate article metadata (category, date, title, excerpt) and sections to English */
export function localizeArticle(article: Article, locale: 'pl' | 'en'): Article {
  if (locale === 'pl') return article;
  const enSections = articleSectionsEn[article.slug];
  return {
    ...article,
    title: articleTitleEn[article.slug] ?? article.title,
    excerpt: articleExcerptEn[article.slug] ?? article.excerpt,
    category: categoryMap[article.category] ?? article.category,
    date: Object.entries(monthMap).reduce(
      (d, [pl, en]) => d.replace(pl, en), article.date
    ),
    sections: enSections
      ? article.sections.map((section, i) => ({
          ...section,
          heading: enSections[i]?.heading ?? section.heading,
          content: enSections[i]?.content ?? section.content,
        }))
      : article.sections,
  };
}
