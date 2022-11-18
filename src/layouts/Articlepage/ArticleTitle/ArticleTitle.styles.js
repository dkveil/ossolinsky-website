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

`

export const ImageWrapper = styled.div`
    position: relative;
    height: 39rem;
    width: 100%;

    ${overlay(.2)}

`

export const IntroWrapper = styled.div`
    min-height: 39rem;
    display: flex;
`

export const ContentWrapper = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;

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
        }

        span {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.color.category};

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