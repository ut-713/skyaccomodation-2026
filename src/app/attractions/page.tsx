import type { Metadata } from "next";
import {
  Building2,
  Car,
  Flower2,
  Landmark,
  Mountain,
  ShoppingBag,
  Trees,
  Users,
  Waves,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Local Attractions",
  description:
    "Things to see and do near Sky Accommodation in Wollongong: beaches, the lighthouse, Sea Cliff Bridge, the Illawarra escarpment and more.",
};

const attractions = [
  {
    icon: Waves,
    badge: "Beach",
    title: "North & South Wollongong Beach",
    description:
      "Patrolled swimming beaches with a scenic harbour, historic breakwater and the iconic Wollongong Head Lighthouse.",
  },
  {
    icon: Landmark,
    badge: "Landmark",
    title: "Wollongong Head Lighthouse",
    description:
      "A postcard view of the coastline — a short stroll from the harbour, popular with walkers and photographers.",
  },
  {
    icon: Car,
    badge: "Scenic Drive",
    title: "Sea Cliff Bridge & Grand Pacific Drive",
    description:
      "One of the most scenic coastal drives in NSW, with the bridge curving out over the ocean north of the city.",
  },
  {
    icon: Mountain,
    badge: "Nature",
    title: "Illawarra Escarpment",
    description:
      "Lookouts including Mount Keira and Sublime Point offer sweeping views across Wollongong and the coastline.",
  },
  {
    icon: Flower2,
    badge: "Culture",
    title: "Nan Tien Temple",
    description:
      "The largest Buddhist temple in the Southern Hemisphere, with gardens, a museum and a peaceful atmosphere.",
  },
  {
    icon: ShoppingBag,
    badge: "Shopping & Dining",
    title: "Wollongong CBD & Crown Street Mall",
    description:
      "Cafes, restaurants and shops in a compact, walkable city centre a few minutes from your room.",
  },
  {
    icon: Trees,
    badge: "Outdoors",
    title: "Wollongong Botanic Garden",
    description:
      "Landscaped gardens and open lawns, ideal for a relaxed walk or picnic away from the coast.",
  },
  {
    icon: Users,
    badge: "Family",
    title: "WIN Entertainment Centre & Stadiums",
    description:
      "Home to concerts, events and local sporting fixtures throughout the year.",
  },
  {
    icon: Building2,
    badge: "Day Trip",
    title: "Royal National Park",
    description:
      "Australia's oldest national park is an easy drive north, with coastal walks and lookouts.",
  },
];

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Around Wollongong"
        title="Local Area Attractions"
        description="Beaches, escarpment walks and a compact CBD — all within easy reach of Sky Accommodation."
      />

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((a) => (
              <div
                key={a.title}
                className="flex flex-col rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm shadow-navy-950/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                  <a.icon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="mb-3 inline-block w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-bold tracking-wide text-blue-600 uppercase">
                  {a.badge}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-navy-900">
                  {a.title}
                </h3>
                <p className="text-sm text-ink-600">{a.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold-400/40 bg-amber-50 p-6 text-sm text-amber-900">
            Distances and travel times will vary slightly depending on the
            exact room you&apos;re staying in — ask our team for walking
            directions when you check in.
          </div>
        </div>
      </section>
    </>
  );
}
