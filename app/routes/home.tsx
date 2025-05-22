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
    <div className="grid gap-y-8">
      <div className="text-center">
        <span className="font-semibold text-2xl">Cari Tiket Pilihanmu</span>
      </div>

      <SearchFlightForm airports={airports} />
    </div>
  )
}
