// http client
import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, '*')

fastify.register(import('./routes/listaCompraRoute.js'))
fastify.listen({ port: 3001 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
})
