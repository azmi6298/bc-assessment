import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router'
import type { FlightData } from '~/api/domain/FlightData'
import { format24HoursTime } from '~/lib/utils'

interface FlightListProps {
  list: FlightData[]
}

export default function FlightList({ list }: FlightListProps) {
  const navigate = useNavigate()

  function handleSelectFlight(flight: FlightData) {
    const formattedDate = flight.departureTime
      ? format(flight.departureTime, 'yyyy-MM-dd')
      : ''

    const queryParamArray = [
      `origin=${flight.origin}`,
      `destination=${flight.destination}`,
      `date=${formattedDate}`,
    ]

    navigate(`/select-seat?${queryParamArray.join('&')}`)
  }

  return (
    <div className="grid gap-y-8">
      {!list.length && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Tidak ada penerbangan yang tersedia
          </h2>
          <p className="text-gray-500">Silakan coba lagi nanti.</p>
        </div>
      )}

      {list.length > 0 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Penerbangan Tersedia</h2>
          <p className="text-gray-500">
            Silakan pilih penerbangan yang Anda inginkan.
          </p>
        </div>
      )}

      {list.map((flight) => (
        <div
          onClick={() => handleSelectFlight(flight)}
          key={flight.id}
          className="flex flex-col gap-y-4 md:flex-row items-center justify-between p-4 bg-slate-100 border hover:border-orange-500 rounded-lg shadow-md hover:shadow-xl cursor-pointer"
        >
          <div className="flex md:flex-col gap-2 items-center">
            <h2 className="text-gray-500">Maskapai</h2>
            <h1 className="md:text-2xl font-bold">{flight.airlineCode}</h1>
          </div>

          <div className="grid gap-y-2">
            <div className="flex items-center gap-x-8">
              <h3 className="md:text-xl font-semibold">{flight.origin}</h3>
              <hr className="border border-black w-16" />
              <h3 className="md:text-xl font-semibold">{flight.destination}</h3>
            </div>

            <div className="flex gap-x-32">
              <p className="text-gray-500">
                {format24HoursTime(flight.departureTime)}
              </p>
              <p className="text-gray-500">
                {format24HoursTime(flight.arrivalTime)}
              </p>
            </div>
          </div>

          <h2 className="text-orange-500 md:text-2xl font-semibold">
            {flight.averagePrice.currency} {flight.averagePrice.amount}
          </h2>
        </div>
      ))}
    </div>
  )
}
