import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

const token = 'a08cb53d3ccea251a3f0a9d2ebb5eb8bdae1c09185a85e28e247b8e0867311de06ea3e868cc1dfdd16ffdfa80aa586a613de777464a09022f0d4bde23692bce0ef2d7d954cc12a23cc815ef1a70eec539837a8525f717932ad70a36a6befa07444d3220ff74c62be52ed6c63aedd8843ca8fa01f72e27e82c837e9e3de8e6bab'
export function useServerFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {},
) {
  const userAuth = useCookie<string>('token')
  const config = useRuntimeConfig()
  const defaults: UseFetchOptions<T> = {
    baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
    key: url,
    headers: userAuth.value
      ? { Authorization: `Bearer ${token}` }
      : {},
    query: {
      populate: '*'
    },
    onResponse({ request, response, options }) {},
    onResponseError({ request, response, options }) {},
  }
  const params = defu(options, defaults)
  return useFetch(url, params)
}