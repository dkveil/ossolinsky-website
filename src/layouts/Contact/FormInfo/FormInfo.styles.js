import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};
    padding: 8rem 0 6rem;

    ${({ theme }) => theme.mq.tablet}{
        min-height: 600px;
    }

    ${({ theme }) => theme.mq.desktop}{
        padding: 24rem 0;
        position: relative;

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 20%;
            width: 100%;
            background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.color.white} 0);
            left: 0;
            bottom: 0;
            z-index: 0;
        }
        ::before{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 25%;
            width: 58%;
            background: linear-gradient(to top right, transparent 50%, ${({ theme }) => theme.color.white} 0);
            right: 0;
            top: 0;
            z-index: 0;
        }
    }
`

export const ContentContainer = styled.div`
    ${({ theme }) => theme.mq.tablet}{
        display: flex;
        align-items: center;
    }
`

export const ContentWrapper = styled.div`
    ${({ theme }) => theme.mq.tablet}{
        padding-right: 4rem;
        width: 80%;
    }

    ${({ theme }) => theme.mq.desktop}{
        width: 88%;
        padding-right: 8rem;
    }
`