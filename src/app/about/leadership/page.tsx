import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { teamMembers } from "@/constants/siteData";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export const metadata: Metadata = {
  title: "Leadership Team | NorthGrid Data Centers",
  description: "Meet the leadership team driving NorthGrid's infrastructure forward.",
};

export default function LeadershipPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Back Link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Page Header */}
      <div className="mb-12 border-b border-slate-800 pb-10">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Leadership Team
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Our leadership brings decades of combined experience in
          telecommunications, infrastructure security, and enterprise
          operations across Bangladesh.
        </p>
      </div>

      {/* Team Grid */}
      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-accent-blue/30 bg-accent-blue/5 p-8 text-center">
        <h3 className="text-xl font-bold text-white">
          Want to join our team?
        </h3>
        <p className="mt-2 text-slate-400">
          We&apos;re always looking for talented infrastructure engineers
        </p>
        <Link
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Get In Touch
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}