import styled from "styled-components"
import ArrowIcon from 'icons/arrow.svg'

export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
    min-height: 640px;
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 100%;
    height: 100%;
`

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;

    video {
        position: relative;
        height: 100%;
        width: auto;
    }
`

export const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const HeroHeading = styled.h1`
    font-size: ${({ theme }) => theme.font.size.mobile.heroHeading};
    font-weight: 600;
    line-height: ${({ theme }) => `calc(${theme.font.size.mobile.heroHeading} + 4px)`};
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    text-shadow: 0 2px 2px ${({ theme }) => theme.color.black};
    text-align: center;
    margin-bottom: 1rem;
`

export const HeroParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.mobile.heroParagraph};
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    margin-bottom: 2.8rem;
`

export const StyledArrowIcon = styled(ArrowIcon)`
    position: absolute;
    bottom: 8rem;
    width: 3.2rem;
    cursor: pointer;
`