import { clsx, type ClassValue } from 'clsx'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function showErrorToast(message: string) {
  toast.error('Silakan cek kembali', {
    description: message,
    position: 'top-center',
  })
}
