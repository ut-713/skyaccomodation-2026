import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "mb-12 max-w-xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span className="mb-3 block text-xs font-bold tracking-[0.18em] text-gold-500 uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl font-semibold sm:text-4xl",
          dark ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base",
            dark ? "text-white/75" : "text-ink-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
