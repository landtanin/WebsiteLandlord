'use client';

import { useState } from 'react';

type Props = {
  onSubmit?: (data: FormData) => Promise<void> | void;
};

export function ContactForm({ onSubmit }: Props) {
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    if (onSubmit) await onSubmit(formData);
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
        {submitting ? 'Sending…' : 'Get a free quote'}
      </button>

      <p className="text-xs text-gray-500 leading-relaxed">
        By submitting, you consent to your details being used to arrange a survey or quote for
        your property. We are a trading name of Taninnovate Ltd and may receive a referral fee
        when introductions lead to completed work. See our{' '}
        <a href="/privacy" className="underline">privacy policy</a>. Calls may be recorded.
      </p>
    </form>
  );
}
