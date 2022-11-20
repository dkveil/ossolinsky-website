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
`