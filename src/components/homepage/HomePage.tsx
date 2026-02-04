/**
 * ============================================================================
 * HOMEPAGE TEMPLATE
 * ============================================================================
 * 
 * Premium editorial landing page for LuxArte.
 * Assembles all homepage section components with proper data.
 * 
 * SEO: Exactly one H1, semantic HTML, preloaded hero image.
 * 
 * @version 1.0.0
 */

import React from 'react';

// Section Components
import {
  Hero,
  BrandStrip,
  CategoryGate,
  InteriorDesignBlock,
  FeaturedProjects,
  OutletHighlight,
  ShowroomContact,
} from './index';

// Data & Config
import {
  heroImage,
  brandLogos,
  categoryImages,
  interiorDesignImages,
  featuredProjects,
  showroomImage,
} from '../../config/images';

import { contactInfo, homepageMeta } from '../../config/seo';

/**
 * Homepage Template Component
 * 
 * Renders the complete homepage with all 7 sections.
 */
export const HomePage: React.FC = () => {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO — Authority + Positioning
          ============================================================ */}
      <Hero
        headline="Luksusowe Meble Włoskich Marek"
        subheadline="Ekskluzywne meble, kuchnie i garderoby najlepszych światowych marek. Kompleksowe projektowanie wnętrz i profesjonalne doradztwo."
        primaryCta={{
          label: 'Projektowanie Wnętrz',
          href: '/projektowanie-wnetrz',
        }}
        secondaryCta={{
          label: 'Nasze Marki',
          href: '/marki',
        }}
        image={heroImage}
        preload={true}
      />

      {/* ============================================================
          SECTION 2: BRAND STRIP — Premium Brands
          ============================================================ */}
      <BrandStrip
        title="Nasze Marki"
        brands={brandLogos}
        basePath="/marki"
      />

      {/* ============================================================
          SECTION 3: CATEGORY GATE — Featured Categories
          ============================================================ */}
      <CategoryGate
        title="Odkryj nasze kolekcje"
        subtitle="Ekskluzywne meble i wyposażenie wnętrz od najlepszych włoskich producentów"
        categories={categoryImages}
      />

      {/* ============================================================
          SECTION 4: INTERIOR DESIGN SERVICE BLOCK
          ============================================================ */}
      <InteriorDesignBlock
        title="Design"
        headline="Projektowanie Wnętrz"
        description="Firma LuxArte rozpoczęła swoją działalność jako studio projektowe. Obecnie jest to miejsce, w którym kompleksowo kreujemy luksusowe wnętrza dla najbardziej wymagających klientów."
        deliverables={[
          'Konsultacje i doradztwo projektowe',
          'Koncepcja przestrzenna i moodboard',
          'Projekt wykonawczy z wizualizacjami 3D',
          'Dobór materiałów i wykończeń',
          'Koordynacja i nadzór nad realizacją',
          'Kompleksowe wyposażenie wnętrz',
        ]}
        cta={{
          label: 'Dowiedz się więcej',
          href: '/projektowanie-wnetrz',
        }}
        image={interiorDesignImages.project}
        imagePosition="left"
      />

      {/* ============================================================
          SECTION 5: FEATURED PROJECTS PREVIEW
          ============================================================ */}
      <FeaturedProjects
        title="Nasze Realizacje"
        subtitle="Wybrane projekty wnętrz zrealizowane przez zespół LuxArte"
        projects={featuredProjects}
        cta={{
          label: 'Zobacz wszystkie realizacje',
          href: '/realizacje',
        }}
      />

      {/* ============================================================
          SECTION 6: OUTLET HIGHLIGHT
          ============================================================ */}
      <OutletHighlight
        label="Outlet"
        headline="Meble dostępne od ręki"
        description="Zobacz meble najlepszych marek dostępne od ręki w showroom'ach LuxArte! Ceny obniżone nawet do -60%. Zapytaj o cenę i umów dogodny termin dostawy!"
        highlight="Rabaty do -60%"
        cta={{
          label: 'Zobacz Outlet',
          href: '/outlet-luxarte',
        }}
      />

      {/* ============================================================
          SECTION 7: SHOWROOM / CONTACT BLOCK
          ============================================================ */}
      <ShowroomContact
        title="Odwiedź nas"
        subtitle="Zapraszamy do naszych showroom'ów"
        image={showroomImage}
        locations={[
          {
            name: contactInfo.warszawa.name,
            location: contactInfo.warszawa.location,
            street: contactInfo.warszawa.street,
            city: contactInfo.warszawa.city,
            phone: contactInfo.warszawa.phone,
            email: contactInfo.warszawa.email,
            mapUrl: contactInfo.warszawa.mapUrl,
          },
          {
            name: contactInfo.wroclaw.name,
            street: contactInfo.wroclaw.street,
            city: contactInfo.wroclaw.city,
            phone: contactInfo.wroclaw.phone,
            email: contactInfo.wroclaw.email,
            mapUrl: contactInfo.wroclaw.mapUrl,
          },
        ]}
        cta={{
          label: 'Kontakt',
          href: '/showroom',
        }}
      />
    </>
  );
};

/**
 * Homepage metadata for document head
 */
export const homePageMeta = homepageMeta;

export default HomePage;
