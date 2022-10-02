import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};
    padding: 3rem 0 12rem;
`

export const ContentWrapper = styled.div`
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 360px;
    background: yellow;
    div picture img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`