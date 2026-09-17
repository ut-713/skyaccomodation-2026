import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  GraduationCap,
  Home as HomeIcon,
  MapPin,
  Snowflake,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { site } from "@/lib/site";

const features = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description:
      "Complimentary high-speed WiFi in every room, throughout your stay.",
  },
  {
    icon: Car,
    title: "On-Site Parking",
    description:
      "Underground and on-site parking so you can leave the car and explore.",
  },
  {
    icon: Snowflake,
    title: "Self-Contained Rooms",
    description:
      "Kitchenette, ensuite, air conditioning and a television in every room.",
  },
  {
    icon: MapPin,
    title: "Heart of the CBD",
    description:
      "Minutes' walk from Wollongong's shops, restaurants and business district.",
  },
];

const stayTypes = [
  {
    icon: HomeIcon,
    title: "Nightly & Weekly Stays",
    description:
      "Double & twin rooms from $110/night, with a free night when you stay a full week.",
    href: "/rates",
    cta: "View Rates & Tariffs",
  },
  {
    icon: GraduationCap,
    title: "Student Accommodation",
    description:
      "Fully furnished permanent rooms from $165/week, all linen and servicing included.",
    href: "/student-accommodation",
    cta: "See Student Rooms",
  },
  {
    icon: Building2,
    title: "Corporate Stays",
    description:
      "Self-contained mid-week packages from $85/night for the regular business traveller.",
    href: "/corporate-stays",
    cta: "See Corporate Packages",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-blue-600">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(58,143,208,0.55), transparent 55%), radial-gradient(ellipse at 90% 20%, rgba(212,160,23,0.25), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 sm:pt-32 sm:pb-40">
          <span className="mb-4 block text-xs font-bold tracking-[0.18em] text-gold-400 uppercase">
            Wollongong CBD, NSW
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold text-white sm:text-6xl">
            Comfortable stays in the heart of Wollongong.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Sky Accommodation offers affordable, self-contained rooms
            minutes from Wollongong&apos;s CBD, beaches and business
            district — nightly, weekly, student and corporate stays all
            under one roof.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/rates" variant="gold">
              View Rates &amp; Tariffs
            </Button>
            <Button href="/contact" variant="outline">
              Enquire Now
            </Button>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {[
              "Free WiFi & Parking",
              "Walk to Wollongong CBD",
              "Nightly, Weekly & Corporate Rates",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/85"
              >
                <Check className="h-4 w-4 shrink-0 text-gold-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why stay with us"
            title="Everything you need, nothing you don't"
            description="Comfortable rooms designed for short breaks, long stays, study and business — with the essentials always included."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-100 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Find your stay"
            title="Three ways to stay with us"
            description="Whether you're here for a weekend, a semester, or a working week, there's a rate built for you."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {stayTypes.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-950/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                  <s.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mb-6 flex-1 text-sm text-ink-600">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5">
                  {s.cta}
                  <ArrowRight className="h-4 w-4 transition-all" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="mb-3 block text-xs font-bold tracking-[0.18em] text-gold-500 uppercase">
              About Sky Accommodation
            </span>
            <h2 className="text-3xl font-semibold text-navy-900 sm:text-4xl">
              Your comfortable base in Wollongong
            </h2>
            <p className="mt-5 text-ink-600">
              Located in the heart of Wollongong&apos;s CBD, Sky
              Accommodation is minutes&apos; walk from top retail outlets,
              the business district, and some of the best restaurants on
              the South Coast of NSW — with underground parking and
              friendly staff on hand.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Double & twin rooms for up to 4 adults",
                "Permanent student rooms & studio apartments",
                "Corporate and extended-stay packages",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="font-medium text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/rates" className="mt-8">
              See Room Rates
            </Button>
          </div>
          <div className="aspect-[4/3] flex items-center justify-center rounded-3xl bg-gradient-to-br from-sky-300 to-blue-600 p-10 shadow-xl shadow-navy-950/10">
            <svg viewBox="0 0 200 150" className="w-full opacity-90">
              <circle cx="150" cy="30" r="18" fill="#ffe9a8" />
              <path
                d="M0 110 L40 70 L70 100 L110 55 L140 90 L200 60 L200 150 L0 150 Z"
                fill="#0b2545"
                opacity="0.35"
              />
              <path
                d="M0 130 L50 95 L90 118 L130 80 L170 110 L200 90 L200 150 L0 150 Z"
                fill="#0b2545"
                opacity="0.55"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy-950 to-navy-800 px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to book your stay?
          </h2>
          <p className="mt-4 text-white/75">
            Call {site.phone} or send an enquiry and we&apos;ll confirm
            availability and current rates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="gold">
              Contact Us to Book
            </Button>
            <Button href="/attractions" variant="outline">
              Explore the Area
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
