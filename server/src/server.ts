import fastity from 'fastify';
import { PrismaClient } from '@prisma/client'

const app = fastity();
const prisma = new  PrismaClient();

app.get('/user', async () => {

    const user = await prisma.user.findMany();

    return user;
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server ruinning on http://localhost:3333');
})