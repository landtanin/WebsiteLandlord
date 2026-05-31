'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

type Props = {
  submitAction?: (data: FormData) => Promise<void> | void;
};

export function ContactForm({ submitAction }: Props) {
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    if (submitAction) await submitAction(formData);
    if (!submitAction) {
      window.location.href = `tel:${siteConfig.phone.tel}`;
      setSubmitting(false);
      return;
    }
    e.currentTarget.reset();
    setConsent(false);
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          suppressHydrationWarning
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          suppressHydrationWarning
        />
      </div>

      <div>
        <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
          Postcode
        </label>
        <input
          id="postcode"
          name="postcode"
          type="text"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          suppressHydrationWarning
        />
      </div>

      <div>
        <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
          Property type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white"
          suppressHydrationWarning
        >
          <option value="">— Select —</option>
          <option>Mid-terrace</option>
          <option>Semi-detached</option>
          <option>Detached</option>
          <option>Bungalow</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          What&apos;s the issue?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          suppressHydrationWarning
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1"
          suppressHydrationWarning
        />
        <label htmlFor="consent" className="text-sm text-gray-700 leading-snug">
          I consent to my details being used to arrange a survey or quote for my property.
        </label>
      </div>

      <button
        type="submit"
        disabled={!consent || submitting}
        className="w-full rounded-md bg-brand-accent px-4 py-3 text-white font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Get a free quote'}
      </button>

      <p className="text-xs text-gray-500 leading-relaxed">
        By submitting, you consent to your details being used to arrange a survey or quote for
        your property. We are a trading name of {siteConfig.legalEntity} and may receive a referral
        fee when introductions lead to completed work. See our{' '}
        <Link href="/privacy" className="underline">privacy policy</Link>. On GitHub Pages, this form
        opens the phone dialler until server-side lead capture is connected. Calls may be recorded.
      </p>
    </form>
  );
}
