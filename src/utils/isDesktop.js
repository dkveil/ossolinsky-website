import media from 'utils/media'
import { useWindowDimensions } from 'hooks/useWindowDimensions.hook';

export const isDesktop = () => {
    const { width: windowWidth } = useWindowDimensions()

    return windowWidth > media.DESKTOP
}