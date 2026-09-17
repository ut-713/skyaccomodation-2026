"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react";
import clsx from "clsx";
import { navItems, site } from "@/lib/site";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileStaysOpen, setMobileStaysOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-lg font-bold text-white"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300 to-blue-600">
            <Home className="h-5 w-5 text-white" />
          </span>
          Sky <span className="text-gold-400">Accommodation</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={clsx(
                  "flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-white/10 text-gold-400"
                    : "text-white/80 hover:bg-white/8 hover:text-white",
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {item.children && (
                <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <ul className="w-72 overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-2 shadow-xl shadow-navy-950/20">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-sky-100"
                        >
                          <span className="block text-sm font-semibold text-navy-900">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs text-ink-600">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            href={`tel:${site.phoneHref}`}
            variant="gold"
            className="hidden sm:inline-flex"
          >
            Call Us
          </Button>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileStaysOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-white/85"
                    >
                      {item.label}
                      <ChevronDown
                        className={clsx(
                          "h-4 w-4 transition-transform",
                          mobileStaysOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileStaysOpen && (
                      <ul className="ml-3 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-gold-400"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block rounded-lg px-3 py-3 text-sm font-medium",
                      isActive(item.href)
                        ? "text-gold-400"
                        : "text-white/85 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
