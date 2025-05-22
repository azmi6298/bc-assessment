import { Button } from '../ui/button'

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function BaseButton(props: BaseButtonProps) {
  return (
    <Button {...props} className="w-full bg-blue-900">
      {props.children}
    </Button>
  )
}
