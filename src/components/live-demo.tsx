import { Highlighter } from "@/components/magicui/highlighter";
import { Badge } from "./ui/badge";


export function LiveDemo() {
  return (
    <section className="px-4 py-12 flex flex-col gap-4">
      <article className="flex flex-col md:grid md:grid-cols-2 gap-6 max-w-screen-lg w-full mx-auto">
        <div className="flex flex-col w-full items-start justify-center gap-6">
          <Badge variant="secondary" className="text-base rounded-full">Nunca mais perca uma conta</Badge>
          <h2 className="text-3xl font-medium leading-relaxed">
            💸 Tenha{" "}
            <Highlighter action="underline" color="#DBFF01" strokeWidth={2}>
              o controle
            </Highlighter>
            {" "}dos seus gastos<br />
            direto do seu WhatsApp.
          </h2>
          <span className="max-w-md text-muted-foreground">Saiba sempre quanto e onde está gastando, basta uma mensagem de texto ou voz.</span>
        </div>

        <div className="relative">
          <video src="/zimo-conversation.mp4" className="w-6/10 mx-auto h-auto object-cover rounded-xl" autoPlay muted loop />
        </div>
      </article>
    </section>
  )
}