import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};
`

export const ContentWrapper = styled.div`
    padding: 12rem 0;
`

export const ImageWrapper = styled.div`
    height: 30rem;
    position: relative;

    ::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
    }
`