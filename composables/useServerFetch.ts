import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const userAuth = useCookie<string>('token')
  const config = useRuntimeConfig()
  const defaults: UseFetchOptions<T> = {
    baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
    key: url,
    headers: userAuth.value
      ? { Authorization: `Bearer ${userAuth.value}` }
      : {},
    onResponse({ request, response, options }) {},
    onResponseError({ request, response, options }) {},
  }
  const params = defu(options, defaults)
  return useFetch(url, params)
}