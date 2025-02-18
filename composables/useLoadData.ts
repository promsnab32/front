import type { ResponseDTO } from "~/types/app"
export const useLoadData = async <T>(path: string) => {

const { data } = await useAsyncData<ResponseDTO<T>>(path, () =>
  useCustomFetch<'', ResponseDTO<T>>(path)
)
const catalogList = computed(() => data.value?.data)

return catalogList
}
