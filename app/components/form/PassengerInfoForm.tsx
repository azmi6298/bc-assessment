import { useState } from 'react'
import TextInput from '../input/TextInput'
import RadioGroupInput from '../input/RadioGroupInput'
import DatePickerInput from '../input/DatePickerInput'
import { Button } from '../ui/button'
import type { PassengerInfo } from '~/api/domain/FlightData'
import { useNavigate } from 'react-router'
import BaseButton from '../common/BaseButton'

interface PassengerInfoFormProps {
  data: PassengerInfo
}

export default function PassengerInfoForm(props: PassengerInfoFormProps) {
  const [firstName, setFirstName] = useState<string>(props.data.firstName)
  const [lastName, setLastName] = useState<string>(props.data.lastName)
  const [email, setEmail] = useState<string>(props.data.email)
  const [dob, setDob] = useState<Date>(props.data.dob)
  const [gender, setGender] = useState<string>(props.data.gender)

  const navigate = useNavigate()

  function handleSubmit() {
    navigate('/order-success')
  }

  return (
    <>
      <TextInput
        id="firstName"
        label="Nama Depan"
        value={firstName}
        onInput={setFirstName}
      />

      <TextInput
        id="lastName"
        label="Nama Belakang"
        value={lastName}
        onInput={setLastName}
      />

      <TextInput id="email" label="Email" value={email} onInput={setEmail} />

      <RadioGroupInput
        id="gender"
        label="Jenis Kelamin"
        options={[
          { value: 'MALE', label: 'Laki-laki' },
          { value: 'FEMALE', label: 'Perempuan' },
        ]}
        value={gender}
        onInput={setGender}
      />

      <DatePickerInput
        id="dob"
        label="Tanggal Lahir"
        value={dob}
        onChange={setDob}
      />

      <BaseButton onClick={handleSubmit}>Pesan Tiket</BaseButton>
    </>
  )
}
