import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  AlertTriangle,
  Heart,
  HardHat,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Health & Safety — Our Commitment to Safe Asbestos Management",
  description:
    "Our comprehensive health and safety policy for asbestos services in Hampshire. Risk assessments, method statements, PPE protocols, and workforce welfare standards.",
  alternates: { canonical: "/health-safety" },
};

export default function HealthSafetyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Health & Safety", href: "/health-safety" },
        ]}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">Health &amp; Safety</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Health &amp; Safety
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Our commitment to the health and safety of our clients, their
            building occupants, and our own workforce is absolute and
            non-negotiable.
          </p>
        </div>
      </section>

      {/* H&S Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Safety Is Our Priority
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Working with asbestos-containing materials is inherently
                  hazardous. Exposure to asbestos fibres can cause serious and
                  fatal diseases including mesothelioma, asbestos-related lung
                  cancer, and asbestosis. These diseases typically have a long
                  latency period, often not presenting symptoms until 20–50
                  years after exposure.
                </p>
                <p>
                  Because of these serious risks, we take our health and safety
                  responsibilities extremely seriously. Every project, whether a
                  single domestic survey or a major commercial removal, is
                  planned and executed with the health and safety of all
                  individuals as the primary consideration. We never allow
                  commercial pressure to compromise safety standards.
                </p>
                <p>
                  Our health and safety management system is built on the
                  principles of the Health and Safety at Work etc. Act 1974,
                  the Management of Health and Safety at Work Regulations 1999,
                  and the specific requirements of the Control of Asbestos
                  Regulations 2012.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Risk Assessment",
                  desc: "Full risk assessments produced for every project before work commences.",
                },
                {
                  icon: <HardHat className="w-8 h-8" />,
                  title: "Method Statements",
                  desc: "Detailed method statements outlining safe systems of work for all activities.",
                },
                {
                  icon: <AlertTriangle className="w-8 h-8" />,
                  title: "PPE Standards",
                  desc: "Full RPE and PPE provided, maintained, and face-fit tested for all personnel.",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Medical Surveillance",
                  desc: "All operatives undergo regular medical examinations including lung function testing.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-muted p-6 rounded-xl text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Policies */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Our Health &amp; Safety Commitments
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Risk Assessment & Method Statements",
                desc: "Every project receives a site-specific risk assessment and detailed method statement before any work begins. These documents identify all hazards, assess risks, and set out the safe systems of work that all personnel must follow. RAMS are reviewed and updated whenever site conditions change.",
              },
              {
                title: "Personal Protective Equipment",
                desc: "All surveyors and operatives are provided with appropriate PPE including RPE (respiratory protective equipment) that has been individually face-fit tested. PPE is inspected before every use and replaced at specified intervals. We use powered air purifying respirators (PAPR) for licensed removal work.",
              },
              {
                title: "Air Monitoring & Control",
                desc: "During removal and encapsulation work, continuous air monitoring is conducted both inside and outside the enclosure to ensure fibre concentrations remain within safe limits. Background, leak, reassurance, and personal exposure monitoring are all carried out in accordance with HSG248.",
              },
              {
                title: "Decontamination Procedures",
                desc: "Strict decontamination procedures are followed for all asbestos work. For licensed removal, full three-stage decontamination units are used. For survey and sampling work, appropriate decontamination protocols are followed including transit procedures and waste management.",
              },
              {
                title: "Training & Competence",
                desc: "All personnel receive asbestos awareness training as a minimum. Surveyors hold BOHS P402, P403, and P404 qualifications. Removal operatives are trained and assessed to the standard required by the HSE. Refresher training is conducted annually, and all training records are maintained.",
              },
              {
                title: "Incident Reporting & Learning",
                desc: "We operate a comprehensive incident reporting system covering accidents, near-misses, and unsafe conditions. All incidents are investigated, root causes identified, and corrective actions implemented. We conduct regular safety reviews and toolbox talks to share learning across the team.",
              },
            ].map((policy) => (
              <div
                key={policy.title}
                className="bg-white p-8 rounded-xl border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {policy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Welfare */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Workforce Welfare
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
            We are committed to the long-term health and welfare of our team.
            Working with asbestos requires not just physical protection but also
            ongoing health monitoring and support.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Annual medical examinations for all asbestos workers",
              "Lung function testing and health record maintenance",
              "Regular face-fit testing for all RPE users",
              "Mental health and wellbeing support programme",
              "Ongoing CPD and professional development funding",
              "Toolbox talks and safety briefings on every project",
              "Clear reporting culture with no-blame incident investigation",
              "Full compliance with Working Time Regulations",
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
            Health &amp; Safety Documentation
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We can provide copies of our health and safety policy, risk
            assessments, method statements, and insurance certificates upon
            request.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors"
            >
              Request Documentation
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
