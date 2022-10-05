import styled from "styled-components";

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

    ${({ theme }) => theme.mq.desktop}{
        display: flex;
        position: absolute;
        top: 50%;
        left: calc(42vw + 8rem);
        transform: translate(0, -50%)
    }
`