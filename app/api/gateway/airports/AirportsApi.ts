import type { FlightData } from '~/api/domain/FlightData'
import type { Option } from '~/components/input/Select'
import seatMapResponse from '~/api/sample-data/SeatMapResponse.json'

const mockAirports: Option<string>[] = [
  { label: 'Jakarta (CGK)', value: 'CGK' },
  { label: 'Bandung (BDO)', value: 'BDO' },
  { label: 'Kuala Lumpur (KUL)', value: 'KUL' },
  { label: 'Bali (DPS)', value: 'DPS' },
]

export function getAirportList(): Promise<Option<string>[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAirports)
    }, 2000)
  })
}

export function getFlightList(
  origin?: string,
  destination?: string,
  date?: Date,
): Promise<FlightData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const flightDataArray: FlightData[] =
        seatMapResponse.seatsItineraryParts[0].segmentSeatMaps
          .filter((data) => {
            // Filter based on origin, destination, and date
            const flightDate = new Date(data.segment.departure).toDateString()
            return (
              data.segment.origin === origin &&
              data.segment.destination === destination &&
              flightDate === date?.toDateString()
            )
          })
          .map((data) => {
            const seatMap = data.passengerSeatMaps.flatMap(
              (seat): FlightData['seatMap'] => {
                const seats = seat.seatMap.cabins[0].seatRows

                return seats.map((row) => {
                  return {
                    rowNumber: row.rowNumber,
                    seats: row.seats.map((seat) => {
                      return {
                        slotCode: seat.storefrontSlotCode,
                        code: seat.code,
                        isAvailable: seat.available,
                        prices:
                          seat.prices?.alternatives[0]?.map((price) => ({
                            amount: price.amount,
                            currency: price.currency,
                          })) || [],
                        taxes:
                          seat.taxes?.alternatives[0]?.map((tax) => ({
                            amount: tax.amount,
                            currency: tax.currency,
                          })) || [],
                        totalPrices:
                          seat.total?.alternatives[0]?.map((total) => ({
                            amount: total.amount,
                            currency: total.currency,
                          })) || [],
                      }
                    }),
                  }
                })
              },
            )

            const totalPrices = seatMap.flatMap((row) =>
              row.seats.flatMap((seat) => seat.totalPrices),
            )

            const currency =
              totalPrices.find((price) => price.currency)?.currency || 'IDR'

            const totalAmount = totalPrices.reduce(
              (sum, price) => sum + price.amount,
              0,
            )
            const averagePriceAmount =
              totalPrices.length > 0 ? totalAmount / totalPrices.length : 0

            return {
              id: data.segment.segmentRef,
              airlineCode: data.segment.flight.airlineCode,
              flightNumber: data.segment.flight.airlineCode,
              cabinClass: data.segment.cabinClass,
              departureTime: new Date(data.segment.departure),
              arrivalTime: new Date(data.segment.arrival),
              origin: data.segment.origin,
              destination: data.segment.destination,
              averagePrice: {
                amount: averagePriceAmount,
                currency: currency,
              },
              seatMap: seatMap,
            }
          })

      resolve(flightDataArray)
    }, 2000)
  })
}
