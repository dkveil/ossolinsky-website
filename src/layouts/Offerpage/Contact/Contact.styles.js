import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    padding: 12rem 0;

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        background-color: ${({ theme }) => theme.color.gray};
        padding: 18rem 0;

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 20%;
            width: 100%;
            background: linear-gradient(to top left, transparent 50%, ${({ theme }) => theme.color.white} 0);
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`


export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    address{
        text-align: center;
        font-style: normal;
        color: ${({ theme }) => theme.color.black};

        span{
            display: block;
            font-size: 1.6rem;
        }
    }
`