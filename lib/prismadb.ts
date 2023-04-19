import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV === 'production') global.prismadb = client

export default client

//hot reload de next, crea instancias del PrismaClient. Evita que tire error "already 10 prisma client are actively running"

//guarda prisma client en un global file, que no se modifican por el hot reloading