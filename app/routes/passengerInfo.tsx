import { getPassengerInfo } from '~/api/gateway/passenger/PassengerInfoApi'
import type { Route } from './+types/passengerInfo'
import PassengerInfoForm from '~/components/form/PassengerInfoForm'

export function meta() {
  return [{ title: 'Lengkapi Data' }]
}

export async function loader({ request }: Route.LoaderArgs) {
  const passengerInfo = await getPassengerInfo()
  return { passengerInfo }
}

export default function PassengerInfoPage({
  loaderData,
}: Route.ComponentProps) {
  const { passengerInfo } = loaderData

  return (
    <div className="grid gap-y-8">
      <div className="text-center">
        <span className="font-semibold text-2xl">Lengkapi Data Penumpang</span>
      </div>
      <PassengerInfoForm data={passengerInfo} />
    </div>
  )
}
