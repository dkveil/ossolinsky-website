import styled from "styled-components";
import { overlay } from "utils/overlay";

export const Wrapper = styled.section`
    padding: 3rem 0;
    background-color: ${({ theme }) => theme.color.gray};

    ${({ theme }) => theme.mq.tablet}{
        padding: 0;
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        padding-bottom: 12rem;
        background-color: ${({ isTotalEven, theme }) => isTotalEven ? theme.color.gray : theme.color.white};

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 12rem;
            width: 50%;
            background: linear-gradient(to top ${({ isTotalEven }) => !isTotalEven ? 'right' : 'left'}, transparent 50%, ${({ theme, isTotalEven }) => isTotalEven ? theme.color.white : theme.color.gray} 0);
            right: ${({ isTotalEven }) => isTotalEven ? 'auto' : '0'};
            left: ${({ isTotalEven }) => isTotalEven ? '0' : 'auto'};
            bottom: 0;
            z-index: 0;
        }
    }
`

export const OfferWrapper = styled.div`
    padding-bottom: 5rem;
    position: relative;

    ${({ theme }) => theme.mq.tablet}{
        background-color: ${({ theme, isEven }) => isEven ? theme.color.gray : theme.color.white};
        height: 70rem;
        display: flex;
        flex-direction: ${({ isEven }) => isEven ? 'row' : 'row-reverse'};
        align-items: center;
        width: 100%;
        padding: 0;
    }
`

export const OfferImageWrapper = styled.div`
    height: 25rem;
    margin-bottom: 3rem;
    position: relative;

    ${overlay(.2)}

    ${({ theme }) => theme.mq.tablet}{
        width: 50%;
        height: 100%;
        margin-bottom: 0;
    }
`

export const OfferContentWrapper = styled.div`

    ${({ theme }) => theme.mq.tablet}{
        padding: 0 4rem;
        width: 50%;
    }


    ${({ theme }) => theme.mq.desktop}{
        padding-left: ${({ isEven }) => isEven ? '8rem' : '0'};
        padding-right: ${({ isEven }) => isEven ? '0' : '8rem'};
        width: 40vw;
        max-width: 620px;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
    h3{
        text-transform: uppercase;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 2rem;

        ${({ theme }) => theme.mq.tablet}{
            font-size: 3rem;
            text-shadow: 0 2px 2px ${({ theme }) => theme.color.black};
        }

        ${({ theme }) => theme.mq.desktop}{
            font-size: 4.4rem;
            line-height: 5rem;
            font-weight: 600;
            margin-bottom: 3rem;
        }
    }
    p{
        font-size: 1.2rem;
        line-height: 2.8rem;
        color: ${({ theme }) => theme.color.text};
        margin-bottom: 6rem;

        ${({ theme }) => theme.mq.tablet}{
            margin-bottom: 4rem;
        }

        ${({ theme }) => theme.mq.desktop}{
            font-size: 1.4rem;
            margin-bottom: 5rem;
        }
    }
`