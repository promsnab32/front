import { defu } from 'defu'
import type { NitroFetchOptions } from 'nitropack'
// const token = 'd028819aad9c3638865c751a7c0633585eb83f430a7c152f73bd7bfce66a9c198c550bc09019996c454b7098604d59f0256ddfd49e17659c83e243a6c6d506cd28fb4b5983c6271932d4ef8c2fdcc8fd794598ada8972862901fe06f1a057afae17f33326868780a8591e5dad5af07bced9f9280f63681904bf89a11588150e9'

const token = '01a51cc7747ca45aa4dfa230303ab4c4340055f05b786fedbe3cd46c19978563a99dd9be266203063ff4cd05b9234a16824facc5bdbf4ae18671766d78fd222a6e39b63380d67e0d69fe145f7bf26c14ebc017f2e4b9e25236a4e8e5f53fac167db05bdf3525fb9a188cf50b19f4e0cfe27e4bd642bdb45a4c431d00dc8bc7c4'

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