export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full py-24 ${className}`}>
      {children}
    </section>
  );
}