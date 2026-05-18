import { Button } from '@/components/ui/button'
import { ItemShowcase } from '@/components/ItemShowcase'

const importLine = `import { Button } from '@/components/ui/button'`

export function ButtonsScene() {
  return (
    <section id="buttons" className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Button</h2>
        <p className="text-sm text-muted-foreground">
          Variantes y tamanos del primitive Button de shadcn/ui.
        </p>
      </header>

      <div className="space-y-4">
        <ItemShowcase
          name="Default"
          description="Variante principal, accion afirmativa."
          snippet={`${importLine}\n\n<Button>Click</Button>`}
        >
          <Button>Click</Button>
        </ItemShowcase>

        <ItemShowcase
          name="Secondary"
          description="Accion secundaria con menor enfasis visual."
          snippet={`${importLine}\n\n<Button variant="secondary">Click</Button>`}
        >
          <Button variant="secondary">Click</Button>
        </ItemShowcase>

        <ItemShowcase
          name="Destructive"
          description="Acciones irreversibles o de alto riesgo."
          snippet={`${importLine}\n\n<Button variant="destructive">Click</Button>`}
        >
          <Button variant="destructive">Click</Button>
        </ItemShowcase>

        <ItemShowcase
          name="Outline"
          description="Borde sin fondo solido, alternativa neutra."
          snippet={`${importLine}\n\n<Button variant="outline">Click</Button>`}
        >
          <Button variant="outline">Click</Button>
        </ItemShowcase>

        <ItemShowcase
          name="Ghost"
          description="Sin fondo ni borde; aparece al hover."
          snippet={`${importLine}\n\n<Button variant="ghost">Click</Button>`}
        >
          <Button variant="ghost">Click</Button>
        </ItemShowcase>

        <ItemShowcase
          name="Link"
          description="Estilo de enlace inline, sin fondo."
          snippet={`${importLine}\n\n<Button variant="link">Click</Button>`}
        >
          <Button variant="link">Click</Button>
        </ItemShowcase>

        <ItemShowcase
          name="Sizes"
          description="Tamanos disponibles: sm, default, lg, icon."
          snippet={`${importLine}\n\n<Button size="sm">sm</Button>\n<Button size="default">default</Button>\n<Button size="lg">lg</Button>\n<Button size="icon">+</Button>`}
        >
          <div className="flex items-center gap-2">
            <Button size="sm">sm</Button>
            <Button size="default">default</Button>
            <Button size="lg">lg</Button>
            <Button size="icon">+</Button>
          </div>
        </ItemShowcase>
      </div>
    </section>
  )
}
