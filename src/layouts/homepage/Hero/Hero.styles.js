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

    ${({ theme }) => theme.mq.desktop}{
        justify-content: center;
        align-items: flex-start;
    }
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

    ${({ theme }) => theme.mq.desktop}{
        left: unset;
        right: 0;
        overflow: hidden;
        width: ${({ theme }) => theme.width.desktopherovideo};
    }

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

export const HeroParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.mobile.heroParagraph};
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    margin-bottom: 2.8rem;

    ${({ theme }) => theme.mq.tablet}{
        width: 420px;
        margin-bottom: 3rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        text-align: start;
        width: 320px;
        margin-bottom: 3rem;
        color: ${({ theme }) => theme.color.text}
    }
`

export const StyledArrowIcon = styled(ArrowIcon)`
    position: absolute;
    bottom: 8rem;
    width: 3.2rem;
    cursor: pointer;

    ${({ theme }) => theme.mq.desktop}{
        fill: black;
        bottom: 20vh;
    }
`