import type { Metadata } from "next";
import { Briefcase, Car, Check, Mail, Phone, Tv, Utensils } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Stays",
  description:
    "Affordable corporate accommodation in Wollongong CBD from $44/night. Self-contained rooms with ensuite, kitchenette and underground parking.",
};

const packages = [
  {
    name: "Package 1",
    price: "$85",
    unit: "per night",
    description:
      "Self-contained double room, with double bed, kitchenette, ensuite and television.",
  },
  {
    name: "Package 2",
    price: "$510",
    unit: "per week",
    description:
      "Self-contained double room with double bed, kitchenette, ensuite and television.",
    featured: true,
  },
  {
    name: "Package 3",
    price: "$44",
    unit: "per night",
    description:
      "Budget room in our student block. Single room with single bed, ensuite and TV, share communal kitchen.",
  },
];

export default function CorporateStaysPage() {
  return (
    <>
      <PageHero
        eyebrow="For the Regular Traveller"
        title="Corporate Stays"
        description="Affordable, quality accommodation for corporate travellers on the South Coast — under new management."
      />

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Briefcase className="mx-auto mb-4 h-8 w-8 text-gold-500" />
            <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
              Quality accommodation, without the corporate price tag
            </h2>
            <p className="mt-4 text-ink-600">
              Sky Accommodation is located in the heart of Wollongong&apos;s
              CBD — minutes&apos; walk from top retail outlets, the business
              district, and some of the best restaurants on the South Coast
              of NSW. With underground car parking and friendly staff, it&apos;s
              everything a weary corporate traveller needs after a long day.
            </p>
          </div>

          <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { icon: Tv, label: "Ensuite, TV & kitchenette" },
              { icon: Car, label: "Underground car parking" },
              { icon: Utensils, label: "Minutes from CBD dining" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-xl bg-sky-100 px-5 py-4 text-sm font-medium text-navy-900"
              >
                <f.icon className="h-5 w-5 shrink-0 text-blue-600" />
                {f.label}
              </div>
            ))}
          </div>

          <h2 className="mb-2 text-center text-2xl font-semibold text-navy-900 sm:text-3xl">
            Mid-week stay packages
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-center text-ink-600">
            A number of packages are available for mid-week corporate stays.
          </p>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm ${
                  pkg.featured
                    ? "border-2 border-gold-500"
                    : "border-navy-900/10"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-7 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold tracking-wide text-navy-950 uppercase">
                    Best value
                  </span>
                )}
                <span className="text-xs font-bold tracking-wide text-blue-600 uppercase">
                  {pkg.name}
                </span>
                <p className="mt-3 font-heading text-3xl font-bold text-navy-900">
                  {pkg.price}
                  <span className="ml-1 text-sm font-medium text-ink-600">
                    {pkg.unit}
                  </span>
                </p>
                <p className="mt-3 flex-1 text-sm text-ink-600">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border-l-4 border-gold-500 bg-sand-100 p-6 text-sm text-ink-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            We also offer discounted stays for long-term visitors, as well
            as weekend packages for sightseeing travellers.
          </div>

          <div className="mt-16 rounded-3xl bg-navy-900 p-8 text-center text-white sm:p-12">
            <h3 className="text-xl font-semibold text-white">
              Interested in a corporate package?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-white/70">
              Call us or drop us an email to check availability and lock in
              your rate.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href={`tel:${site.phoneHref}`} variant="gold">
                <Phone className="h-4 w-4" /> {site.phone}
              </Button>
              <Button href={`mailto:${site.email}`} variant="outline">
                <Mail className="h-4 w-4" /> {site.email}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
