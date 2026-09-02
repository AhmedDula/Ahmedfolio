"use client";

import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { sendEmail } from "@/app/actions/send-emails";

const fields = [
  { name: "name", label: "Your name", type: "input" as const },
  { name: "title", label: "Job title", type: "input" as const },
  { name: "email", label: "Email", type: "input" as const },
  { name: "message", label: "Message", type: "textarea" as const },
];

const socials = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/ahmed-adel-said/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    ),
  },
  {
    label: "Github",
    href: "https://github.com/AhmedDula",
    icon: <BsGithub size={18} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jr.ahmd/",
    icon: (
      <path d="M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm0 6.1a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8ZM16.9 8a.88.88 0 1 1-1.76 0 .88.88 0 0 1 1.76 0ZM20 7.3c-.06-1.2-.33-2.27-1.2-3.14-.86-.87-1.93-1.14-3.13-1.2C14.4 2.9 9.6 2.9 8.33 2.96c-1.2.06-2.26.33-3.13 1.2S3.96 6.1 3.9 7.3C3.84 8.6 3.84 15.4 3.9 16.7c.06 1.2.33 2.27 1.2 3.14 1.2.87 1.14 1.94 1.2 3.14.06 1.27.06 6.07 0 7.34 0 1.2-.06 2.27-1.2 3.13-1.2.87-1.14 1.94-1.2 3.14-.06 1.27-.06 6.07 0 7.4ZM18.4 18a2.6 2.6 0 0 1-1.47 1.47c-1.02.4-3.44.31-4.93.31s-3.91.09-4.93-.31A2.6 2.6 0 0 1 5.6 18c-.4-1.02-.31-3.44.31-4.93s-.09-3.91.31-4.93A2.6 2.6 0 0 1 7.07 5.67c1.02-.4 3.44-.31 4.93-.31s3.91-.09 4.93.31A2.6 2.6 0 0 1 18.4 7.14c.4-1.02.31-3.44-.31-4.93Z" />
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus("sent");
        form.reset();

        
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="min-h-screen px-6 py-16 sm:px-10 sm:py-24 lg:px-20">
      <div className="mx-auto flex max-w-3xl flex-col">
        {/* Heading */}
        <h1 className="font-display text-[clamp(3.5rem,14vw,9rem)] font-black leading-[0.85] tracking-tight text-orange-700">
          Reach Out
        </h1>

        <p className="mt-8 max-w-xl font-display text-2xl font-bold leading-snug text-[#f5f5f4] sm:text-3xl">
          Tell me about your idea.
          <br />
          I&rsquo;ll take it from there.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-14 w-full">
          <div className="flex flex-col">
            {fields.map((field) => (
              <label
                key={field.name}
                className="block border-b border-white/18 py-4 duration-200 focus-within:border-white sm:py-5"
              >
                <span className="sr-only">{field.label}</span>

                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    placeholder={field.label}
                    required
                    rows={1}
                    className="w-full resize-y bg-transparent text-lg text-[#f5f5f4] placeholder:text-white/40 focus:outline-none"
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.name === "email" ? "email" : "text"}
                    placeholder={field.label}
                    required
                    className="w-full bg-transparent text-lg text-[#f5f5f4] placeholder:text-white/40 focus:outline-none"
                  />
                )}
              </label>
            ))}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#f5f5f4] px-8 py-4 text-sm font-semibold text-[#0b0b0c] transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Sending…"}
            {status === "sent" && "Message sent ✓"}
            {status === "error" && "Try again"}
          </button>

          {/* Status message */}
          {status === "sent" && (
            <p className="mt-4 text-sm text-white/50">
              Thanks! I&rsquo;ll get back to you as soon as possible.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Contact Information */}
        <div className="mt-24 flex flex-col gap-2 text-base text-[#f5f5f4]/90 sm:text-lg">
          <p>
            <span className="font-semibold text-[#f5f5f4]">Office: </span>
            Egypt
          </p>

          <p>
            <span className="font-semibold text-[#f5f5f4]">Mail:</span>{" "}
            <a
              href="mailto:ahmedadeldiv@gmail.com"
              className="transition-colors hover:text-orange-700"
            >
              ahmedadeldiv@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-[#f5f5f4]">Phone:</span>{" "}
            <a
              href="tel:+201090324648"
              className="transition-colors hover:text-orange-700"
            >
              +2010- 9032- 4648
            </a>
          </p>
        </div>

        {/* Socials */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#f5f5f4]/90 transition-colors hover:text-orange-700"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/18">
                {label === "Github" ? (
                  icon
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="currentColor"
                  >
                    {icon}
                  </svg>
                )}
              </span>

              <span className="text-base">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}