import styled from "styled-components";
import { overlay } from 'utils/overlay'
import ArrowLeft from 'assets/icons/fatleftarrow.svg';
import ArrowRight from 'assets/icons/fatrightarrow.svg';
import { StyledIcon } from 'components/StyledIcon'

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};
    position: relative;
`

export const ContentWrapper = styled.div`
    padding: 8rem 0 0;

    ${({ theme }) => theme.mq.tablet}{
        padding: 16rem 0 0;
    }

    ${({ theme }) => theme.mq.desktop}{
        padding: 22rem 0 0;
    }

`

export const ArticleContentWrapper = styled.article`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 8rem;
    z-index: 1;

    ${({ theme }) => theme.mq.tablet}{
        width: 85%;
        margin: 0 auto 8rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 5rem;
        width: 75%;
        margin: 0 auto 8rem;
    }

    p{
        font-size: 1.2rem;
        line-height: 2;
        color: ${({ theme }) => theme.color.text};

        ${({ theme }) => theme.mq.desktop}{
            font-size: 1.4rem;
        }
    }
    h3{
        font-size: 2.4rem;
        line-height: 3rem;
        color: ${({ theme }) => theme.color.black};

        ${({ theme }) => theme.mq.desktop}{
            font-size: 3.2rem;
            line-height: 3.6rem;
        }
    }
    h4{
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.color.black};

        ${({ theme }) => theme.mq.desktop}{
            font-size: 2.4rem;
            line-height: 3rem;
        }
    }
    hr{
        border: none;
        border-top: 1px solid ${({ theme }) => theme.color.category};
    }
    iframe {
        display: block;
        width: 100%;
        height: 22rem;

        ${({ theme }) => theme.mq.tablet}{
            width: 60%;
            height: 24rem;
            margin: 0 auto;
        }


        ${({ theme }) => theme.mq.desktop}{
            width: 75%;
            height: 34rem;
        }
    }
    ul{
        list-style: none;
        margin: -3rem 0 0;
        li{
            padding-left: 1rem;
            position: relative;
            ::after{
                content: '-';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
        }
    }
    ol{
        margin: -3rem 0 0;
        padding-left: 1rem;
    }
    blockquote{
        ${({ theme }) => theme.mq.desktop}{
            display: flex;
        }

        svg{
            margin-bottom: 2rem;
            width: 3.6rem;
            path {
                width: 100%;
                height: 100%;
            }

            ${({ theme }) => theme.mq.desktop}{
                height: fit-content;
                margin: 0 2rem 0 0;
                width: 12rem;
            }
        }
        span{
            ${({ theme }) => theme.mq.desktop}{
                display: inline-block;
            }
        }
        p{
            font-size: 1.8rem;
            line-height: 2.4rem;
            color: ${({ theme }) => theme.color.black};
            font-weight: 700;
            margin-bottom: 2rem;

            ${({ theme }) => theme.mq.desktop}{
                font-size: 2.4rem;
                line-height: 3.2rem;
            }
        }
        cite{
            font-size: 1.8rem;
            font-style: normal;
            line-height: 2.4rem;
            color: ${({ theme }) => theme.color.black};
            font-weight: 700;

            ${({ theme }) => theme.mq.desktop}{
                font-size: 2.4rem;
                line-height: 3.2rem;
            }
        }
    }
`
export const ImageWrapper = styled.div`
    height: auto;
    width: 100%;

    ${({ theme }) => theme.mq.tablet}{
        width: 60%;
        margin: 0 auto;
    }

    ${({ theme }) => theme.mq.desktop}{
        width: 75%;
    }
`

export const GalleryWrapper = styled.div`
    width: 100%;
    height: 32rem;

    ${({ theme }) => theme.mq.tablet}{
        width: 85%;
        height: 46rem;
        margin: 0 auto;
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        height: 25rem;
        width: 100%;
        z-index: 2;
    }
`

export const GalleryContent = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        z-index: 0;

        :after{
            content: '';
            position: absolute;
            width: 20%;
            height: 100%;
            top: 0;
            right: 0;
            z-index: 1;
            background-color: rgba(56, 62, 82, 0);
            background-image: linear-gradient(45deg, rgba(56, 62, 82, 0) 40%, rgba(0, 0, 0, 0.8) 100%);
            pointer-events: none;
        }

        :before{
            content: '';
            position: absolute;
            width: 20%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: rgba(56, 62, 82, 0);
            background-image: linear-gradient(-45deg, rgba(56, 62, 82, 0) 40%, rgba(0, 0, 0, 0.8) 100%);
            pointer-events: none;
        }
    }
`

export const GalleryDisplayer = styled.div`
    height: 22rem;
    display: flex;
    transform: ${({ active }) => `translateX(${-((active - 1) * 100)}%)`};
    transition: transform .2s ease;

    ${({ theme }) => theme.mq.tablet}{
        height: 30rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        height: 100%;
        gap: 3rem;
        transform: ${({ active }) => `translateX(calc(-${active - 1} * (100% / 3 + 1rem)))`};
    }
`

export const GalleryInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    height: 10rem;

    span {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.color.black};
    }

    ${({ theme }) => theme.mq.tablet}{
        height: 16rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        display: none;
    }

`

export const GalleryImageWrapper = styled.div`
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    position: relative;
    cursor: pointer;

    ${overlay(.2)}

    ${({ theme }) => theme.mq.desktop}{
        width: calc(100% / 3 - 2rem);
    }
`

export const StyledArrowRight = styled(ArrowRight)`
    path {
        stroke: ${({ theme, disabled }) => disabled ? theme.color.category : theme.color.black};
    }
`
export const StyledArrowLeft = styled(ArrowLeft)`
    path {
        stroke: ${({ theme, disabled }) => disabled ? theme.color.category : theme.color.black};
    }
`

export const StyledArrowIcon = styled(StyledIcon)`
    display: none;
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: ${({ right }) => !right && 0};
    right: ${({ right }) => right && 0};
    z-index: 1;
    transform: ${({ right }) => right ? 'rotate(180deg) translate(-50%, 50%)' : 'translate(-50%, -50%)'};
    &:hover {
        svg path {
            fill: ${({ theme }) => theme.color.text} ;
        }
    }
    svg path {
        stroke: ${({ theme }) => theme.color.white};
    }

    ${({ theme }) => theme.mq.desktop}{
        display: block;
    }
`