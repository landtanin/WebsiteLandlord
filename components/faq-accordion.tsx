type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type Props = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item, idx) => (
        <details key={idx} className="group py-4">
          <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-gray-900 list-none">
            <span>{item.question}</span>
            <span
              aria-hidden
              className="text-brand-primary text-xl ml-4 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
