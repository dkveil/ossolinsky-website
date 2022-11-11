import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 3rem 0 12rem;
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        padding: 10rem 0;

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 30%;
            width: 100%;
            background: linear-gradient(to top right, transparent 50%, ${({ theme }) => theme.color.gray} 0);
            left: 0;
            top: 0;
            z-index: 0;
        }
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
    z-index: 1;

    ${({ theme }) => theme.mq.desktop}{
        flex-direction: column;
        height: 70rem;

    }
`