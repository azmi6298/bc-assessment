import { Layout } from '~/components/layout/Layout'
import { SearchFlightForm } from '~/components/form/SearchFlightForm'

export function meta() {
  return [{ title: 'Pesan Tiket' }]
}

export default function Home() {
  return (
    <Layout>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl mb-4">
          <span className="text-blue-900 dark:text-white">Pesan</span>
          <span className="text-orange-500">Tiket</span>
        </h1>
      </header>

      <div className="max-w-3xl mx-auto">
        <SearchFlightForm />
      </div>
    </Layout>
  )
}
