type Props = {
  term: string;
  children: React.ReactNode;
};

export function DefinitionBox({ term, children }: Props) {
  return (
    <aside
      className="my-6 rounded-md border border-gray-200 bg-gray-50 px-4 py-3"
      aria-label={`Definition: ${term}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
        Quick definition
      </p>
      <p className="text-sm">
        <strong className="text-gray-900">{term}:</strong>{' '}
        <span className="text-gray-700">{children}</span>
      </p>
    </aside>
  );
}
