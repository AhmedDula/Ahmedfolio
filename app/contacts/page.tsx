import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Ahmed Adel for web development projects, collaborations, freelance work, and professional opportunities.",
  alternates: {
    canonical: "/contact",
  },
};
import Contact from "./Contact";

function Page() {
  return (
    <main className="overflow-hidden bg-background relative z-2">
      <Contact />
    </main>
  );
}

export default Page;
