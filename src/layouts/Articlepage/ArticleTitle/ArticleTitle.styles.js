import styled from "styled-components";
import { overlay } from 'utils/overlay'
import ArrowLeftIcon from 'assets/icons/thinLeftArrow.svg';
import ShareIcon from 'assets/icons/shareicon.svg'

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
    height: .8rem;
    path{
        fill: ${({ theme }) => theme.color.black};
    }
`

export const StyledShareIcon = styled(ShareIcon)`
    height: 1.4rem;
`

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};


    ${({ theme }) => theme.mq.tablet}{
        position: relative;
        height: 700px;
    }

    ${({ theme }) => theme.mq.desktop}{
        height: calc(100vh - ${({ theme }) => theme.height.desktopHeader});
        margin-top: ${({ theme }) => theme.height.desktopHeader};

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 20%;
            width: 50%;
            background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.color.gray} 0);
            left: 0;
            bottom: 0;
            z-index: 0;
        }
    }


`

export const ImageWrapper = styled.div`
    position: relative;
    height: 39rem;
    width: 100%;

    ${overlay(.2)}

    ${({ theme }) => theme.mq.tablet}{
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
    }
`

export const IntroWrapper = styled.div`
    min-height: 39rem;
    display: flex;

    ${({ theme }) => theme.mq.tablet}{
        height: 100%;
        width: 50%;
        padding-right: 2rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        padding-right: 5rem;
    }
`

export const ContentWrapper = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    position: relative;
    z-index: 1;

    a{
        text-decoration: none;
        color: inherit;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: .8rem;

        h1{
            text-transform: uppercase;
            font-size: 3.2rem;
            line-height: 3.6rem;
            font-weight: 600;
            color: ${({ theme }) => theme.color.black};

            ${({ theme }) => theme.mq.desktop}{
                font-size: 4.4rem;
                line-height: 5rem;
            }
        }

        span {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.color.category};
            cursor: pointer;

            :nth-of-type(2){
                font-weight: 400;
                font-size: 1.2rem;
            }
        }

    }

    h6 {
        color: ${({ theme }) => theme.color.black};
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 400;

        a{
            display: flex;
            width: fit-content;
            align-items: center;
            gap: 1.2rem;
        }
    }

    span {
        display: flex;
        width: fit-content;
        align-items: center;
        gap: 1.2rem;
        color: ${({ theme }) => theme.color.black};
        font-size: 1.2rem;
    }

`