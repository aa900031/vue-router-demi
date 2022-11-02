import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router-demi'

export function useRouteQuery() {
  const route = useRoute()
  const router = useRouter()
  return computed({
    get: () => route.query,
    set: (val) => router.push({ query: val })
  })
}
