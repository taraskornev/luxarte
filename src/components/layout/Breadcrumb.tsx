import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span aria-hidden="true"> / </span>}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
