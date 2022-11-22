import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    height: 39rem;

    ${({ theme }) => theme.mq.desktop}{
        background-color: ${({ theme }) => theme.color.gray};
        position: relative;
        z-index: 0;

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 90%;
            width: 100%;
            background: linear-gradient(to bottom left, transparent 50%, ${({ theme }) => theme.color.white} 0);
            left: 0;
            bottom: 0;
            z-index: -1;
        }
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;



    ${({ theme }) => theme.mq.desktop}{
        width: 75%;
        margin: 0 auto;
    }

    hr {
        border: none;
        border-top: 1px solid ${({ theme }) => theme.color.black};
        margin-bottom: 2rem;

        ${({ theme }) => theme.mq.desktop}{
            margin-bottom: 3rem;
        }
    }
`

export const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;



    ${({ theme }) => theme.mq.desktop}{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    h5{
        font-size: 2.4rem;
        line-height: 3rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.black};
    }
    div{
        display: flex;
        gap: 2rem;

        span {
            cursor: pointer;
        }

        ${({ theme }) => theme.mq.desktop}{
            gap: 1.5rem;
        }
    }

`