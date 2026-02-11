import Image from 'next/image';
import { mediaUrl } from '@/lib/buildMode';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'About Us - LuxArte - Fashion for Home',
  description: 'LUX ARTE – THE ART OF LUXURY - Our story began 25 years ago as an original design studio, born from a passion for interior architecture and conscious design.',
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'About us' }]} />
      <section className="about-hero">
        <div className="about-hero__image">
          <Image
            src={mediaUrl('/media/pages/o-nas/showroom.jpg')}
            alt="LuxArte - Bentley Home showroom"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        <div className="about-hero__content">
          <span className="about-hero__label">ABOUT US</span>
          <h1 className="about-hero__title">LUX ARTE – THE ART OF LUXURY</h1>
          
          <div className="about-hero__text">
            <p>
              Our story began <strong>25 years ago</strong> as an original design studio, born from a passion for interior architecture and conscious design. From the very beginning, we were guided by one principle: to create spaces that respond to the real needs of our clients and remain relevant despite changing trends. It was the dialogue with investors and their expectations that charted the direction of our company&apos;s development.
            </p>
            <p>
              Over time, collaborating with renowned international brands from the interior design industry became a natural step. Years of experience and a consistent, careful selection of partners have resulted in what the company is today – a place where <strong>design meets the finest interior furnishings</strong>.
            </p>
            <p>
              The company is owned by <strong>Marek Cimke</strong>, who has been dedicated for years to ensuring that clients&apos; needs always come first. His philosophy is based on the conviction that true luxury is a combination of quality, functionality, and timeless aesthetics. That is why our portfolio includes only products that meet the highest standards of craftsmanship and comfort.
            </p>
            <p>
              We are the exclusive representative in Poland of prestigious brands such as <strong>Bentley Home</strong>, <strong>Versace Home</strong>, <strong>Trussardi Casa</strong>, <strong>Bugatti Home</strong>, and <strong>Visionnaire</strong>. Their collections represent a harmonious symbiosis of luxury, craftsmanship, innovative technologies, and design that does not succumb to passing trends. Our portfolio also includes other esteemed Italian brands: <strong>Valcucine, Aster Cucine, MissuraEmme, Scic, Poltrona Frau, and Giorgetti</strong>, as well as the pioneer of premium home appliances – <strong>Gaggenau</strong>.
            </p>
            <p>
              Six years ago, <strong>Marta</strong>, the owner&apos;s daughter, joined the company, bringing a fresh perspective, new energy, and a continuation of family values. Her presence has combined years of experience with a modern approach to design and customer service, strengthening the company&apos;s foundations and preparing it for further growth.
            </p>
            <p>
              Today, we offer not only luxury interior furnishings but also <strong>comprehensive design services at the highest level</strong>. Our mission is to create spaces that captivate with their aesthetics, ensure maximum comfort, and remain uniquely exceptional for years to come.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
