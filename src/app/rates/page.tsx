import type { Metadata } from "next";
import { Car, Check, Snowflake, Users, Wifi } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Rates & Tariffs",
  description:
    "Nightly and weekly rates for Sky Accommodation, Wollongong. Double/twin rooms from $110 per night. Stay 7 nights, pay for 6.",
};

const rooms = [
  {
    title: "Double / Twin Room",
    price: "$110",
    note: "2 adults · $20 per extra person",
    featured: false,
    perks: [
      "Sleeps up to 2 adults comfortably",
      "Free WiFi & on-site parking",
      "Kitchenette & air conditioning",
    ],
  },
  {
    title: "Double / Twin Room",
    price: "$150",
    note: "Up to 4 adults",
    featured: true,
    tag: "Best for families",
    perks: [
      "Sleeps up to 4 adults",
      "Free WiFi & on-site parking",
      "Kitchenette & air conditioning",
    ],
  },
];

const tableRows = [
  ["Double / Twin", "2 adults", "$110.00 / night"],
  ["Double / Twin", "Extra person", "+ $20.00 / night"],
  ["Double / Twin", "4 adults", "$150.00 / night"],
  ["Weekly stay (any room)", "7 nights", "Pay for 6 nights"],
];

export default function RatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nightly, Weekly & Corporate"
        title="Rates & Tariffs"
        description="Simple, transparent pricing. All prices include GST where applicable."
      />

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-gold-400 to-gold-500 p-8 shadow-lg shadow-gold-500/20 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold text-navy-950">
                Stay 7 nights, pay for 6!
              </h3>
              <p className="mt-1 text-navy-950/75">
                Book a full week and your 7th night is free.
              </p>
            </div>
            <Button href="/contact" variant="navy">
              Enquire About This Offer
            </Button>
          </div>

          <div className="mb-14 grid grid-cols-1 gap-7 sm:grid-cols-2">
            {rooms.map((room) => (
              <div
                key={room.price}
                className={`relative rounded-3xl border bg-white p-9 shadow-sm ${
                  room.featured
                    ? "border-2 border-gold-500"
                    : "border-navy-900/10"
                }`}
              >
                {room.tag && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold tracking-wide text-navy-950 uppercase">
                    {room.tag}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-navy-900">
                  {room.title}
                </h3>
                <p className="mt-3.5 text-4xl font-bold text-navy-900 font-heading">
                  {room.price}
                  <span className="ml-1 text-base font-medium text-ink-600">
                    / night
                  </span>
                </p>
                <p className="mb-6 text-sm text-ink-600">{room.note}</p>
                <ul className="mb-7 flex flex-col gap-2.5">
                  {room.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2.5 text-sm text-navy-900"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={room.featured ? "gold" : "navy"}
                  block
                >
                  Book This Room
                </Button>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-semibold text-navy-900 sm:text-3xl">
            Weekday Nightly Rates
          </h2>
          <div className="mb-2 overflow-x-auto rounded-2xl border border-navy-900/10">
            <table className="w-full min-w-[480px] border-collapse bg-white">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Room Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Occupancy
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-navy-900/8 last:border-0"
                  >
                    <td className="px-6 py-4 text-sm text-ink-900">
                      {row[0]}
                    </td>
                    <td className="px-6 py-4 text-sm text-ink-900">
                      {row[1]}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-navy-900">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-600">
            Rates shown are indicative and based on our previously published
            tariffs. Please{" "}
            <a
              href="/contact"
              className="font-semibold text-blue-600 hover:underline"
            >
              contact us
            </a>{" "}
            to confirm current rates and availability before booking.
          </p>

          <div
            id="policy"
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <div className="rounded-2xl border-l-4 border-gold-500 bg-sand-100 p-7">
              <h4 className="mb-2 font-semibold text-navy-900">
                Corporate Rates
              </h4>
              <p className="text-sm text-ink-600">
                Corporate and extended-stay rates are available on enquiry —
                see our{" "}
                <a
                  href="/corporate-stays"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Corporate Stays
                </a>{" "}
                packages for mid-week rates.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-gold-500 bg-sand-100 p-7">
              <h4 className="mb-2 font-semibold text-navy-900">
                Cancellation Policy
              </h4>
              <p className="text-sm text-ink-600">
                If you cancel within 7 days of your arrival date, or do not
                show up, the first night&apos;s accommodation will be
                charged.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Car, label: "Free Parking" },
              { icon: Snowflake, label: "Air Conditioning" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-xl bg-sky-100 px-5 py-4 text-sm font-medium text-navy-900"
              >
                <f.icon className="h-5 w-5 text-blue-600" />
                {f.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy-950 to-navy-800 px-6 py-16 text-center">
        <Users className="mx-auto mb-4 h-8 w-8 text-gold-400" />
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Ready to book your stay?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/75">
          Send us your dates and we&apos;ll confirm availability and current
          rates.
        </p>
        <Button href="/contact" variant="gold" className="mt-7">
          Contact Us to Book
        </Button>
      </section>
    </>
  );
}
