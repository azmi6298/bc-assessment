import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { cn } from '~/lib/utils'
import { Check } from 'lucide-react'

export interface Option<T> {
  label: string
  value: T
}

interface SelectProps<T> {
  id: string
  options: Option<T>[]
  value: Option<T> | undefined
  onChange: (value: Option<T>) => void
  placeholder?: string
}

export function Select<T>(props: SelectProps<T>) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<T>()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={props.id}
          variant="outline"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? props.options.find((option) => option.value === value)?.label
            : props.placeholder || 'Select data...'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
        <Command>
          <CommandInput placeholder="Cari data..." />
          <CommandList>
            <CommandEmpty>No data found</CommandEmpty>
            <CommandGroup>
              {props.options.map((option) => (
                <CommandItem
                  key={String(option.value)}
                  value={String(option.value)}
                  onSelect={() => {
                    setValue(option.value)
                    setOpen(false)
                    props.onChange(option)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
