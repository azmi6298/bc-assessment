export interface FlightData {
  id: string
  airlineCode: string
  flightNumber: string
  cabinClass: string
  departureTime: string
  arrivalTime: string
  origin: string
  destination: string
  averagePrice: Price
  seatMap: SeatMap[]
}

interface Price {
  amount: number
  currency: string
}

interface SeatMap {
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
