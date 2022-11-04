import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    height: calc(100vh - ${({ theme }) => theme.height.mobileHeader});
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.mobileHeader};
        height: calc(100vh - ${({ theme }) => theme.height.mobileHeader});

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 40%;
            width: 100%;
            background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.color.gray} 0);
            left: 0;
            bottom: 0;
            z-index: 1;
        }
    }
`

export const Heading = styled.h1`
    font-size: ${({ theme }) => theme.font.size.mobile.heading404};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 2rem;
    line-height: 1;

    ${({ theme }) => theme.mq.desktop}{
        font-size: ${({ theme }) => theme.font.size.desktop.heading404};
    }
`

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.mobile.paragraph404};
    color: ${({ theme }) => theme.color.text};
    text-align: center;
    margin-bottom: 3rem;

    ${({ theme }) => theme.mq.desktop}{
        font-size: ${({ theme }) => theme.font.size.desktop.paragraph404};
        text-align: start;
    }

`


export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: inherit;

    ${({ theme }) => theme.mq.desktop}{
        align-items: flex-start;

    }
`