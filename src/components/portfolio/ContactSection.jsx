import { useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { profile } from "../../data/portfolioData";
import { SectionHeading } from "./SectionHeading";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message saved. Thu will be able to review it soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error?.response?.data?.detail || "Message could not be sent. Please email Thu directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32" data-testid="contact-section">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something extraordinary."
            description="For senior software engineering roles, product teams, and technical leadership conversations, send a message here or reach out directly."
            testId="contact"
          />
          <div className="space-y-4" data-testid="contact-direct-links">
            <a href={`mailto:${profile.email}`} className="block border border-white/10 p-5 text-white/70 transition-colors duration-300 hover:bg-white hover:text-black" data-testid="contact-email-link">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="block border border-white/10 p-5 text-white/70 transition-colors duration-300 hover:bg-white hover:text-black" data-testid="contact-phone-link">
              {profile.phone}
            </a>
          </div>
        </div>
        <form className="glass-card p-6 sm:p-8" onSubmit={handleSubmit} data-testid="contact-form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2" data-testid="contact-name-field-wrap">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/45" data-testid="contact-name-label">Name</span>
              <Input
                required
                minLength={2}
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                className="h-12 rounded-none border-white/10 bg-black/30 text-white placeholder:text-white/25 focus-visible:ring-white/40"
                data-testid="contact-name-input"
              />
            </label>
            <label className="space-y-2" data-testid="contact-email-field-wrap">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/45" data-testid="contact-email-label">Email</span>
              <Input
                required
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@company.com"
                className="h-12 rounded-none border-white/10 bg-black/30 text-white placeholder:text-white/25 focus-visible:ring-white/40"
                data-testid="contact-email-input"
              />
            </label>
          </div>
          <label className="mt-5 block space-y-2" data-testid="contact-message-field-wrap">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/45" data-testid="contact-message-label">Message</span>
            <Textarea
              required
              minLength={10}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell Thu about the role, team, or product challenge."
              className="min-h-44 rounded-none border-white/10 bg-black/30 text-white placeholder:text-white/25 focus-visible:ring-white/40"
              data-testid="contact-message-textarea"
            />
          </label>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 h-14 w-full rounded-none bg-white font-mono text-xs uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:-translate-y-1 hover:bg-white disabled:translate-y-0"
            data-testid="contact-submit-button"
          >
            {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="mt-5 text-center text-xs leading-6 text-white/35" data-testid="contact-form-helper-text">
            Messages are securely stored for portfolio inquiries.
          </p>
        </form>
      </div>
    </section>
  );
};