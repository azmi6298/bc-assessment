import { cn } from '~/lib/utils'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from '../ui/calendar'
import { useState } from 'react'

interface DatePickerInputProps {
  id: string
  label: string
  value?: Date
  onChange: (date: Date) => void
}

export default function DatePickerInput(props: DatePickerInputProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Label htmlFor="date">{props.label}</Label>
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !props.value && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {props.value ? (
              format(props.value, 'dd MMMM yyyy')
            ) : (
              <span>Pilih tanggal</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={props.value}
            onSelect={(date) => {
              if (date) props.onChange(date)
              setIsCalendarOpen(false)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
