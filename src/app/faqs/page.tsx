import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "FAQs — Asbestos Questions Answered by Qualified Specialists",
  description:
    "Frequently asked questions about asbestos surveys, removal, testing, and regulations in Hampshire. Expert answers from BOHS-qualified professionals.",
  alternates: { canonical: "/faqs" },
};

const FAQ_CATEGORIES = [
  {
    category: "Asbestos Surveys",
    faqs: [
      {
        question: "What types of asbestos survey are available?",
        answer:
          "There are three types of asbestos survey defined in HSG264: management surveys (to locate and assess ACMs for ongoing management), refurbishment surveys (before any planned renovation work), and demolition surveys (before a building is due to be demolished). The type of survey you need depends on why it is required and what activities are planned for the building.",
      },
      {
        question: "When is an asbestos survey legally required?",
        answer:
          "Under the Control of Asbestos Regulations 2012, the duty holder for any non-domestic premises has a legal duty to manage asbestos. This requires knowing whether asbestos is present, which typically means a management survey. A refurbishment or demolition survey is required before any work that may disturb the building fabric in properties built before the year 2000.",
      },
      {
        question: "What factors affect the cost of an asbestos survey?",
        answer:
          "The main factors are the property type (domestic or commercial), the size of the building, the type of survey required (management, refurbishment, or demolition), and the number of samples likely to be needed. A straightforward domestic management survey is less expensive than a large commercial refurbishment survey. We provide free quotes based on your specific property and requirements.",
      },
      {
        question: "How quickly can I get a survey appointment?",
        answer:
          "We offer same-week survey appointments across Hampshire as standard. For urgent requirements, we can often accommodate next-day or same-day appointments. Survey reports are typically delivered within 24 hours of the site visit.",
      },
    ],
  },
  {
    category: "Asbestos Removal",
    faqs: [
      {
        question: "What is the difference between licensed and non-licensed asbestos work?",
        answer:
          "Licensed work involves higher-risk materials such as sprayed coatings, asbestos insulation board (AIB), and loose-fill insulation. This work can only be carried out by HSE-licensed contractors and requires a 14-day notification to the HSE before commencement. Non-licensed work involves lower-risk materials such as asbestos cement, textured coatings, and some floor tiles. While less risky, non-licensed work still requires trained personnel and proper safety controls.",
      },
      {
        question: "How long does asbestos removal take?",
        answer:
          "The duration depends on the type, quantity, and location of the asbestos-containing materials, and whether the work is licensed or non-licensed. A small domestic removal might be completed in a day, while a large commercial project could take several weeks. We provide detailed timescales as part of our project planning process.",
      },
      {
        question: "Can I stay in my property during asbestos removal?",
        answer:
          "This depends on the type of removal work, its location within the property, and the control measures in place. For licensed removal work, you will typically need to vacate the immediate area. For some non-licensed work, it may be possible to remain in unaffected parts of the property. We provide specific guidance for each project.",
      },
    ],
  },
  {
    category: "Testing & Sampling",
    faqs: [
      {
        question: "How are asbestos samples analysed?",
        answer:
          "Bulk samples are analysed at a UKAS-accredited laboratory using polarised light microscopy (PLM). This technique allows trained analysts to identify the presence and type of asbestos fibres — chrysotile (white), amosite (brown), or crocidolite (blue) — and estimate the percentage of asbestos content in the sample.",
      },
      {
        question: "How quickly can I get test results?",
        answer:
          "Standard laboratory turnaround is 24 hours from sample receipt. We also offer same-day urgent analysis for time-critical projects. Results are provided with a formal UKAS-accredited test certificate including fibre type identification and percentage content.",
      },
      {
        question: "Is it safe to disturb materials that might contain asbestos?",
        answer:
          "No. If you suspect a material contains asbestos, do not drill, cut, sand, scrape, or otherwise disturb it. Asbestos fibres are only dangerous when airborne, so intact materials in good condition generally pose low risk. If you need to confirm whether a material contains asbestos, arrange for a qualified surveyor to collect a sample using safe techniques and appropriate protective equipment.",
      },
    ],
  },
  {
    category: "Regulations & Compliance",
    faqs: [
      {
        question: "What are the main UK asbestos regulations?",
        answer:
          "The principal legislation is the Control of Asbestos Regulations 2012 (CAR 2012), which consolidates previous asbestos regulations into a single framework. Key provisions include the duty to manage asbestos in non-domestic premises (Regulation 4), requirements for licensed and non-licensed work, medical surveillance, and training requirements. This is supported by HSE guidance including HSG264, HSG248, and HSG227.",
      },
      {
        question: "What is the duty to manage asbestos?",
        answer:
          "Under Regulation 4 of CAR 2012, the duty holder for any non-domestic premises must take reasonable steps to determine whether asbestos is present, assess its condition, create a management plan, and ensure anyone likely to work on or disturb the material is made aware of its presence. This applies to commercial properties, schools, hospitals, landlords of rental properties, and public buildings.",
      },
      {
        question: "When was asbestos banned in the UK?",
        answer:
          "The use of blue (crocidolite) and brown (amosite) asbestos was banned in the UK in 1985. White asbestos (chrysotile) was banned in 1999. However, asbestos was widely used in UK construction from the 1950s through to the mid-1990s, meaning any building constructed or refurbished before the year 2000 may contain asbestos-containing materials.",
      },
    ],
  },
  {
    category: "Costs & Logistics",
    faqs: [
      {
        question: "Do you offer free quotes?",
        answer:
          "Yes. We provide free, no-obligation quotes for all our services. For surveys, we can usually provide a quote over the phone based on your property details. For removal and disposal projects, we may need to conduct a preliminary survey or site visit to provide an accurate quotation.",
      },
      {
        question: "What areas of Hampshire do you cover?",
        answer:
          "We cover the entire county of Hampshire, including Southampton, Portsmouth, Winchester, Basingstoke, Andover, Farnborough, Aldershot, Eastleigh, Fareham, Havant, Gosport, Fleet, Petersfield, Waterlooville, and all surrounding areas. We also cover the Isle of Wight by arrangement.",
      },
      {
        question: "How do I dispose of asbestos waste legally?",
        answer:
          "All asbestos waste must be disposed of at an Environment Agency licensed hazardous waste facility. It must be double-bagged in UN-approved packaging, labelled correctly, and transported by a licensed waste carrier. Full consignment note documentation is required. We provide a complete disposal service that handles every aspect of this process for you.",
      },
    ],
  },
];

const ALL_FAQS = FAQ_CATEGORIES.flatMap((cat) => cat.faqs);

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQs", href: "/faqs" },
        ]}
      />
      <FAQSchema faqs={ALL_FAQS} />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">FAQs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert answers to common questions about asbestos surveys, removal,
            testing, regulations, and our services in Hampshire.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 bg-muted border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 text-sm bg-white border border-border rounded-full text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {FAQ_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                id={cat.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.faqs.map((faq, i) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is happy to answer any questions about asbestos services
            in Hampshire. Get in touch for expert, no-obligation advice.
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold text-lg rounded-lg transition-colors"
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
