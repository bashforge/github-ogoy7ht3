"use client"

import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import Link from "next/link"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          EventQuote
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/request-quote">Request Quote</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}