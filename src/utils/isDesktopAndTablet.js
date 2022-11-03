import media from 'utils/media'
import { useWindowDimensions } from 'hooks/useWindowDimensions.hook';

export const isDesktopAndTablet = () => {
    const { width: windowWidth } = useWindowDimensions()

    return windowWidth >= media.TABLET
}