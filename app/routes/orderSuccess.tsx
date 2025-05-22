import { Link } from 'react-router'
import BaseButton from '~/components/common/BaseButton'

export function meta() {
  return [{ title: 'Pesanan Berhasil' }]
}

export default function OrderSuccessPage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-3xl font-bold">Pesanan Berhasil</h1>
      <Link to="/">
        <BaseButton>Kembali ke Halaman Utama</BaseButton>
      </Link>
    </div>
  )
}
