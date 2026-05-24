type Props = {
  children: React.ReactNode;
  variant?: 'info' | 'warning';
};

export function InfoBox({ children, variant = 'info' }: Props) {
  const styles =
    variant === 'warning'
      ? 'bg-amber-50 border-amber-300 text-amber-900'
      : 'bg-blue-50 border-blue-300 text-blue-900';
  return (
    <aside className={`my-5 rounded-md border-l-4 px-4 py-3 text-sm ${styles}`}>{children}</aside>
  );
}
