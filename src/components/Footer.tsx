import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  SITE_NAME,
  PHONE_NUMBER,
  PHONE_HREF,
  EMAIL,
  SERVICES,
  HAMPSHIRE_CITIES,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-dark font-bold text-lg">AS</span>
              </div>
              <span className="font-bold text-lg">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Professional, licensed asbestos services across Hampshire.
              Fully compliant with UK regulations, HSG264, and HSG248
              standards.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Hampshire, United Kingdom
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Hampshire Coverage", href: "/hampshire" },
                { label: "Areas We Cover", href: "/hampshire/areas-we-cover" },
                { label: "Compliance & Licensing", href: "/compliance-licensing" },
                { label: "Health & Safety", href: "/health-safety" },
                { label: "FAQs", href: "/faqs" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Areas We Cover</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {HAMPSHIRE_CITIES.map((city) => (
                <li key={city.name}>
                  <Link
                    href={`/hampshire/areas-we-cover#${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>Environment Agency Licensed</span>
              <span className="hidden sm:inline">•</span>
              <span>BOHS Qualified Surveyors</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
