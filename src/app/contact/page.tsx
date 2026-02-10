"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { PHONE_NUMBER, PHONE_HREF, EMAIL } from "@/lib/constants";

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
              <form
                action={`mailto:${EMAIL}?subject=Asbestos%20Service%20Enquiry`}
                method="POST"
                encType="text/plain"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const name = formData.get("name") as string;
                  const phone = formData.get("phone") as string;
                  const email = formData.get("email") as string;
                  const service = formData.get("service") as string;
                  const location = formData.get("location") as string;
                  const message = formData.get("message") as string;
                  if (!name || !phone || !email || !message) {
                    alert("Please fill in all required fields.");
                    return;
                  }
                  const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService: ${service}%0ALocation: ${location}%0AMessage: ${message}`;
                  window.location.href = `mailto:${EMAIL}?subject=Asbestos Service Enquiry from ${encodeURIComponent(name)}&body=${body}`;
                }}
                aria-label="Contact form"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="survey">Asbestos Survey</option>
                    <option value="removal">Asbestos Removal</option>
                    <option value="encapsulation">Asbestos Encapsulation</option>
                    <option value="sampling">Asbestos Sampling</option>
                    <option value="testing">Asbestos Testing</option>
                    <option value="disposal">Asbestos Disposal</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
                    Property Location (Hampshire)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="e.g., Southampton, Winchester"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors"
                >
                  Send Enquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
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
