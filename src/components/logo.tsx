import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image src="/logo.svg" alt="Zimo" width={248} height={198} className={cn("size-8", className)} />
  )
} 