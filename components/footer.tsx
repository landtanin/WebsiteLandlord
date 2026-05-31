import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-3">{siteConfig.tradingName}</h3>
            <p className="text-sm leading-relaxed">
              Spray foam insulation removal across Birmingham and the West Midlands. Free,
              no-obligation quote — call {siteConfig.phone.display}.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Service Areas</h3>
            <p className="text-sm leading-relaxed">
              {siteConfig.serviceAreas.join(', ')} and surrounding West Midlands.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Information</h3>
            <ul className="text-sm space-y-1">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/editorial-standards" className="hover:text-white">Editorial Standards</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-400 space-y-2">
          <p>
            {siteConfig.tradingName} is a trading name of {siteConfig.legalEntity}, registered in
            England and Wales (Company No. {siteConfig.companyNumber}). ICO Reg No:{' '}
            {siteConfig.icoRegNumber}.
          </p>
          <p>
            We may receive a referral fee when introductions lead to completed work — this does not
            affect the price you pay the specialist.
          </p>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalEntity}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
