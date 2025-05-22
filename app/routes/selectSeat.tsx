import { getFlightList } from '~/api/gateway/flights/FlightsApi'
import type { Route } from './+types/selectSeat'
import SeatMapComponent from '~/components/seat-map/SeatMapComponent'

export function meta() {
  return [{ title: 'Pilih Kursi' }]
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

export default function SelectSeatPage({ loaderData }: Route.ComponentProps) {
  const { flightList } = loaderData
  const seatMap = flightList[0]?.seatMap || []

  return (
    <div className="grid justify-center gap-y-8">
      <div className="text-center">
        <span className="font-semibold text-2xl">
          Pilih Kursi yang Anda Inginkan
        </span>
      </div>
      <SeatMapComponent seatMap={seatMap} />
    </div>
  )
}
