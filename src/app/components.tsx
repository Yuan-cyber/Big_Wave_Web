"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Surfer Legends", href: "/hero" },
  { name: "Wave Science & Safety", href: "/science" },
  { name: "Nazare Culture", href: "/culture" },
  { name: "Plan Your Visit", href: "/visit" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-wave-700 hover:text-wave-800 transition-colors"
            >
              Nazaré Waves
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-wave-600 whitespace-nowrap",
                  pathname === item.href ? "text-wave-600" : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-wave-600 hover:bg-wave-700 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block rounded-md px-4 py-3 text-lg font-medium transition-colors",
                    pathname === item.href
                      ? "bg-wave-50 text-wave-600"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className="block rounded-md px-4 py-3 text-lg font-semibold bg-wave-600 text-white hover:bg-wave-700 mt-6 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">logo</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Wave Surf School</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Rua S. Gião 37, Loja A<br />
                2450-065 Nazaré
                <br />
                Portugal
              </p>
              <p>Tel: +351 XXX XXX XXX</p>
              <p>Email: info@nazarewave.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Phone: +351 XXX XXX XXX</p>
              <p>Email: booking@nazarewave.com</p>
              <p>WhatsApp: +351 XXX XXX XXX</p>
              <p>Instagram: @nazarewave</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Where We Are</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Nazaré Beach
                <br />
                Praia do Norte
                <br />
                Lighthouse Viewpoint
              </p>
              <p>GPS: 39.6019° N, 9.0756° W</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Nazaré Big Wave Experience. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
