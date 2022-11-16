import styled from "styled-components";
import { overlay } from "utils/overlay";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};

`

export const ContentContainer = styled.div`
    padding: 12rem 0;
`

export const ContentWrapper = styled.div`

    ${({ theme }) => theme.mq.tablet}{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        margin: 0 auto 9rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        width: 40%;
    }

`

export const DrinksWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.mq.tablet}{
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 2rem;
        flex-wrap: nowrap;
    }
`

export const DrinkWrapper = styled.div`
    position: relative;
    height: 32rem;
    width: 100%;
    color: white;
    z-index: 1;
    padding: 5rem 3rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => theme.mq.tablet}{
        width: calc(50% - .5rem);
        height: 36rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        height: 39rem;
        max-width: 29rem;
    }

    h4{
        font-size: 2.4rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.white};
        text-shadow: 0 2px 2px ${({ theme }) => theme.color.black};
        font-weight: 600;
    }
    p{
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.color.white};
    }

`

export const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;

    ${overlay(.2)}
`