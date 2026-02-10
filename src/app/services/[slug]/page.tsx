import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Phone, ChevronDown, Users, ShieldCheck } from "lucide-react";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { SERVICES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/content/services";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug];
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDesc,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const content = SERVICE_CONTENT[slug];

  if (!service || !content) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
      />
      <FAQSchema faqs={content.faqs} />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-secondary" aria-current="page">{service.title}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{content.hero}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Intro + Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
              {content.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="bg-muted rounded-xl p-8">
              <h2 className="text-lg font-bold text-primary mb-4">
                What&apos;s Included
              </h2>
              <div className="space-y-3">
                {content.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.whoItsFor.map((item) => (
              <div
                key={item.label}
                className="bg-white p-8 rounded-xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Scenarios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Typical Scenarios
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.typicalScenarios.map((scenario, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-muted rounded-xl"
              >
                <div className="w-8 h-8 bg-secondary/20 text-secondary rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {scenario}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="w-10 h-10 bg-secondary text-primary-dark rounded-full flex items-center justify-center mb-4 font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Compliance &amp; Safety
              </h2>
              <div className="space-y-4">
                {content.compliance.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4">
                Why Choose Us
              </h3>
              <div className="space-y-3">
                {content.whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary text-white rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Contact our team today for a free consultation about your
                {" "}{service.title.toLowerCase()} requirements in Hampshire.
                Same-week appointments available.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-lg transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">
            {service.title} FAQs
          </h2>
          <div className="space-y-4" role="region" aria-label={`${service.title} frequently asked questions`}>
            {content.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-border rounded-xl overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-foreground font-semibold hover:text-primary transition-colors list-none">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 shrink-0 ml-4 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {s.shortDesc}
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
    </>
  );
}
