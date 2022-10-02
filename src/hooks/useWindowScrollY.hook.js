import React from 'react';

export const useWindowScrollY = () => {
    const [windowScrollY, setWindowScrollY] = React.useState(window.scrollY)

    React.useEffect(() => {
        setWindowScrollY(window.scrollY)

        const handleScroll = () => {
            setWindowScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return windowScrollY
}