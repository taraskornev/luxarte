/**
 * ============================================================================
 * PROJECT HERO COMPONENT
 * ============================================================================
 *
 * Hero section for project detail pages.
 * Features: H1 title, hero image, breadcrumb navigation.
 *
 * @component ProjectHero
 */

import Image from 'next/image';
import type { GalleryImage } from '@/data/projects-data';

export interface ProjectHeroProps {
  readonly title: string;
  readonly heroImage: GalleryImage;
}

/**
 * Generate srcset string from image srcset array
 */
function generateSrcSet(
  srcset?: readonly { src: string; width: number }[]
): string | undefined {
  if (!srcset || srcset.length === 0) return undefined;
  return srcset.map((item) => `${item.src} ${item.width}w`).join(', ');
}

/**
 * ProjectHero - Hero section for project detail
 */
export function ProjectHero({
  title,
  heroImage,
}: ProjectHeroProps): JSX.Element {
  const srcsetAttr = generateSrcSet(heroImage.srcset);

  return (
    <section className="project-hero" aria-labelledby="project-title">
      {/* Breadcrumb Navigation */}
      <nav
        className="project-hero__breadcrumb"
        aria-label="Nawigacja okruszkowa"
      >
        <ol
          className="project-hero__breadcrumb-list"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            className="project-hero__breadcrumb-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a href="/" itemProp="item">
              <span itemProp="name">LuxArte</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="project-hero__breadcrumb-separator">/</span>
          <li
            className="project-hero__breadcrumb-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a href="/projects" itemProp="item">
              <span itemProp="name">Realizacje</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="project-hero__breadcrumb-separator">/</span>
          <li
            className="project-hero__breadcrumb-item project-hero__breadcrumb-item--current"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            aria-current="page"
          >
            <span itemProp="name">{title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Hero Content */}
      <div className="project-hero__container">
        <h1 id="project-title" className="project-hero__title">
          {title}
        </h1>

        <div className="project-hero__image-wrapper">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            className="project-hero__image"
            width={heroImage.width}
            height={heroImage.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
