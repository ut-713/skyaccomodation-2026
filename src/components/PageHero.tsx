export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-20 text-center text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(58,143,208,0.45), transparent 55%), radial-gradient(ellipse at 90% 10%, rgba(212,160,23,0.25), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl">
        <span className="mb-3 block text-xs font-bold tracking-[0.18em] text-gold-400 uppercase">
          {eyebrow}
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-white/80">{description}</p>
        )}
      </div>
    </section>
  );
}
