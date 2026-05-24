type Props = {
  n: number;
  href?: string;
};

export function CitationFootnote({ n, href }: Props) {
  return (
    <sup className="text-brand-primary">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
          [{n}]
        </a>
      ) : (
        <span>[{n}]</span>
      )}
    </sup>
  );
}
