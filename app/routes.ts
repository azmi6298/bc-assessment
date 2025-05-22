import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('flights', 'routes/flights.tsx'),
  route('select-seat', 'routes/selectSeat.tsx'),
  route('passenger-info', 'routes/passengerInfo.tsx'),
  route('order-success', 'routes/orderSuccess.tsx'),
] satisfies RouteConfig
