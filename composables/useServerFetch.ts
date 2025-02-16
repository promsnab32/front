import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

const token = '2bc76972b0da428cd308d886e5c179676f4e3537c5696ef89b1eee91777f184aafcbae896247b670924b361a391bd123253f415dd4d834d13e0c97793f95d500820d88a07739f8ec3187df2cfef77e7e545baf0c48110dbe1235ad6133b3ab0a29c713e0484bcda699eb8038b9c54569d3291fd3fa7d0ca2110af80043981992'
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