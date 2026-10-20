import { colocationPlans, starlinkKits, partners } from "@/constants/siteData";

export default function Home() {
  return (
    <main className="min-h-screen p-10 text-white">
      <h1 className="text-4xl font-bold mb-6">Data Connection Test</h1>

      <h2 className="text-2xl font-semibold mb-2">Colocation Plans ({colocationPlans.length})</h2>
      <ul className="mb-6 text-slate-300">
        {colocationPlans.map((plan) => (
          <li key={plan.id}>
            {plan.name} — ৳{plan.priceMonthly.toLocaleString()}/month
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Starlink Kits ({starlinkKits.length})</h2>
      <ul className="mb-6 text-slate-300">
        {starlinkKits.map((kit) => (
          <li key={kit.id}>
            {kit.name} — ৳{kit.priceBDT.toLocaleString()}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Partners ({partners.length})</h2>
      <ul className="text-slate-300">
        {partners.map((partner) => (
          <li key={partner.name}>{partner.name}</li>
        ))}
      </ul>
    </main>
  );
}