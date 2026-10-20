export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-white mb-8">
        NorthGrid Design System Test
      </h1>

      {/* Changed md:grid-cols-4 to md:grid-cols-5 to accommodate all 5 boxes */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Background Primary Swatch */}
        <div className="bg-primary border border-slate-700 rounded-lg p-6 text-center">
          <p className="text-white font-semibold">bg-primary</p>
          <p className="text-slate-400 text-sm">#0B0F19</p>
        </div>

        {/* Background Secondary Swatch */}
        <div className="bg-secondary border border-slate-700 rounded-lg p-6 text-center">
          <p className="text-white font-semibold">bg-secondary</p>
          <p className="text-slate-400 text-sm">#111827</p>
        </div>

        {/* Accent Blue Swatch */}
        <div className="bg-accent-blue rounded-lg p-6 text-center">
          <p className="text-white font-semibold">accent-blue</p>
          <p className="text-blue-100 text-sm">#2563EB</p>
        </div>

        {/* Accent Cyan Swatch */}
        <div className="bg-accent-cyan rounded-lg p-6 text-center">
          <p className="text-white font-semibold">accent-cyan</p>
          <p className="text-cyan-100 text-sm">#0284C7</p>
        </div>

        {/* Status Green Swatch */}
        <div className="bg-status-green rounded-lg p-6 text-center">
          <p className="text-white font-semibold">status-green</p>
          <p className="text-emerald-100 text-sm">#10B981</p>
        </div>
      </div>

      <p className="mt-10 text-slate-300">
        This paragraph is using our Inter font — notice how clean and modern
        it looks compared to default system fonts.
      </p>
    </main>
  );
}