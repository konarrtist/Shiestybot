// Force this segment to run on Cloudflare's Edge
export const runtime = "edge";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar for SHiESTY RAiDERS */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-6 hidden md:block">
        <h2 className="mb-8 text-xl font-bold tracking-tighter text-red-500">
          SHiESTY OPS
        </h2>
        <nav className="space-y-4">
          <div className="text-sm font-medium text-zinc-400">Inventory</div>
          <div className="text-sm font-medium text-zinc-400">Blueprints</div>
          <div className="text-sm font-medium text-zinc-400">Trade Hub</div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-black p-8">
        {children}
      </main>
    </div>
  );
}
