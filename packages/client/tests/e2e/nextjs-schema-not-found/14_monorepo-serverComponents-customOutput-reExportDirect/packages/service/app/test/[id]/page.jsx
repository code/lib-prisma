const { PrismaClient } = require('db')

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return [{ id: '1' }]
}

async function doPrismaQuery(params) {
  if (params.id === '1') return JSON.stringify({})

  const prisma = new PrismaClient()

  const result = await prisma.$queryRaw`SELECT 1`
  return JSON.stringify(result)
}

export default async function Page({ params }) {
  return <div>{await doPrismaQuery(params)}</div>
}
