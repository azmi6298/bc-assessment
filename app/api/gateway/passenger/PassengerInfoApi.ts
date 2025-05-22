import type { PassengerInfo } from '~/api/domain/FlightData'
import seatMapResponse from '~/api/sample-data/SeatMapResponse.json'

export function getPassengerInfo(): Promise<PassengerInfo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data =
        seatMapResponse.seatsItineraryParts[0].segmentSeatMaps[0]
          .passengerSeatMaps[0].passenger
      resolve({
        firstName: data.passengerDetails.firstName,
        lastName: data.passengerDetails.lastName,
        dob: new Date(data.passengerInfo.dateOfBirth),
        email: data.passengerInfo.emails[0],
        gender: data.passengerInfo.gender as PassengerInfo['gender'],
      })
    }, 2000)
  })
}
