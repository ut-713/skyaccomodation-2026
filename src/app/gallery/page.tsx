import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Take a look around Sky Accommodation, Wollongong — rooms, facilities and the surrounding area.",
};

const gradients = [
  "from-blue-600 to-navy-950",
  "from-blue-400 to-navy-800",
  "from-gold-500 to-sky-300",
  "from-sky-300 to-blue-600",
  "from-gold-400 to-navy-800",
  "from-navy-800 to-navy-950",
];

const tiles = [
  "Double Room",
  "Twin Room",
  "Kitchenette",
  "Bathroom",
  "Exterior & Parking",
  "Wollongong Beach nearby",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Take a look around"
        title="Our Photo Gallery"
        description="A preview of our rooms and facilities — real photos coming soon."
      />

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((tile, i) => (
              <div
                key={tile}
                className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-gradient-to-br p-5 shadow-sm ${gradients[i % gradients.length]}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
                />
                <span className="relative font-semibold text-white drop-shadow">
                  {tile}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold-400/40 bg-amber-50 p-6 text-sm text-amber-900">
            These tiles are placeholder graphics while we update our photo
            gallery with real photos of the rooms, exterior and surrounding
            area.
          </div>
        </div>
      </section>
    </>
  );
}
