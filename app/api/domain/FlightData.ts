export interface FlightData {
  id: string
  airlineCode: string
  flightNumber: string
  cabinClass: string
  departureTime: Date
  arrivalTime: Date
  origin: string
  destination: string
  averagePrice: Price
  seatMap: SeatMap[]
}

interface Price {
  amount: number
  currency: string
}

export interface SeatMap {
  rowNumber: number
  seats: {
    slotCode: 'BLANK' | 'AISLE' | 'SEAT'
    code?: string
    isAvailable: boolean
    prices: Price[]
    taxes: Price[]
    totalPrices: Price[]
  }[]
}

export interface PassengerInfo {
  firstName: string
  lastName: string
  email: string
  dob: Date
  gender: string
}
