import { useNavigate } from 'react-router'
import type { SeatMap } from '~/api/domain/FlightData'

interface SeatMapProps {
  seatMap: SeatMap[]
}

export default function SeatMapComponent(props: SeatMapProps) {
  const navigate = useNavigate()

  function handleSelectSeat() {
    navigate('/passenger-info')
  }

  return (
    <>
      {props.seatMap.map((row, index) => (
        <div key={index} className="flex">
          {row.seats.map((seat, seatIndex) => {
            if (seat.slotCode === 'AISLE') {
              return <div className="w-16 h-16" />
            }

            if (seat.slotCode === 'SEAT') {
              return (
                <div
                  onClick={handleSelectSeat}
                  key={seatIndex}
                  className={`cursor-pointer w-16 h-16 border flex items-center justify-center ${
                    seat.isAvailable ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {seat.code}
                </div>
              )
            }
          })}
        </div>
      ))}
    </>
  )
}
