"use client"

import Image from "next/image";
import { GlareCard } from "./aceternity/glare-card";

export function ChatWithZimo() {
  return (
    <section className="p-4 py-12">
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col gap-6 items-center justify-center rounded-xl mesh-gradient-center">
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src="/zimo-qr.svg" alt="Zimo" width={150} height={150} className="aspect-square" />
        </GlareCard>

      <div className="flex flex-col gap-4 w-full items-center justify-center max-w-md mx-auto">
          <h3 className="text-4xl font-medium  leading-relaxed">
            Converse com a Zimo
          </h3>
          <span className="text-base text-gray-300 text-center leading-relaxed">
            Ficou com dúvidas ou quer criar sua conta? Escaneie o código acima para iniciar a sua conversa com a Zimo.
          </span>
      </div>
      </div>
    </section>
  )
}