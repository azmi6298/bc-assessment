import { Link } from 'react-router'

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-200 ">
      <header className="flex items-center justify-center py-8">
        <Link to="/">
          <h1 className="text-xl font-bold">
            <span className="text-blue-900 dark:text-white">Pesan</span>
            <span className="text-orange-500">Tiket</span>
          </h1>
        </Link>
      </header>
      <div className="container max-w-3xl mx-auto px-4 py-8">{children}</div>
    </main>
  )
}
