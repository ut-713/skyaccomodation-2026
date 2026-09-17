import type { Metadata } from "next";
import {
  Check,
  Coffee,
  KeyRound,
  Phone,
  ShieldCheck,
  Sparkles,
  Tv,
  WashingMachine,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Accommodation",
  description:
    "Permanent student accommodation in Wollongong from $165/week. Fully furnished rooms, all linen included, minimum 3 month lease.",
};

const inclusions = [
  { icon: Tv, label: "Fully furnished rooms with own TV and fridge" },
  { icon: Coffee, label: "Communal bathroom and kitchen, serviced daily" },
  {
    icon: ShieldCheck,
    label: "Single (1 person) and twin (2 persons) rooms, some with ensuite",
  },
  { icon: Phone, label: "Phone connection in each room" },
  { icon: Sparkles, label: "Rooms serviced fortnightly, all linen included" },
  {
    icon: KeyRound,
    label: "Lock-up cupboards in kitchen with own crockery and a kettle",
  },
  { icon: WashingMachine, label: "Laundry facilities on-site" },
];

const roomPrices = [
  { size: "Small Room", price: "$165 – $175", unit: "per week" },
  { size: "Medium Room", price: "$180 – $195", unit: "per week" },
  {
    size: "Room with Ensuite",
    price: "$210 – $260",
    unit: "per week",
    featured: true,
  },
];

export default function StudentAccommodationPage() {
  return (
    <>
      <PageHero
        eyebrow="Permanent Student Accommodation"
        title="Student Accommodation"
        description="Fully furnished, friendly and affordable — a comfortable base for study in Wollongong."
      />

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-navy-900">
                What&apos;s included
              </h2>
              <ul className="flex flex-col gap-4">
                {inclusions.map((item) => (
                  <li key={item.label} className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100">
                      <item.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="pt-1.5 text-sm text-navy-900">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border-l-4 border-gold-500 bg-sand-100 p-6 text-sm text-ink-600">
                <p className="mb-1 font-semibold text-navy-900">
                  Lease terms
                </p>
                Minimum 3 month lease and 2 weeks bond required. Rent
                includes GST. Friendly, comfortable atmosphere throughout.
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold text-navy-900">
                Prices per week (room only)
              </h2>
              <div className="flex flex-col gap-4">
                {roomPrices.map((room) => (
                  <div
                    key={room.size}
                    className={`flex items-center justify-between rounded-2xl border p-6 ${
                      room.featured
                        ? "border-2 border-gold-500 bg-white"
                        : "border-navy-900/10 bg-white"
                    }`}
                  >
                    <span className="font-semibold text-navy-900">
                      {room.size}
                    </span>
                    <span className="text-right">
                      <span className="block font-heading text-xl font-bold text-navy-900">
                        {room.price}
                      </span>
                      <span className="text-xs text-ink-600">
                        {room.unit}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-600">
                Nightly rate is <strong className="text-navy-900">$50</strong>{" "}
                per night with bathroom.
              </p>

              <div className="mt-10 rounded-2xl bg-navy-900 p-7 text-white">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Upgrade to Private Residency
                </h3>
                <p className="mb-4 text-sm text-white/75">
                  Studio Apartment for 2 people, twin share (2 x single
                  beds).
                </p>
                <ul className="mb-5 flex flex-col gap-2 text-sm text-white/85">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-gold-400" /> Ensuite
                    bathroom
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-gold-400" /> Kitchenette
                    equipped with crockery and appliances
                  </li>
                </ul>
                <p className="text-2xl font-bold text-gold-400 font-heading">
                  $420
                  <span className="ml-1 text-sm font-medium text-white/70">
                    / week
                  </span>
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Electricity and water utilities extra, $15 per week.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-sand-100 p-8 text-center sm:p-12">
            <h3 className="text-xl font-semibold text-navy-900">
              All rooms subject to availability
            </h3>
            <p className="mx-auto mt-2 max-w-md text-ink-600">
              Please email or call us to enquire about current student room
              availability.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href={`tel:${site.phoneHref}`} variant="navy">
                Call {site.phone}
              </Button>
              <Button href="/contact" variant="gold">
                Send an Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
