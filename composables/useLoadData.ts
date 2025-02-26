import type { NitroFetchOptions } from 'nitropack'
import type { ResponseDTO } from "~/types/app"
export const useLoadData = async <T extends string, K>(path: string, options: NitroFetchOptions<T> = {}) => {

  const { data } = await useAsyncData<ResponseDTO<K>>(path, () =>
    useCustomFetch<T, ResponseDTO<K>>(path, options)
  )

  return data
}
