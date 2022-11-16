import styled from "styled-components";
import { StyledIcon } from 'components/StyledIcon'

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        padding: 12rem 0;
        z-index: 0;
        overflow: hidden;
        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 20%;
            width: 100%;
            background: linear-gradient(to top right, transparent 50%, ${({ theme }) => theme.color.gray} 0);
            left: 0;
            top: 0;
            z-index: 1;
        }
        ::before{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 22%;
            width: 90%;
            background: linear-gradient(to top right, transparent 50%, ${({ theme }) => theme.color.black} 0);
            right: 0;
            top: 0;
            z-index: 0;
        }
    }
`

export const ContentWrapper = styled.div`
    padding: 8rem 0;

    ${({ theme }) => theme.mq.tablet}{
        width: 65%;
    }

    ${({ theme }) => theme.mq.desktop}{
        width: 43%;
    }
    ${({ theme }) => theme.mq.large}{
        width: 40%;
    }
`

export const OfertFeaturesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 5rem;

    li {
        font-size: 1.2rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }
`


export const OfertsWrapper = styled.div`
    width: 100%;
    user-select: none;

    ${({ theme }) => theme.mq.tablet}{
        display: flex;
        flex-wrap: wrap;

    }

    ${({ theme }) => theme.mq.desktop}{
        display: flex;
        align-items: center;
        height: 54rem;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: calc(44vw + 6.8rem);
        transform: translate(0, -50%)
    }
`

export const ButtonsWrapper = styled.div`
    position: absolute;
    top: 52%;
    left: calc(44vw + 2rem);
    transform: translate(0, -50%);
    z-index: 3;
`

export const StyledArrowIcon = styled(StyledIcon)`
    cursor: pointer;
    transform: ${({ right }) => right && 'rotate(180deg)'};
    &:hover {
        svg path {
            fill: ${({ theme }) => theme.color.text} ;
        }
    }
    svg path {
        stroke: ${({ theme }) => theme.color.white};
    }
`