'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

type SubmitState = 'idle' | 'success' | 'error';

export function ContactForm() {
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;

    setSubmitting(true);
    setSubmitState('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('_subject', `${siteConfig.tradingName} quote enquiry`);
    formData.set('source', window.location.href);

    try {
      const response = await fetch(siteConfig.forms.quoteEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        setSubmitState('error');
        return;
      }

      form.reset();
      setConsent(false);
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitState === 'success' && (
        <div
          role="status"
          className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          Thanks. Your enquiry has been sent and someone will get back to you.
        </div>
      )}

      {submitState === 'error' && (
        <div
          role="alert"
          className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          Sorry, the form could not be sent. Please call {siteConfig.phone.display} instead.
        </div>
      )}

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
        <Link href="/privacy" className="underline">privacy policy</Link>. Calls may be recorded.
      </p>
    </form>
  );
}
