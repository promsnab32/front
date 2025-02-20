import { defu } from 'defu'
import type { NitroFetchOptions } from 'nitropack'
// const token = 'd028819aad9c3638865c751a7c0633585eb83f430a7c152f73bd7bfce66a9c198c550bc09019996c454b7098604d59f0256ddfd49e17659c83e243a6c6d506cd28fb4b5983c6271932d4ef8c2fdcc8fd794598ada8972862901fe06f1a057afae17f33326868780a8591e5dad5af07bced9f9280f63681904bf89a11588150e9'

const token = 'b29c332e182e8c013557c9aa007658d53a243868cf5488e78b28275ebe5354d41ee0f20ebf44f9385bc6c0c203312f3c68e055194b0eab47f02c5beacf5e3e3e2c2f6f314aed6d28d4931d9575df1f46dadccc606c170f878f7c831a655791a6db8b54848c50f404ccb84b02e1e0fad07a2b8a36aef6b013fd43e7ca4ccc08bb'
export function useCustomFetch<T extends string, K>(
	url: string,
	options: NitroFetchOptions<T> = {}
) {
  const config = useRuntimeConfig()
	const defaults: NitroFetchOptions<T> = {
		baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
		headers: {
			'Content-type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		query: {
			populate: '*'
		}
	}
	const params = defu(options, defaults)

	return $fetch<K>(url, params)
}