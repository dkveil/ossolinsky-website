import styled from "styled-components";

export const Wrapper = styled.section`

    padding-bottom: 12rem;

    ${({ theme }) => theme.mq.desktop}{
        position: relative;

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 15rem;
            width: 100%;
            background: linear-gradient(to bottom left, transparent 50%, ${({ theme }) => theme.color.gray} 0);
            left: 0;
            bottom:0;
            z-index: 0;
        }
    }
`

export const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 8rem;
    z-index: 1;


    ${({ theme }) => theme.mq.tablet}{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        row-gap: 2rem;

    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 1.5rem;
        row-gap: 2rem;
        margin-bottom: 12rem;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`