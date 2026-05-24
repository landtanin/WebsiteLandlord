import Link from 'next/link';

type Crumb = {
  href: string;
  label: string;
};

type Props = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center gap-1">
            {idx > 0 && <span aria-hidden>›</span>}
            {idx === items.length - 1 ? (
              <span aria-current="page" className="text-gray-900">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
