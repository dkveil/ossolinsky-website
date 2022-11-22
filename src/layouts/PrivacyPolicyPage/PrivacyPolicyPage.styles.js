import styled from "styled-components"

export const Wrapper = styled.div`
    margin-top: ${({ theme }) => theme.height.mobileHeader};

    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.desktopHeader};

    }
`

export const ContentContainer = styled.div`

`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 300px;
    width: 100%;

    h1{
        line-height: 1;
        span{
            display: block;
        }
    }
`

export const ContentWrapper = styled.div`
    padding-bottom: 6rem;

    div{
        margin-bottom: 6rem;
    }
    h5{

        font-size: 2rem;
        line-height: 1.2;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 2rem;

        ${({ theme }) => theme.mq.tablet}{
            font-size:2.6rem;
        }
        ${({ theme }) => theme.mq.desktop}{
            font-size:3rem;
        }
    }
    p, ul{
        font-size: ${({ theme }) => theme.font.size.mobile.paragraph};
        line-height: 2.8rem;
        color: ${({ theme }) => theme.color.text};
        margin-bottom: 2rem;


        ${({ theme }) => theme.mq.desktop} {
            font-size: ${({ theme }) => theme.font.size.desktop.paragraph};
            line-height: 3.2rem;
        }
    }
    ul{
        margin: 2rem 0 2rem 3rem;
    }

`