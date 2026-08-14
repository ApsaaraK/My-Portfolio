import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, XCircle, Mail } from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "./BrandIcons";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const WEB3FORMS_KEY = "9b081f5a-fcf9-4f3a-a254-82c4c74be4e8";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Contact from Portfolio - tiruni.me");
    formData.append("from_name", "Portfolio Contact Form");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28" style={{ backgroundColor: "var(--md-surface-dim)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Contact" title="Let's work together" description="Open to data engineering roles and freelance projects." />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            <ContactLink icon={<Mail size={17} />} label={profile.email} href={`mailto:${profile.email}`} />
            <ContactLink icon={<LinkedinGlyph size={17} />} label="LinkedIn" href={profile.links.linkedin} />
            <ContactLink icon={<GithubGlyph size={17} />} label="GitHub" href={profile.links.github} />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-3 rounded-2xl p-6 sm:p-8 space-y-4"
            style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}
          >
            <Field id="name" name="name" label="Name" required />
            <Field id="email" name="email" label="Email" type="email" required />
            <Field id="message" name="message" label="Message" textarea required />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-transform hover:scale-[1.01] disabled:opacity-60"
              style={{ backgroundColor: "var(--md-primary)", color: "var(--md-on-primary)" }}
            >
              {status === "sending" ? "Sending…" : "Send message"}
              {status !== "sending" && <Send size={15} />}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-[14px]" style={{ color: "#188038" }}>
                <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-[14px]" style={{ color: "#d93025" }}>
                <XCircle size={16} /> Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 px-5 py-4 rounded-2xl transition-colors"
      style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)", color: "var(--md-on-surface)" }}
    >
      <span style={{ color: "var(--md-primary)" }}>{icon}</span>
      <span className="text-[14.5px] font-medium">{label}</span>
    </a>
  );
}

function Field({ id, name, label, type = "text", textarea = false, required }) {
  const common =
    "w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-colors bg-transparent";
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium mb-1.5" style={{ color: "var(--md-on-surface-variant)" }}>
        {label}
      </label>
      {textarea ? (
        <textarea id={id} name={name} required={required} rows={4} className={common} style={fieldStyle} />
      ) : (
        <input id={id} name={name} type={type} required={required} className={common} style={fieldStyle} />
      )}
    </div>
  );
}

const fieldStyle = { border: "1px solid var(--md-outline)", color: "var(--md-on-surface)" };
