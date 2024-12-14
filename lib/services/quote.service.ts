import { db } from '@/lib/db/client'
import type { Quote } from '@prisma/client'

export class QuoteService {
  static async findAll(status?: string) {
    return db.quote.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' }
    })
  }

  static async findById(id: string) {
    return db.quote.findUnique({
      where: { id }
    })
  }

  static async updateQuote(id: string, data: Partial<Quote>) {
    return db.quote.update({
      where: { id },
      data
    })
  }

  static async deleteQuote(id: string) {
    return db.quote.delete({
      where: { id }
    })
  }
}