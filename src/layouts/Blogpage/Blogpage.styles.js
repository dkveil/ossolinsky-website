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
            height: 22rem;
            width: 100%;
            background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.color.gray} 0);
            left: 0;
            bottom:0;
            z-index: 0;
        }
    }
`

export const BlogPostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 8rem;
    z-index: 1;


    ${({ theme }) => theme.mq.tablet}{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        row-gap: 3rem;

    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 1.5rem;
        row-gap: 4rem;
        margin-bottom: 12rem;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    padding: 3rem;
    background-color: ${({ theme }) => theme.color.gray};
    text-align: center;

    ${({ theme }) => theme.mq.tablet}{
        width: 70%;
    }

    ${({ theme }) => theme.mq.desktop}{
        width: 45%;
    }

    h2{
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: .5rem;
    }
    h3{
        font-weight: 400;

    }
`