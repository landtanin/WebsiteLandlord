type Props = {
  children: React.ReactNode;
};

export function TLDR({ children }: Props) {
  return (
    <aside
      className="my-8 rounded-lg border-l-4 border-brand-primary bg-blue-50 px-6 py-5"
      aria-label="In short"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary mb-2">
        In short
      </p>
      <div className="text-base text-gray-800 leading-relaxed">{children}</div>
    </aside>
  );
}
