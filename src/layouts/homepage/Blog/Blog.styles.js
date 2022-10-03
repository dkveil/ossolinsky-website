import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 3rem 0 8rem;
    background-color: ${({ theme }) => theme.color.white};
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    gap: 3rem;
`