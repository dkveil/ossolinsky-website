import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    padding-bottom: 3rem;
    position: relative;

    ${({ theme }) => theme.mq.desktop}{

        background-color: ${({ theme }) => theme.color.gray};
        height: 90rem;
    }
`

export const ImageWrapper = styled.div`
    margin-bottom: 4rem;
    height: 46rem;

    ${({ theme }) => theme.mq.tablet}{
        height: 72rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 44%;
    }
`

export const ContentWrapper = styled.div`
    ${({ theme }) => theme.mq.desktop}{
        display: flex;
        flex-direction: column;
        margin: auto;
        justify-content: center;
        margin-left: calc(44% + 10rem);
    }
`