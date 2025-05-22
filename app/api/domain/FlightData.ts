import type { DateTimezoneSetter } from 'node_modules/date-fns/parse/_lib/Setter'
import type { DateRange } from 'react-day-picker'

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
