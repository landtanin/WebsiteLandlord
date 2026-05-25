'use server';

import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

export async function submitEnquiry(formData: FormData) {
  const entry = {
    createdAt: new Date().toISOString(),
    name: String(formData.get('name') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    postcode: String(formData.get('postcode') ?? ''),
    propertyType: String(formData.get('propertyType') ?? ''),
    message: String(formData.get('message') ?? ''),
    consent: formData.get('consent') === 'on',
  };

  const dir = path.join(process.cwd(), 'data');
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, 'enquiries.jsonl'), `${JSON.stringify(entry)}\n`, 'utf8');
}
