import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sky Accommodation, Wollongong to check availability, ask about rates, or make a booking enquiry.",
};

const details = [
  {
    icon: Phone,
    title: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  { icon: MapPin, title: "Address", value: site.addressLine },
  {
    icon: Clock,
    title: "Reception Hours",
    value: "Contact us to confirm current hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Questions about rates, availability or corporate bookings? Reach out — we're happy to help."
      />

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-navy-900">
              Send an Enquiry
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold text-navy-900">
              Contact Details
            </h2>
            <div className="flex flex-col gap-5">
              {details.map((d) => (
                <div key={d.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                    <d.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">{d.title}</h3>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-sm text-ink-600 hover:text-blue-600"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm text-ink-600">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold-400/40 bg-amber-50 p-5 text-sm text-amber-900">
              Submitting the form opens your email app with the enquiry
              pre-filled — nothing is sent automatically. Prefer to talk
              directly? Call {site.phone}.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
