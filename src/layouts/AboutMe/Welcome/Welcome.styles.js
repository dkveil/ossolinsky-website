import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.header};
    }

`

export const ImageWrapper = styled.div`
    height: 52rem;
`

export const ContentWrapper = styled.div`
    height: 50rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`