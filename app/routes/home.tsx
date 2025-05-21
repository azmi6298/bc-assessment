import { SearchFlightForm } from '~/components/form/SearchFlightForm'
import { getAirportList } from '~/api/gateway/airports/AirportsApi'
import type { Route } from './+types/home'

export function meta() {
  return [{ title: 'Pesan Tiket' }]
}

export async function loader() {
  const airports = await getAirportList()
  return airports
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const airports = loaderData

  return (
    <>
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl mb-4">
          <span className="text-blue-900 dark:text-white">Pesan</span>
          <span className="text-orange-500">Tiket</span>
        </h1>
      </header>

      <div className="max-w-3xl mx-auto">
        <SearchFlightForm airports={airports} />
      </div>
    </>
  )
}
