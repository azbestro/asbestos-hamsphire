import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import HampshireMap from "@/components/HampshireMap";
import { HAMPSHIRE_CITIES, SERVICES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Asbestos Services in Hampshire — Full County Coverage",
  description:
    "Professional asbestos surveys, removal, and testing across Hampshire. Covering Southampton, Portsmouth, Winchester, Basingstoke, and all major towns. Same-week appointments.",
  alternates: { canonical: "/hampshire" },
};

export default function HampshirePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Hampshire", href: "/hampshire" },
        ]}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">Hampshire</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Asbestos Services Across Hampshire
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Full asbestos service coverage across every major town and city in
            Hampshire. From the coast to the north of the county, our qualified
            team is ready to help.
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <HampshireMap />

      {/* Hampshire Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Asbestos Management Across Hampshire
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hampshire is one of the largest counties in England, with a rich
                  mix of historic buildings, modern commercial developments, and
                  residential properties spanning from the Solent coast through to
                  the North Hampshire Downs. Many of these buildings, particularly
                  those constructed or refurbished before the year 2000, may contain
                  asbestos-containing materials that require professional management.
                </p>
                <p>
                  Our team provides comprehensive asbestos services across the entire
                  county, including the major urban centres of Southampton and
                  Portsmouth, the historic city of Winchester, and the growing towns
                  of Basingstoke, Farnborough, and Andover. We also cover all
                  surrounding areas including Eastleigh, Fareham, Havant, Gosport,
                  Fleet, Petersfield, Waterlooville, and Aldershot.
                </p>
                <p>
                  Whether you are a homeowner concerned about asbestos in your
                  property, a commercial property manager with duty-to-manage
                  obligations, a school or local authority requiring building
                  surveys, or a contractor needing pre-refurbishment assessments,
                  we apply the same rigorous approach wherever you are
                  in Hampshire.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Services Available Across Hampshire
              </h3>
              <div className="space-y-3 mb-8">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Areas We Cover in Hampshire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide full asbestos service coverage across all of these
              Hampshire locations and their surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {HAMPSHIRE_CITIES.map((city) => (
              <Link
                key={city.name}
                href={`/hampshire/areas-we-cover#${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border hover:border-primary/30 hover:shadow transition-all group"
              >
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/hampshire/areas-we-cover"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors"
            >
              View Full Area Coverage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hampshire Trusts Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">
            What We Offer Hampshire Clients
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Local knowledge of Hampshire building stock and construction periods",
              "Same-week survey appointments across the entire county",
              "BOHS-qualified surveyors based in Hampshire",
              "Full HSE licensing for all asbestos removal types",
              "Environment Agency licensed waste carrier and disposal",
              "24-hour report turnaround as standard",
              "Competitive pricing for domestic and commercial projects",
              "Single point of contact from survey through to disposal",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Asbestos Services in Hampshire?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation. Same-week survey
            appointments available across all Hampshire locations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors"
            >
              Request a Survey
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
