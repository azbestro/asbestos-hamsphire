import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  FileCheck,
  Award,
  Scale,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Compliance & Licensing — Regulatory Standards & Accreditations",
  description:
    "Full details of our regulatory compliance, licensing, and accreditations. Environment Agency licensed, HSE approved, BOHS qualified. Compliant with HSG264, HSG248, and CAR 2012.",
  alternates: { canonical: "/compliance-licensing" },
};

export default function CompliancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compliance & Licensing", href: "/compliance-licensing" },
        ]}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">Compliance &amp; Licensing</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Compliance &amp; Licensing
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Transparency and regulatory compliance are at the core of everything
            we do. Here are the standards, licences, and qualifications that
            underpin our services.
          </p>
        </div>
      </section>

      {/* Key Licenses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Our Licences &amp; Registrations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "HSE Asbestos Removal Licence",
                desc: "We hold a full licence issued by the Health and Safety Executive (HSE) for the removal of all types of asbestos-containing materials, including licensable (high-risk) materials such as sprayed coatings, asbestos insulation board (AIB), and loose-fill insulation. This licence is subject to regular HSE inspection and renewal.",
              },
              {
                icon: <FileCheck className="w-8 h-8" />,
                title: "Environment Agency Waste Carrier Licence",
                desc: "We are registered as an upper-tier waste carrier with the Environment Agency, authorising us to collect and transport controlled waste, including hazardous asbestos waste. Our registration covers the entire Hampshire service area and is maintained in full compliance with waste duty of care requirements.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Environment Agency Hazardous Waste Registration",
                desc: "As a registered hazardous waste producer, we are authorised to produce, store, and arrange the disposal of hazardous waste including all forms of asbestos. Every consignment is tracked using the official consignment note system in accordance with the Hazardous Waste Regulations.",
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Professional Insurance",
                desc: "We carry comprehensive insurance cover including Public Liability (£10M), Employers Liability (£10M), and Professional Indemnity insurance. Certificates are available upon request and can be provided as part of any pre-qualification or tender process.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white border border-border rounded-xl"
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Regulatory Framework We Comply With
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
            All our work is conducted in strict compliance with the following
            UK asbestos legislation and HSE guidance documents. These form the
            legal and best-practice framework within which all asbestos work
            in the UK must be carried out.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Control of Asbestos Regulations 2012 (CAR 2012)",
                desc: "The principal UK legislation governing all work with asbestos-containing materials. Sets out duty to manage requirements, licensing requirements, and obligations for employers and building owners.",
              },
              {
                title: "HSG264 — Asbestos: The Survey Guide",
                desc: "HSE guidance on how to carry out asbestos surveys. Defines the three survey types (management, refurbishment, and demolition) and establishes standards for sampling, analysis, and reporting.",
              },
              {
                title: "HSG248 — Asbestos: The Analysts' Guide",
                desc: "HSE guidance covering asbestos sampling, analysis, and clearance procedures. Establishes standards for air monitoring, four-stage clearance, and laboratory analysis.",
              },
              {
                title: "HSG227 — Managing Asbestos in Premises",
                desc: "Comprehensive guidance on the duty to manage asbestos in non-domestic premises, including how to create and maintain an asbestos register and management plan.",
              },
              {
                title: "Hazardous Waste (England and Wales) Regulations 2005",
                desc: "Regulations governing the production, transportation, and disposal of hazardous waste, including all asbestos waste materials.",
              },
              {
                title: "Environmental Protection Act 1990 — Duty of Care",
                desc: "Establishes the duty of care for anyone who produces, imports, carries, keeps, treats, or disposes of controlled waste, including asbestos.",
              },
            ].map((reg) => (
              <div
                key={reg.title}
                className="bg-white p-6 rounded-xl border border-border"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {reg.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Team Qualifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "BOHS P402 — Surveying and Sampling Strategies for Asbestos in Buildings",
              "BOHS P403 — Asbestos Fibre Counting (PCM)",
              "BOHS P404 — Air Sampling of Asbestos and MMMF",
              "BOHS S301 — Asbestos and Other Fibres",
              "CITB SMSTS — Site Management Safety Training Scheme",
              "IOSH Managing Safely",
              "Asbestos Awareness (Category A) — all operatives",
              "Full face-fit testing and medical surveillance",
              "DBS Enhanced Checked — all personnel",
              "First Aid at Work — all field operatives",
            ].map((qual) => (
              <div key={qual} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-foreground">{qual}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need to Verify Our Credentials?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We are happy to provide copies of all licences, certificates, and
            insurance documentation upon request. Contact us for a compliance pack.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors"
            >
              Request Compliance Pack
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
