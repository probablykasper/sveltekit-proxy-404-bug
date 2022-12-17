import { Router, type Request as IRequest } from 'itty-router'

const router = Router<Request & IRequest>()

router.get('/', async (request: Request & IRequest) => {
  return fetch(`http://localhost:5177/my-id`, request)
})

router.get('*', (request: Request & IRequest) => {
  const url = new URL(request.url)
  return fetch(`http://localhost:5177${url.pathname}`, request)
})

export default {
  fetch: router.handle,
}
