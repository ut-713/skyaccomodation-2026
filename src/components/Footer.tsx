import Link from "next/link";
import { Home, Mail, MapPin, Phone } from "lucide-react";
import { navItems, site } from "@/lib/site";

const guestLinks = [
  { label: "Rates & Tariffs", href: "/rates" },
  { label: "Student Accommodation", href: "/student-accommodation" },
  { label: "Corporate Stays", href: "/corporate-stays" },
  { label: "Cancellation Policy", href: "/rates#policy" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-950 text-white/70">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5 font-heading text-lg font-bold text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300 to-blue-600">
                <Home className="h-5 w-5 text-white" />
              </span>
              Sky <span className="text-gold-400">Accommodation</span>
            </div>
            <p className="text-sm text-white/60">
              Comfortable, self-contained stays in the heart of {site.suburb}
              &apos;s CBD. Book direct for the best rates.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navItems.flatMap((item) =>
                item.children
                  ? item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="transition-colors hover:text-gold-400"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))
                  : [
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="transition-colors hover:text-gold-400"
                        >
                          {item.label}
                        </Link>
                      </li>,
                    ],
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Guest Info
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {guestLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-gold-400" />
                {site.addressLine}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Sky Accommodation, {site.suburb}
            . All rights reserved.
          </span>
          <span>Exact street address available on enquiry.</span>
        </div>
      </div>
    </footer>
  );
}
