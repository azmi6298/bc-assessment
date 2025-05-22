import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

interface RadioGroupInputProps {
  id: string
  label: string
  options: {
    value: string
    label: string
  }[]
  value?: string
  onInput: (value: string) => void
}

export default function RadioGroupInput(props: RadioGroupInputProps) {
  return (
    <div className="space-y-4">
      <Label htmlFor={props.id}>{props.label}</Label>

      <RadioGroup>
        {props.options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem
              className="bg-white"
              key={option.value}
              value={option.value}
              id={option.value}
              onClick={() => props.onInput(option.value)}
            />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
