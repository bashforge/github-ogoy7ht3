import { getAuthConfig } from "@/lib/config/auth"

export async function validateCredentials(email: string, password: string) {
  const config = getAuthConfig()
  
  if (email === config.adminEmail && password === config.adminPassword) {
    return {
      id: "admin",
      email: config.adminEmail,
      role: "admin" as const,
    }
  }
  
  return null
}