import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};

    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.desktopHeader};
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8rem 0 6rem;
`

export const ImageWrapper = styled.div`
    height: 30rem;
`