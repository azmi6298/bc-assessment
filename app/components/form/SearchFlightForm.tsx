'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'
import { format } from 'date-fns'
import { showErrorToast } from '~/lib/utils'
import { Select, type Option } from '../input/Select'
import { useNavigate } from 'react-router'
import DatePickerInput from '../input/DatePickerInput'
import BaseButton from '../common/BaseButton'
import SelectInput from '../input/SelectInput'

interface SearchFlightFormProps {
  airports: Option<string>[]
}

export function SearchFlightForm(props: SearchFlightFormProps) {
  const [origin, setOrigin] = useState<Option<string>>()
  const [destination, setDestination] = useState<Option<string>>()
  const [date, setDate] = useState<Date>()

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

    const formattedDate = date ? format(date, 'yyyy-MM-dd') : ''

    const queryParamArray = [
      `origin=${origin?.value}`,
      `destination=${destination?.value}`,
      `date=${formattedDate}`,
    ]

    navigate(`/flights?${queryParamArray.join('&')}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectInput
          id="origin"
          label="Dari"
          value={origin}
          options={props.airports}
          onChange={(value) => setOrigin(value)}
          placeholder="Pilih asal"
        />

        <SelectInput
          id="destination"
          label="Ke"
          value={destination}
          options={props.airports}
          onChange={(value) => setDestination(value)}
          placeholder="Pilih tujuan"
        />
      </div>

      <DatePickerInput
        id="departure"
        label="Tanggal Berangkat"
        value={date}
        onChange={(date) => {
          setDate(date)
        }}
      />

      <BaseButton type="submit" className="w-full bg-blue-900">
        Cari Penerbangan
      </BaseButton>
    </form>
  )
}
