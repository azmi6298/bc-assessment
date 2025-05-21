import { getFlightList } from '~/api/gateway/airports/AirportsApi'
import type { Route } from './+types/flights'

export async function loader({ params }: Route.LoaderArgs) {
  const flightList = await getFlightList()
  return flightList
}

export default function Flights({ loaderData }: Route.ComponentProps) {
  const flightList = loaderData

  return (
    <div className="grid gap-y-2">
      {!flightList.length && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Tidak ada penerbangan yang tersedia
          </h2>
          <p className="text-gray-500">Silakan coba lagi nanti.</p>
        </div>
      )}

      {flightList.map((flight) => (
        <div key={flight.id} className="p-4 border rounded-md">
          <h3 className="text-xl font-semibold">{flight.origin}</h3>
          <h3 className="text-xl font-semibold">{flight.destination}</h3>
          <p className="text-gray-500">{flight.departureTime}</p>
          <p className="text-gray-500">{flight.arrivalTime}</p>
          {/* <p className="text-gray-700">Harga: {flight.price}</p> */}
        </div>
      ))}
    </div>
  )
}
