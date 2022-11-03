import media from 'utils/media'
import { useWindowDimensions } from 'hooks/useWindowDimensions.hook';

export const isTablet = () => {
    const { width: windowWidth } = useWindowDimensions()

    return windowWidth >= media.TABLET && windowWidth < media.DESKTOP
}