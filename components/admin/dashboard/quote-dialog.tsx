"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { format } from "date-fns"
import type { Quote } from "@prisma/client"

interface QuoteDialogProps {
  quote: Quote | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteDialog({ quote, open, onOpenChange }: QuoteDialogProps) {
  if (!quote) return null

  const handleSubmit = async () => {
    // Implement quote update logic
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Quote Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Client Name</Label>
              <div className="mt-1">{quote.name}</div>
            </div>
            <div>
              <Label>Event Date</Label>
              <div className="mt-1">
                {format(new Date(quote.date), "PPP")}
              </div>
            </div>
          </div>

          <div>
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Quote Amount</Label>
            <Input type="number" placeholder="Enter quote amount" />
          </div>

          <div>
            <Label>Admin Notes</Label>
            <Textarea placeholder="Add any internal notes about this quote" />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              Update Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}