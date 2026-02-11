import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { PHONE_NUMBER, PHONE_HREF, EMAIL } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Us — Free Asbestos Survey Quotes in Hampshire",
  description:
    "Get in touch for a free, no-obligation quote on asbestos surveys, removal, testing, or disposal in Hampshire. Same-week appointments available.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Get in touch for a free consultation or to book a survey.
            We serve all areas of Hampshire with same-week availability.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Request a Survey or Ask a Question
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href={PHONE_HREF}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {PHONE_NUMBER}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {EMAIL}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Coverage Area</p>
                      <p className="font-semibold text-foreground">
                        All of Hampshire, UK
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Office Hours</p>
                      <p className="font-semibold text-foreground">
                        Mon–Fri: 8:00am – 6:00pm
                      </p>
                      <p className="text-sm text-gray-500">
                        Emergency call-outs available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3">Same-Week Surveys</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We offer same-week survey appointments across Hampshire.
                  Contact us today and we will arrange a convenient date for your
                  property inspection.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Call us now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
