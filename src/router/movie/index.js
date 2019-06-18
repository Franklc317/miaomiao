export default {
    path:'/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : 'commingSoon',
            component : () => import('@/components/CommingSoon')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}