import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { HAMPSHIRE_CITIES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { TOWN_CONTENT } from "@/content/towns";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Areas We Cover in Hampshire — Full Service Coverage Map",
  description:
    "Complete list of Hampshire areas covered by our asbestos services. Southampton, Portsmouth, Winchester, Basingstoke, and 10+ more towns. Same-week survey availability.",
  alternates: { canonical: "/hampshire/areas-we-cover" },
};

export default function AreasWeCoverPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Hampshire", href: "/hampshire" },
          { name: "Areas We Cover", href: "/hampshire/areas-we-cover" },
        ]}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hampshire" className="hover:text-white">Hampshire</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">Areas We Cover</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Areas We Cover in Hampshire
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Detailed coverage information for every major town and city we
            serve across Hampshire. Same-week availability throughout the county.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {HAMPSHIRE_CITIES.map((city) => (
              <a
                key={city.name}
                href={`#${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 text-sm bg-white border border-border rounded-full text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {TOWN_CONTENT.map((town) => (
              <article
                key={town.anchor}
                id={town.anchor}
                className="scroll-mt-24"
              >
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                    <h2 className="text-2xl font-bold text-primary">
                      Asbestos Services in {town.name}
                    </h2>
                  </div>
                  <div className="space-y-3 text-gray-600 leading-relaxed mb-4">
                    {town.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <p className="text-sm">
                      <strong className="text-foreground">
                        Common property types:
                      </strong>{" "}
                      <span className="text-gray-600">{town.propertyTypes}</span>
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
                  >
                    Request a survey in {town.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t See Your Area Listed?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We cover all of Hampshire, not just the major towns listed above.
            Contact us with your location and we will confirm coverage and
            availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
