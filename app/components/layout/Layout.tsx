import { Toaster } from 'sonner'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-slate-200 ">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
      <Toaster />
    </>
  )
}
