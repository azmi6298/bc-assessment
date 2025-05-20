'use client'

import type React from 'react'

import { useState } from 'react'
import { Calendar } from '~/components/ui/calendar'
import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Select, type Option } from '../input/Select'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'

const mockOptions: Option<string>[] = [
  { label: 'Jakarta', value: 'JKT' },
  { label: 'Bandung', value: 'BDG' },
  { label: 'Semarang', value: 'SMG' },
  { label: 'Surabaya', value: 'SBY' },
]

function showErrorToast(message: string) {
  toast.error('Silakan cek kembali', {
    description: message,
    position: 'top-center',
  })
}

export function SearchFlightForm() {
  const [origin, setOrigin] = useState<Option<string>>()
  const [destination, setDestination] = useState<Option<string>>()
  const [date, setDate] = useState<Date>()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const navigate = useNavigate()

  function validateForm() {
    if (!origin) {
      showErrorToast('Asal tidak boleh kosong')
      return false
    }
    if (!destination) {
      showErrorToast('Tujuan tidak boleh kosong')
      return false
    }
    if (!date) {
      showErrorToast('Tanggal tidak boleh kosong')
      return false
    }
    if (origin.value === destination.value) {
      showErrorToast('Asal dan tujuan tidak boleh sama')
      return false
    }

    return true
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    navigate('/flights')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="origin">Dari</Label>
          <div className="relative">
            <Select
              id="origin"
              value={origin}
              options={mockOptions}
              onChange={(value) => setOrigin(value)}
              placeholder="Pilih asal"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Tujuan</Label>
          <div className="relative">
            <Select
              id="destination"
              value={destination}
              options={mockOptions}
              onChange={(value) => setDestination(value)}
              placeholder="Pilih tujuan"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Tanggal Berangkat</Label>
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                'w-full justify-start text-left font-normal',
                !date && 'text-muted-foreground',
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'dd MMMM yyyy') : <span>Pilih tanggal</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date)
                setIsCalendarOpen(false)
              }}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button type="submit" className="w-full bg-blue-900">
        Cari Penerbangan
      </Button>
    </form>
  )
}
