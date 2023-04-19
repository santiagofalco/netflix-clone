import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)
    return ({
        data,
        error,
        isLoading,
        mutate
    }) //Si ya hizo fetch y tiene data, no vuelve a fetchear (no es necesario usar redux)
}

export default useCurrentUser
