import Link from "next/link";
import {
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  FlaskConical,
  Microscope,
  Truck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Award,
  FileCheck,
  Users,
  Clock,
  ChevronDown,
} from "lucide-react";
import HampshireMap from "@/components/HampshireMap";
import {
  OrganizationSchema,
  LocalBusinessSchema,
} from "@/components/SchemaMarkup";
import { SERVICES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  ClipboardCheck: <ClipboardCheck className="w-8 h-8" />,
  HardHat: <HardHat className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Microscope: <Microscope className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
};

const HOME_FAQS = [
  {
    question: "Do I need an asbestos survey before renovation?",
    answer:
      "Yes. Under the Control of Asbestos Regulations 2012, a refurbishment or demolition survey is legally required before any refurbishment or demolition work on buildings constructed before the year 2000. This ensures all asbestos-containing materials are identified and safely managed before work begins.",
  },
  {
    question: "How long does an asbestos survey take?",
    answer:
      "A standard management survey for a domestic property typically takes 1–3 hours. Refurbishment and demolition surveys may take longer depending on the size and complexity of the building. We provide same-week appointments across Hampshire with rapid reporting turnaround.",
  },
  {
    question: "Is your asbestos removal service licensed?",
    answer:
      "Yes. We hold a full HSE licence for the removal of all types of asbestos, including high-risk materials such as sprayed coatings and asbestos insulation board. Our operatives are fully trained and medically certified in accordance with HSG248 guidelines.",
  },
  {
    question: "What areas in Hampshire do you cover?",
    answer:
      "We provide full coverage across Hampshire, including Southampton, Portsmouth, Winchester, Basingstoke, Andover, Farnborough, Aldershot, Eastleigh, Fareham, Havant, Gosport, Fleet, Petersfield, and Waterlooville. View our full coverage map for details.",
  },
  {
    question: "How is asbestos waste disposed of?",
    answer:
      "All asbestos waste is double-bagged, labelled, and transported in sealed containers to Environment Agency licensed hazardous waste facilities. Every consignment is tracked with full documentation, and we provide waste transfer notes and consignment notes for your records.",
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,58,95,0.97)_0%,rgba(21,42,69,0.95)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <Award className="w-4 h-4 text-secondary" />
              Environment Agency Licensed &amp; BOHS Qualified
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Licensed Asbestos Surveys, Removal &amp; Testing in{" "}
              <span className="text-secondary">Hampshire</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
              Qualified surveyors and licensed contractors delivering
              compliant asbestos services across Hampshire. All work
              conducted in accordance with HSG264, HSG248, and the
              Control of Asbestos Regulations 2012.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors"
              >
                Request a Survey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FileCheck className="w-6 h-6" />, text: "HSE Licensed" },
              { icon: <Award className="w-6 h-6" />, text: "BOHS Qualified" },
              { icon: <ShieldCheck className="w-6 h-6" />, text: "Fully Insured" },
              { icon: <Clock className="w-6 h-6" />, text: "Rapid Response" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
              >
                <div className="text-secondary">{badge.icon}</div>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hampshire Map */}
      <HampshireMap />

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Asbestos Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive asbestos management solutions delivered by qualified
              professionals, from initial survey through to safe disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {SERVICE_ICONS[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Licensing */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Fully Licensed &amp; Regulatory Compliant
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We operate under full Environment Agency waste carrier and
                hazardous waste licensing. Our surveyors hold BOHS P402, P403,
                and P404 qualifications, and all removal work is conducted
                under HSE licence where required. We comply with the Control of
                Asbestos Regulations 2012, HSG264, and HSG248 at every stage.
              </p>
              <div className="space-y-4">
                {[
                  "Environment Agency Waste Carrier Licence",
                  "HSE Licensed Asbestos Removal Contractor",
                  "BOHS P402/P403/P404 Qualified Surveyors",
                  "HSG264 & HSG248 Full Compliance",
                  "Public & Employer Liability Insurance",
                  "Full Method Statements & Risk Assessments",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/compliance-licensing"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:underline"
              >
                View our full compliance details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-10 border border-border">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "HSE", label: "Licensed Removal" },
                  { number: "BOHS", label: "Qualified Surveyors" },
                  { number: "UKAS", label: "Accredited Analysis" },
                  { number: "24hr", label: "Report Turnaround" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Qualified professionals combining technical competence
              with a genuine commitment to safety across Hampshire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-7 h-7" />,
                title: "Qualified Experts",
                desc: "BOHS-certified surveyors and HSE-licensed removal operatives with extensive field experience across commercial and domestic properties.",
              },
              {
                icon: <FileCheck className="w-7 h-7" />,
                title: "Full Compliance",
                desc: "Every project is managed in strict accordance with the Control of Asbestos Regulations 2012, HSG264, HSG248, and Environment Agency requirements.",
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: "Fast Turnaround",
                desc: "Same-week survey appointments across Hampshire with laboratory results and comprehensive reports typically delivered within 24 hours.",
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Complete Service",
                desc: "From initial survey through to safe removal and licensed disposal — we manage the entire process so you have a single point of accountability.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A clear, structured process from initial enquiry to project
              completion, ensuring full compliance at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Enquiry",
                desc: "Contact us with your requirements. We assess the scope and arrange a convenient survey date at your Hampshire property.",
              },
              {
                step: "02",
                title: "Professional Survey",
                desc: "Our BOHS-qualified surveyor conducts a thorough inspection, collecting samples and documenting all findings to HSG264 standards.",
              },
              {
                step: "03",
                title: "Report & Plan",
                desc: "You receive a detailed asbestos register and management plan with clear recommendations, typically within 24 hours of the survey.",
              },
              {
                step: "04",
                title: "Safe Resolution",
                desc: "If removal or encapsulation is required, our licensed teams carry out the work safely with full waste tracking and certification.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-white/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our asbestos services in Hampshire.
            </p>
          </div>

          <div className="space-y-4">
            {HOME_FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-foreground font-semibold hover:text-primary transition-colors list-none">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 shrink-0 ml-4 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Need Asbestos Services in Hampshire?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Speak to our qualified team today. We provide free initial
            consultations and same-week survey appointments across Hampshire.
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Speak to an Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
