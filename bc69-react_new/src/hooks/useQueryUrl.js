import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { stringify } from 'qs'

export const useQueryUrl = () => {
    // Lấy giá trị query từ URL
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    console.log('pathname: ', pathname)

    const queryUrl = Object.fromEntries(searchParams)
    // console.log('queryUrl: ', queryUrl)

    const setQueryUrl = (params) => {
        // console.log('params: ', params)
        const queryString = stringify(params, {
            addQueryPrefix: true,
        })
        console.log('queryString: ', queryString)
        navigate(pathname + queryString)
    }
    return [queryUrl, setQueryUrl]
}
