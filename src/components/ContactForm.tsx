"use client";

import { useState, useRef, useCallback } from "react";
import {
  ArrowRight,
  Upload,
  X,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
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

export default function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [dragActive, setDragActive] = useState(false);
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
      className="space-y-6"
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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-50"
          placeholder="your@email.com"
        />
      </div>

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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors disabled:opacity-50"
            placeholder="e.g., Southampton, Winchester"
          />
        </div>
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
          disabled={status === "submitting"}
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y disabled:opacity-50"
          placeholder="Tell us about your requirements — property type, any known asbestos, planned works, etc."
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
            relative cursor-pointer border-2 border-dashed rounded-xl p-8 text-center transition-colors
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
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
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
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold text-lg rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
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
