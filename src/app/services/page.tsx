import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  FlaskConical,
  Microscope,
  Truck,
  ArrowRight,
  Phone,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { SERVICES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Asbestos Services — Surveys, Removal, Testing & Disposal",
  description:
    "Complete range of licensed asbestos services across Hampshire. Surveys, removal, encapsulation, sampling, testing, and disposal by BOHS-qualified professionals.",
  alternates: { canonical: "/services" },
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  ClipboardCheck: <ClipboardCheck className="w-10 h-10" />,
  HardHat: <HardHat className="w-10 h-10" />,
  ShieldCheck: <ShieldCheck className="w-10 h-10" />,
  FlaskConical: <FlaskConical className="w-10 h-10" />,
  Microscope: <Microscope className="w-10 h-10" />,
  Truck: <Truck className="w-10 h-10" />,
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">Services</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Asbestos Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            A complete range of professional asbestos management services, delivered by
            BOHS-qualified surveyors and HSE-licensed contractors across Hampshire.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {SERVICE_ICONS[service.icon]}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  View service details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every project follows a clear, compliant process from initial enquiry
              to completion, with full documentation at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Enquire", desc: "Contact us with your requirements and property details." },
              { step: "2", title: "Survey", desc: "BOHS-qualified surveyor inspects and samples your property." },
              { step: "3", title: "Report", desc: "Detailed findings report with management recommendations." },
              { step: "4", title: "Resolve", desc: "Licensed removal, encapsulation, or ongoing management." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Which Service Do You Need?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Not sure which asbestos service you require? Contact our team for a free
            consultation. We will assess your needs and recommend the right approach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors"
            >
              Speak to an Expert
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
