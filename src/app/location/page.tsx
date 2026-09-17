import type { Metadata } from "next";
import { Building2, Plane, TrainFront } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location & How to Find Us",
  description:
    "Find Sky Accommodation in Wollongong CBD, NSW — directions, nearby transport and parking information.",
};

const directions = [
  {
    icon: Building2,
    title: "By Car",
    description:
      "Easy access from the Princes Highway and M1 Princes Motorway, with underground and on-site parking for guests.",
  },
  {
    icon: TrainFront,
    title: "By Train",
    description:
      "Wollongong Station is on the South Coast Line from Sydney — a short walk or taxi ride from the CBD.",
  },
  {
    icon: Plane,
    title: "From the Airport",
    description:
      "Around 1.5 hours' drive from Sydney Airport, or Illawarra Regional Airport is closer for domestic flights.",
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Getting Here"
        title="Location & How to Find Us"
        description="Located in the heart of Wollongong's CBD, close to the beach, shops and Princes Highway."
      />

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <iframe
              className="h-96 w-full rounded-3xl border-0 shadow-lg shadow-navy-950/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Wollongong+CBD+NSW+Australia&output=embed"
              title="Map showing Wollongong CBD, NSW"
            />
            <div className="mt-5 rounded-2xl border border-gold-400/40 bg-amber-50 p-5 text-sm text-amber-900">
              This map is centred on Wollongong CBD generally — contact us
              for the exact street address and precise directions.
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-navy-900">
              Address
            </h2>
            <p className="mb-8 text-ink-600">
              {site.addressLine}
              <br />
              Exact street address provided on booking confirmation.
            </p>

            <h2 className="mb-4 text-xl font-semibold text-navy-900">
              Getting Here
            </h2>
            <div className="flex flex-col gap-5">
              {directions.map((d) => (
                <div key={d.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                    <d.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">
                      {d.title}
                    </h3>
                    <p className="text-sm text-ink-600">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/contact" variant="navy" className="mt-8">
              Ask for Directions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
