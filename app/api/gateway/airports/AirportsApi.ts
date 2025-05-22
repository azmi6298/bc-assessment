import type { Option } from '~/components/input/Select'

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
