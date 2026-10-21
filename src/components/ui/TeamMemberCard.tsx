import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

// Takes "Arif Rahman" and returns "AR"
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-bg-secondary p-6 text-center transition-colors hover:border-accent-cyan/50">
      {/* Initials Avatar Circle */}
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-blue/10 text-xl font-bold text-accent-blue">
        {getInitials(member.name)}
      </div>

      <h3 className="font-semibold text-white">{member.name}</h3>
      <p className="mt-1 text-sm text-accent-cyan">{member.role}</p>
      <p className="mt-3 text-sm text-slate-400">{member.bio}</p>
    </div>
  );
}