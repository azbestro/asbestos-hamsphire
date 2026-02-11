"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import {
  ArrowRight,
  Upload,
  X,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Home,
  Building2,
  Factory,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

const MAX_FILES = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type FormStatus = "idle" | "submitting" | "success" | "error";
type PropertyType = "" | "Domestic" | "Commercial" | "Industrial";

const PROPERTY_TYPES = [
  { value: "Domestic" as const, label: "Domestic", icon: Home, desc: "House, flat, bungalow" },
  { value: "Commercial" as const, label: "Commercial", icon: Building2, desc: "Office, shop, school" },
  { value: "Industrial" as const, label: "Industrial", icon: Factory, desc: "Warehouse, factory, site" },
];

const URGENCY_OPTIONS = [
  { value: "ASAP", label: "ASAP", color: "bg-red-50 border-red-200 text-red-700 hover:bg-red-100", activeColor: "bg-red-600 border-red-600 text-white" },
  { value: "Within a week", label: "Within a Week", color: "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100", activeColor: "bg-amber-500 border-amber-500 text-white" },
  { value: "Within a month", label: "Within a Month", color: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100", activeColor: "bg-blue-600 border-blue-600 text-white" },
  { value: "Just enquiring", label: "Just Enquiring", color: "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100", activeColor: "bg-gray-600 border-gray-600 text-white" },
];

const BEDROOM_OPTIONS = ["Studio", "1", "2", "3", "4", "5+"];

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function MiniCalendar({
  selected,
  onSelect,
  disabled,
}: {
  selected: string;
  onSelect: (date: string) => void;
  disabled: boolean;
}) {
  const [viewDate, setViewDate] = useState(() => new Date());
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const monthLabel = new Date(year, month).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const formatDate = (day: number) => {
    const d = new Date(year, month, day);
    return d.toISOString().split("T")[0];
  };

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    return d < today;
  };

  const canGoPrev = new Date(year, month, 1) > today;

  return (
    <div className="border border-border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={prevMonth}
          disabled={disabled || !canGoPrev}
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-foreground">{monthLabel}</span>
        <button
          type="button"
          onClick={nextMonth}
          disabled={disabled}
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-xs font-medium text-gray-400 py-1">
            {d}
          </div>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;
          const dateStr = formatDate(day);
          const isSelected = selected === dateStr;
          const past = isPast(day);
          const isToday = dateStr === today.toISOString().split("T")[0];
          return (
            <button
              key={dateStr}
              type="button"
              disabled={disabled || past}
              onClick={() => onSelect(isSelected ? "" : dateStr)}
              className={`
                w-full aspect-square rounded-lg text-sm font-medium transition-all flex items-center justify-center
                ${past ? "text-gray-300 cursor-not-allowed" : ""}
                ${isSelected ? "bg-primary text-white shadow-sm" : ""}
                ${!isSelected && !past ? "hover:bg-primary/10 text-foreground" : ""}
                ${isToday && !isSelected ? "ring-1 ring-primary/40" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
      {selected && (
        <p className="text-xs text-primary font-medium mt-3 text-center">
          Preferred date: {new Date(selected + "T00:00:00").toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType>("");
  const [bedrooms, setBedrooms] = useState("");
  const [urgency, setUrgency] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      const incoming = Array.from(newFiles);
      const valid: File[] = [];

      for (const file of incoming) {
        if (files.length + valid.length >= MAX_FILES) break;
        if (!ACCEPTED_TYPES.includes(file.type)) {
          setErrorMsg(`${file.name}: File type not accepted. Use PDF, JPG, PNG, or Word.`);
          continue;
        }
        if (file.size > MAX_FILE_SIZE) {
          setErrorMsg(`${file.name}: File too large. Maximum 5MB per file.`);
          continue;
        }
        valid.push(file);
      }

      if (valid.length > 0) {
        setFiles((prev) => [...prev, ...valid]);
        setErrorMsg("");
      }
    },
    [files.length]
  );

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        addFiles(e.dataTransfer.files);
      }
    },
    [addFiles]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add state-managed fields
    formData.set("propertyType", propertyType);
    formData.set("bedrooms", propertyType === "Domestic" ? bedrooms : "");
    formData.set("urgency", urgency);
    formData.set("preferredDate", preferredDate);

    // Remove any existing file entries and re-add our managed files
    formData.delete("files");
    for (const file of files) {
      formData.append("files", file);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
      setFiles([]);
      setPropertyType("");
      setBedrooms("");
      setUrgency("");
      setPreferredDate("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection or call us directly.");
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isSubmitting = status === "submitting";

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-green-900 mb-3">
          Enquiry Sent Successfully
        </h2>
        <p className="text-green-700 leading-relaxed max-w-md mx-auto mb-2">
          Thank you for your enquiry. We&apos;ve sent you a confirmation email
          and will be in touch within one working day.
        </p>
        <p className="text-green-600 text-sm">
          For urgent matters, call us on{" "}
          <a href="tel:+447424521865" className="font-semibold underline">
            07424 521865
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-green-700 underline hover:text-green-900"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="space-y-7"
    >
      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-50"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-50"
            placeholder="Your phone number"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-50"
          placeholder="your@email.com"
        />
      </div>

      {/* Property Type Cards */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Property Type
        </label>
        <div className="grid grid-cols-3 gap-3">
          {PROPERTY_TYPES.map((pt) => {
            const Icon = pt.icon;
            const isActive = propertyType === pt.value;
            return (
              <button
                key={pt.value}
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  setPropertyType(isActive ? "" : pt.value);
                  if (isActive || pt.value !== "Domestic") setBedrooms("");
                }}
                className={`
                  relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all disabled:opacity-50
                  ${isActive
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border hover:border-primary/30 hover:bg-muted/50"
                  }
                `}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? "bg-primary text-white" : "bg-muted text-gray-500"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                  {pt.label}
                </span>
                <span className="text-xs text-gray-400 leading-tight text-center">
                  {pt.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bedrooms — only for Domestic */}
      {propertyType === "Domestic" && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-200">
          <label className="block text-sm font-semibold text-foreground mb-3">
            Number of Bedrooms
          </label>
          <div className="flex flex-wrap gap-2">
            {BEDROOM_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                disabled={isSubmitting}
                onClick={() => setBedrooms(bedrooms === opt ? "" : opt)}
                className={`
                  px-4 py-2 rounded-lg border text-sm font-medium transition-all disabled:opacity-50
                  ${bedrooms === opt
                    ? "bg-primary border-primary text-white"
                    : "border-border text-foreground hover:border-primary/30 hover:bg-muted/50"
                  }
                `}
              >
                {opt === "Studio" ? "Studio" : `${opt} Bed`}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Service + Location */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Service Required
          </label>
          <select
            id="service"
            name="service"
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white disabled:opacity-50"
          >
            <option value="">Select a service</option>
            <option value="Asbestos Survey">Asbestos Survey</option>
            <option value="Asbestos Removal">Asbestos Removal</option>
            <option value="Asbestos Encapsulation">Asbestos Encapsulation</option>
            <option value="Asbestos Sampling">Asbestos Sampling</option>
            <option value="Asbestos Testing">Asbestos Testing</option>
            <option value="Asbestos Disposal">Asbestos Disposal</option>
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Property Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-50"
            placeholder="e.g., Southampton, Winchester"
          />
        </div>
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          How Soon Do You Need This?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {URGENCY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              disabled={isSubmitting}
              onClick={() => setUrgency(urgency === opt.value ? "" : opt.value)}
              className={`
                px-3 py-2.5 rounded-lg border text-sm font-semibold transition-all disabled:opacity-50
                ${urgency === opt.value ? opt.activeColor : opt.color}
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preferred Date — Mini Calendar */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-primary" />
          Preferred Survey Date{" "}
          <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <MiniCalendar
          selected={preferredDate}
          onSelect={setPreferredDate}
          disabled={isSubmitting}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-foreground mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y disabled:opacity-50"
          placeholder="Tell us about your requirements — any known asbestos, planned works, access details, etc."
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Attachments{" "}
          <span className="font-normal text-gray-400">
            (optional — photos, reports, plans)
          </span>
        </label>
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`
            relative cursor-pointer border-2 border-dashed rounded-xl p-6 text-center transition-colors
            ${
              dragActive
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/40 hover:bg-muted/50"
            }
            ${files.length >= MAX_FILES ? "opacity-50 pointer-events-none" : ""}
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx"
            onChange={(e) => {
              if (e.target.files) addFiles(e.target.files);
              e.target.value = "";
            }}
            className="hidden"
          />
          <Upload className="w-7 h-7 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 font-medium">
            {dragActive ? (
              "Drop files here"
            ) : (
              <>
                Drag &amp; drop files here, or{" "}
                <span className="text-primary underline">browse</span>
              </>
            )}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            PDF, JPG, PNG, Word — max 5MB each — up to {MAX_FILES} files
          </p>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3"
              >
                <FileText className="w-5 h-5 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Error */}
      {(status === "error" || errorMsg) && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">
            {errorMsg || "Something went wrong. Please try again or call us directly."}
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
