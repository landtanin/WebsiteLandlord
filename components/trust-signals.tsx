type Props = {
  items?: readonly string[];
};

const DEFAULT_ITEMS = [
  'Birmingham & West Midlands',
  'Free, no-obligation quote',
  'Plain-English advice',
  'RICS and PAS 2035 aware',
] as const;

export function TrustSignals({ items = DEFAULT_ITEMS }: Props) {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span aria-hidden className="text-green-600 font-bold">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
