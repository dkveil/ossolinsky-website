import React from 'react'
import { isBrowser } from 'utils/isBrowser'

function getWindowDimensions() {
    if (!isBrowser) {
        return null
    }

    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    }
}

export const useWindowDimensions = () => {
    if (!isBrowser) {
        return null
    }
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions);
    React.useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions;
}