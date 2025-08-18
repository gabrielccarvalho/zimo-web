import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t px-4 backdrop-blur-lg">
      <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Logo className="size-6" />
        </div>
        
        {/* Copyright notice on the right */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zimo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}