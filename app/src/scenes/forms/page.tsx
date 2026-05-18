import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon, Bold, Italic, Underline } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ItemShowcase } from '@/components/ItemShowcase'

const snippets = {
  input: `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />`,
  textarea: `import { Textarea } from '@/components/ui/textarea'

<Textarea placeholder="Write a comment..." rows={4} />`,
  select: `<Select>
  <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>`,
  checkbox: `<Checkbox id="terms" />
<Label htmlFor="terms">I accept the terms</Label>`,
  radio: `<RadioGroup defaultValue="medium">
  <RadioGroupItem value="low" id="low" />
  <RadioGroupItem value="medium" id="medium" />
  <RadioGroupItem value="high" id="high" />
</RadioGroup>`,
  switch: `<Switch id="notifications" />
<Label htmlFor="notifications">Enable notifications</Label>`,
  slider: `<Slider defaultValue={[50]} max={100} step={1} />`,
  toggle: `<Toggle aria-label="Bold"><Bold size={14} /></Toggle>`,
  toggleGroup: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold"><Bold size={14} /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic size={14} /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><Underline size={14} /></ToggleGroupItem>
</ToggleGroup>`,
  calendar: `<Calendar mode="single" selected={date} onSelect={setDate} />`,
  datepicker: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon /> {date ? format(date, 'PPP') : 'Pick a date'}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`,
}

/** Scene de primitives de formulario shadcn + composicion DatePicker. */
export function FormsScene() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 3, 29))
  const [sliderVal, setSliderVal] = useState([42])

  return (
    <section id="forms" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Forms</h2>
        <p className="text-sm text-muted-foreground">
          Primitives de la categoria forms en `visual-shadcn`. DatePicker como composicion calendar + popover.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="Input + Label" description="Campo de texto basico con label asociado." snippet={snippets.input}>
          <div className="w-full max-w-sm space-y-1.5">
            <Label htmlFor="email-demo">Email</Label>
            <Input id="email-demo" type="email" placeholder="you@example.com" />
          </div>
        </ItemShowcase>

        <ItemShowcase name="Textarea" description="Multilinea para comentarios y descripciones." snippet={snippets.textarea}>
          <Textarea placeholder="Write a comment..." rows={4} className="w-full max-w-sm" />
        </ItemShowcase>

        <ItemShowcase name="Select" description="Lista cerrada de opciones." snippet={snippets.select}>
          <Select defaultValue="medium">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Pick one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </ItemShowcase>

        <ItemShowcase name="Checkbox" description="Booleano simple. Multi-seleccion en listas." snippet={snippets.checkbox}>
          <div className="flex items-center gap-2">
            <Checkbox id="terms-demo" defaultChecked />
            <Label htmlFor="terms-demo">I accept the terms</Label>
          </div>
        </ItemShowcase>

        <ItemShowcase name="Radio group" description="Seleccion exclusiva entre 2-5 opciones." snippet={snippets.radio}>
          <RadioGroup defaultValue="medium" className="flex flex-col gap-2">
            {['low', 'medium', 'high'].map((v) => (
              <div key={v} className="flex items-center gap-2">
                <RadioGroupItem value={v} id={`r-${v}`} />
                <Label htmlFor={`r-${v}`} className="capitalize">{v}</Label>
              </div>
            ))}
          </RadioGroup>
        </ItemShowcase>

        <ItemShowcase name="Switch" description="On/off para configuraciones inmediatas." snippet={snippets.switch}>
          <div className="flex items-center gap-2">
            <Switch id="notif-demo" defaultChecked />
            <Label htmlFor="notif-demo">Enable notifications</Label>
          </div>
        </ItemShowcase>

        <ItemShowcase
          name="Slider"
          description={`Rango numerico continuo. Valor actual: ${sliderVal[0]}`}
          snippet={snippets.slider}
        >
          <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} className="w-64" />
        </ItemShowcase>

        <ItemShowcase name="Toggle" description="Boton toggle individual." snippet={snippets.toggle}>
          <Toggle aria-label="Bold"><Bold size={14} /></Toggle>
        </ItemShowcase>

        <ItemShowcase name="Toggle group" description="Grupo de toggles (single o multiple)." snippet={snippets.toggleGroup}>
          <ToggleGroup type="multiple" defaultValue={['bold']}>
            <ToggleGroupItem value="bold"><Bold size={14} /></ToggleGroupItem>
            <ToggleGroupItem value="italic"><Italic size={14} /></ToggleGroupItem>
            <ToggleGroupItem value="underline"><Underline size={14} /></ToggleGroupItem>
          </ToggleGroup>
        </ItemShowcase>

        <ItemShowcase name="Calendar" description="Mes inline. Base para datepicker y rangos." snippet={snippets.calendar}>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </ItemShowcase>

        <ItemShowcase name="Date picker" description="Composicion calendar + popover + button." snippet={snippets.datepicker}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-56 justify-start gap-2">
                <CalendarIcon size={14} />
                {date ? format(date, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </ItemShowcase>
      </div>
    </section>
  )
}
