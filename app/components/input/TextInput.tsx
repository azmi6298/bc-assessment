import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface TextInputProps {
  id: string
  label: string
  value?: string
  onInput: (value: string) => void
}

export default function TextInput(props: TextInputProps) {
  return (
    <div className="space-y-4">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        className="bg-white"
        id={props.id}
        placeholder={`Isi ${props.label}`}
        value={props.value}
        onChange={(e) => props.onInput(e.target.value)}
      />
    </div>
  )
}
