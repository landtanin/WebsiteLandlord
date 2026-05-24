import Link from 'next/link';

type Props = {
  area: string;
  slug: string;
};

export function AreaCallout({ area, slug }: Props) {
  return (
    <div className="rounded-md border border-brand-primary/20 bg-blue-50 px-4 py-3 text-sm">
      <p>
        Are you in {area}? We cover this area —{' '}
        <Link href={`/areas/${slug}`} className="underline font-semibold">
          spray foam removal in {area} →
        </Link>
      </p>
    </div>
  );
}
