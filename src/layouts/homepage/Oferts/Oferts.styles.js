import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
`

export const ContentWrapper = styled.div`
    padding: 8rem 0;
`

export const OfertFeaturesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 3rem;
    li {
        font-size: 1.2rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }
`


export const OfertsWrapper = styled.div`
    width: 100%;
`