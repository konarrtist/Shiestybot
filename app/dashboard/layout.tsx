// This line tells Cloudflare to use its fast Edge network
export const runtime = 'edge'; 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-zinc-800 p-4">
        <h1 className="text-xl font-bold">SHiESTY DASHBOARD</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r border-zinc-800 p-4">
          {/* Navigation links go here */}
          <nav className="space-y-2">
            <p className="text-zinc-500">Main Menu</p>
            <div className="rounded bg-zinc-900 p-2">Marketplace</div>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
