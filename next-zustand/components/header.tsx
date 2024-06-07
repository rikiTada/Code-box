export default function Header({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="container border-b border-zinc-400/10 mx-auto flex h-16 items-center justify-between">
      <div className="flex items-center text-primary gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      </div>
      {children}
    </header>
  );
}
