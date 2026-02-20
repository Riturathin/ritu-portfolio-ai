import "./globals.css";
import Link from "next/link";
import FloatingAI from "@/components/FloatingAI";
import AuthorityBanner from "@/components/AuthorityBanner";
import NavLinks from "@/components/NavLinks";

export const metadata = {
  title: "Ritumoni Sarma — Staff Engineer | Frontend Architect with AI Integration",
  description:
    "Staff Engineer specializing in scalable frontend architecture and AI-integrated systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue text-sm text-white/80 hover:text-white transition">

        <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
            <Link href="/" className="font-semibold">
              Ritu
            </Link>

            <div className="space-x-6 text-sm">
              <NavLinks route="/routes/experience" label="Experience" />
              <NavLinks route="/routes/architecture" label="Architecture" />
              <NavLinks route="/routes/ai-integration" label="AI Integration" />
              <NavLinks route="/routes/projects" label="Projects" />
              <NavLinks route="/routes/contact" label="Contact" />
            </div>
          </div>
        </nav>

        {/* Spacer for fixed nav */}
        <div className="h-[72px]" />

        {/* Constrained Content */}
        <main>
          {children}
        </main>

        <FloatingAI />

      </body>
    </html >
  );
}