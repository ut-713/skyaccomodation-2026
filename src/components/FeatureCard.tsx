import { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm shadow-navy-950/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-950/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="mb-1.5 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="text-sm text-ink-600">{description}</p>
    </div>
  );
}
