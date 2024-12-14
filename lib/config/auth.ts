import { z } from 'zod'

const authConfigSchema = z.object({
  adminEmail: z.string().email(),
  adminPassword: z.string().min(8),
  nextAuthSecret: z.string().min(32),
  nextAuthUrl: z.string().url(),
})

export type AuthConfig = z.infer<typeof authConfigSchema>

export function getAuthConfig(): AuthConfig {
  const config = {
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
    nextAuthUrl: process.env.NEXTAUTH_URL,
  }

  const result = authConfigSchema.safeParse(config)
  
  if (!result.success) {
    throw new Error('Invalid auth configuration. Check your environment variables.')
  }

  return result.data
}