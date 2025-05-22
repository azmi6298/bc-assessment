import { getFlightList } from '~/api/gateway/flights/FlightsApi'
import type { Route } from './+types/flights'
import FlightList from '~/components/list/FlightList'

export function meta() {
  return [{ title: 'Pilih Penerbangan' }]
}

export async function loader({ request }: Route.LoaderArgs) {
  const searchParams = new URL(request.url).searchParams

  const flightList = await getFlightList(
    searchParams.get('origin')!,
    searchParams.get('destination')!,
    new Date(searchParams.get('date')!),
  )

  return { flightList }
}

export default function FlightsPage({ loaderData }: Route.ComponentProps) {
  const { flightList } = loaderData

  return <FlightList list={flightList} />
}
