"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Eye, Trash2 } from "lucide-react"
import { QuoteService } from "@/lib/services/quote.service"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { QuoteDialog } from "./quote-dialog"
import type { Quote } from "@prisma/client"

interface QuoteTableProps {
  status: string
}

export function QuoteTable({ status }: QuoteTableProps) {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [deleteQuote, setDeleteQuote] = useState<Quote | null>(null)

  const handleDelete = async () => {
    if (deleteQuote) {
      await QuoteService.deleteQuote(deleteQuote.id)
      setDeleteQuote(null)
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead>Event Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add data fetching and mapping here */}
            <TableRow>
              <TableCell>{format(new Date(), "MMM d, yyyy")}</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Wedding</TableCell>
              <TableCell>{format(new Date(), "MMM d, yyyy")}</TableCell>
              <TableCell>
                <Badge>Pending</Badge>
              </TableCell>
              <TableCell>$2,500</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedQuote({} as Quote)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDeleteQuote({} as Quote)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <QuoteDialog
        quote={selectedQuote}
        open={!!selectedQuote}
        onOpenChange={(open) => !open && setSelectedQuote(null)}
      />

      <AlertDialog open={!!deleteQuote} onOpenChange={() => setDeleteQuote(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the quote
              and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}