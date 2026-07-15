"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import Button from "../ui/Button";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function EnquiryForm() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<SubmitState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const body = new FormData();
      body.append("name", form.name.trim());
      body.append("email", form.email.trim());
      body.append("phone", form.phone.trim());
      body.append("message", form.message.trim());

      const res = await fetch("/enquire.php", {
        method: "POST",
        body,
      });

      let data: { success?: boolean; error?: string } = {};
      try {
        data = await res.json();
      } catch {
        // Non-JSON response — treat as failure
      }

      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBaseClass =
    "w-full bg-bg-card border rounded-[10px] px-4 py-3 text-text-primary font-[family-name:var(--font-dm-sans)] text-[0.95rem] placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/40 transition-all duration-200";

  return (
    <section
      id="enquire"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-[720px] mx-auto">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-primary text-[0.75rem] uppercase tracking-[0.2em] block mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-text-primary text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="font-[family-name:var(--font-dm-sans)] text-[1.05rem] leading-[1.7] text-text-secondary text-center mb-12 max-w-[520px] mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interested in our programme? Fill in the form below and we&apos;ll get
          back to you.
        </motion.p>

        {/* Form */}
        <motion.div
          className="bg-bg-card rounded-[20px] p-8 md:p-10 border border-[var(--border-card)] shadow-[var(--shadow-md)]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-accent-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[1.3rem] text-text-primary mb-3">
                Thanks for your enquiry!
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[1rem] leading-relaxed">
                We&apos;ll be in touch soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 font-[family-name:var(--font-jetbrains-mono)] text-[0.8rem] text-accent-primary hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="block font-[family-name:var(--font-outfit)] font-medium text-[0.85rem] text-text-primary mb-2"
                >
                  Name <span className="text-accent-primary">*</span>
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={`${inputBaseClass} ${
                    errors.name
                      ? "border-red-400 focus:ring-red-400/40"
                      : "border-[var(--border-card)]"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1.5 font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="enquiry-email"
                  className="block font-[family-name:var(--font-outfit)] font-medium text-[0.85rem] text-text-primary mb-2"
                >
                  Email <span className="text-accent-primary">*</span>
                </label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={`${inputBaseClass} ${
                    errors.email
                      ? "border-red-400 focus:ring-red-400/40"
                      : "border-[var(--border-card)]"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="block font-[family-name:var(--font-outfit)] font-medium text-[0.85rem] text-text-primary mb-2"
                >
                  Phone <span className="text-accent-primary">*</span>
                </label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className={`${inputBaseClass} ${
                    errors.phone
                      ? "border-red-400 focus:ring-red-400/40"
                      : "border-[var(--border-card)]"
                  }`}
                  placeholder="07000 000000"
                />
                {errors.phone && (
                  <p className="mt-1.5 font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="block font-[family-name:var(--font-outfit)] font-medium text-[0.85rem] text-text-primary mb-2"
                >
                  Message <span className="text-accent-primary">*</span>
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputBaseClass} resize-y min-h-[120px] ${
                    errors.message
                      ? "border-red-400 focus:ring-red-400/40"
                      : "border-[var(--border-card)]"
                  }`}
                  placeholder="Tell us a bit about what you're looking for..."
                />
                {errors.message && (
                  <p className="mt-1.5 font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Error banner */}
              {status === "error" && (
                <div className="rounded-[10px] border border-red-300 bg-red-50 px-4 py-3">
                  <p className="font-[family-name:var(--font-dm-sans)] text-[0.9rem] text-red-700 leading-relaxed">
                    Something went wrong. Please try again or email us directly
                    at{" "}
                    <a
                      href="mailto:teighlor@tphealthfitness.com"
                      className="underline font-medium"
                    >
                      teighlor@tphealthfitness.com
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="large"
                  type="submit"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
