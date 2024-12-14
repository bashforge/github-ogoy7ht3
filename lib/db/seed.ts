import { db } from './client'

async function seed() {
  try {
    // Create sample quotes
    await db.quote.createMany({
      data: [
        {
          name: "John Doe",
          email: "john@example.com",
          phone: "(555) 555-5555",
          eventType: "Wedding",
          date: new Date("2024-06-15"),
          attendees: 100,
          status: "pending",
          amount: null,
          notes: null,
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "(555) 555-5556",
          eventType: "Corporate Event",
          date: new Date("2024-07-20"),
          attendees: 250,
          status: "accepted",
          amount: 5000,
          notes: "Requires special setup for presentation",
        },
        {
          name: "Bob Wilson",
          email: "bob@example.com",
          phone: "(555) 555-5557",
          eventType: "Birthday Party",
          date: new Date("2024-05-10"),
          attendees: 50,
          status: "expired",
          amount: null,
          notes: "Client did not respond",
        },
      ],
    })

    console.log('Database seeded successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

seed()