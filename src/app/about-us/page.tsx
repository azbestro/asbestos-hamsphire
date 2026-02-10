import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Users,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us — Licensed Asbestos Specialists in Hampshire",
  description:
    "Meet the team behind Asbestos Services Hampshire. BOHS-qualified surveyors and HSE-licensed contractors with over 15 years of experience serving Hampshire.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about-us" },
        ]}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">About Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Qualified, licensed, and committed to safe asbestos management across Hampshire.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Dedicated to Safe Asbestos Management
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Asbestos Services Hampshire was founded with a clear mission: to provide
                  professional, compliant, and affordable asbestos services to homeowners,
                  businesses, and public sector organisations across Hampshire.
                </p>
                <p>
                  With over 15 years of combined industry experience, our team understands
                  the serious health risks associated with asbestos exposure and the critical
                  importance of proper identification, management, and removal. Every member
                  of our team holds relevant BOHS qualifications and undergoes regular
                  continued professional development to stay current with UK regulatory changes.
                </p>
                <p>
                  We operate under full Environment Agency waste carrier licensing and HSE
                  asbestos removal licensing, ensuring that every project we undertake meets
                  high standards of safety and regulatory compliance. From a single domestic
                  survey in Southampton to large-scale commercial removal projects across
                  Hampshire, we approach every job with the same level of professionalism
                  and attention to detail.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: <Award className="w-8 h-8" />, title: "BOHS Qualified", desc: "P402, P403, P404 certified surveyors" },
                  { icon: <ShieldCheck className="w-8 h-8" />, title: "HSE Licensed", desc: "Full asbestos removal licence" },
                  { icon: <FileCheck className="w-8 h-8" />, title: "EA Licensed", desc: "Waste carrier & hazardous waste" },
                  { icon: <Users className="w-8 h-8" />, title: "Experienced", desc: "15+ years in asbestos services" },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every survey, removal, and project we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                desc: "The health and safety of our clients, their occupants, and our operatives is paramount. We never cut corners and always follow HSE best practice guidance, including HSG264 for surveys and HSG248 for removal work.",
              },
              {
                title: "Full Transparency",
                desc: "We provide clear, honest assessments with no unnecessary work recommended. Our reports are detailed, easy to understand, and include photographic evidence alongside clear management recommendations.",
              },
              {
                title: "Regulatory Excellence",
                desc: "Compliance is not optional — it is the foundation of everything we do. We maintain all required licensing, insurance, and qualifications and keep fully up to date with changes in UK asbestos legislation.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Our Qualifications &amp; Accreditations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "BOHS P402 — Surveying and Sampling Strategies for Asbestos in Buildings",
              "BOHS P403 — Asbestos Fibre Counting (PCM)",
              "BOHS P404 — Air Sampling of Asbestos and MMMF",
              "HSE Licensed Asbestos Removal Contractor",
              "Environment Agency Upper Tier Waste Carrier",
              "Environment Agency Hazardous Waste Producer Registration",
              "Public Liability Insurance — £10M",
              "Employers Liability Insurance — £10M",
              "Professional Indemnity Insurance",
              "DBS Enhanced Checked Operatives",
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
            Ready to Discuss Your Asbestos Requirements?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free initial consultation. We serve all areas of Hampshire
            with same-week survey availability.
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
