import { siteConfig } from '@/lib/site-config';

type Props = {
  variant?: 'default' | 'large';
  showHours?: boolean;
};

export function PhoneCTA({ variant = 'default', showHours = false }: Props) {
  const isLarge = variant === 'large';
  return (
    <div className="inline-flex flex-col items-start gap-1">
      <a
        href={`tel:${siteConfig.phone.tel}`}
        className={
          isLarge
            ? 'inline-flex items-center gap-3 rounded-lg bg-brand-accent px-6 py-4 text-white font-bold text-2xl sm:text-3xl hover:bg-orange-600 transition-colors shadow-lg'
            : 'inline-flex items-center gap-2 rounded-md bg-brand-accent px-4 py-2 text-white font-semibold hover:bg-orange-600 transition-colors'
        }
        aria-label={`Call ${siteConfig.phone.display}`}
      >
        <span aria-hidden>📞</span>
        <span>Call {siteConfig.phone.display}</span>
      </a>
      {showHours && <span className="text-sm text-gray-600">Open {siteConfig.hours}</span>}
    </div>
  );
}
