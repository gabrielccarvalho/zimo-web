import { WordRotate } from "@/components/magicui/word-rotate";
import Image from "next/image";


export function Jumbotron() {
  const words = [
    "Gastos",
    "Investimentos",
    "Negócios",
  ]
  return (
    <section className="p-4 flex items-center justify-center">
      <div className="relative select-none">
          <Image
            src="/zimo-header.webp"
            alt="Jumbotron"
            width={1200}
            height={1200}
            draggable={false}
            className="rounded-xl aspect-video object-cover object-top"
          />
          <div className="md:absolute select-text md:shadow-2xl left-10 bottom-10 rounded-4xl md:bg-accent/60 flex flex-col md:p-6 py-6 justify-center text-start text-3xl font-medium leading-tight">
            <span>Tenha o controle</span>
            <span className="inline-flex items-center gap-2">
              dos seus
              <WordRotate words={words} duration={2000} />
            </span>
            <span>dentro do seu WhatsApp</span>
          </div>
      </div>
    </section>
  )
}