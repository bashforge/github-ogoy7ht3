import { Button } from "@/components/ui/button"
import { FeaturesGrid } from "@/components/features-grid"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Your Perfect Event Starts Here
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12">
            Get an instant quote for your next event. From weddings to corporate gatherings,
            we've got you covered.
          </p>
          <Button size="lg" className="mb-12 w-full sm:w-auto" asChild>
            <Link href="/request-quote">
              Request a Quote
            </Link>
          </Button>
          <FeaturesGrid />
        </div>
      </div>
    </div>
  )
}