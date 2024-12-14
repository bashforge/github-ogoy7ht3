import { StatsCards } from "@/components/admin/dashboard/stats-cards"
import { QuoteList } from "@/components/admin/dashboard/quote-list"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your event center quotes
        </p>
      </div>

      <StatsCards
        stats={{
          total: 123,
          pending: 15,
          accepted: 89,
          expired: 19,
        }}
      />

      <QuoteList />
    </div>
  )
}