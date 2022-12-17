import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async function ({ params, data }) {
  if (params.id !== 'my-id') {
    throw error(404)
  }
  return {
    id: params.id,
  }
}
