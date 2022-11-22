import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 6rem 0;
`
export const ContentWrapper = styled.div`
    h4{
        font-size: 3.2rem;
        line-height: 4rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 6rem;
    }
`

export const ArticlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    article:last-child{
        display: none;
    }

    ${({ theme }) => theme.mq.tablet}{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        row-gap: 3rem;

        article:last-child{
            display: block;
        }
    }

    ${({ theme }) => theme.mq.desktop}{
        flex-wrap: nowrap;
        gap: 2.4rem;

        article:last-child{
            display: none;
        }
    }

`