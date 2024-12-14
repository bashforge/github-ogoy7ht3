const { execSync } = require('child_process')

try {
  // Generate Prisma Client
  console.log('Generating Prisma Client...')
  execSync('npx prisma generate', { stdio: 'inherit' })
  
  // Push schema to database
  console.log('Creating SQLite database...')
  execSync('npx prisma db push', { stdio: 'inherit' })
  
  console.log('Database setup completed successfully!')
} catch (error) {
  console.error('Error setting up database:', error)
  process.exit(1)
}