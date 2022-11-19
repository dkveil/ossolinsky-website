import styled from "styled-components";
import { overlay } from 'utils/overlay'
import ArrowLeft from 'assets/icons/fatleftarrow.svg';
import ArrowRight from 'assets/icons/fatrightarrow.svg';

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};
`

export const ContentWrapper = styled.div`
    padding: 8rem 0;

`

export const ArticleContentWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 8rem;

    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: ${({ theme }) => theme.color.text};
    }
    h3{
        font-size: 2.4rem;
        line-height: 3rem;
        color: ${({ theme }) => theme.color.black};
    }
    h4{
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.color.black};
    }
    hr{
        border: none;
        border-top: 1px solid ${({ theme }) => theme.color.category};
    }
    iframe {
        width: 100%;
        height: 22rem;
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
        color: ${({ theme }) => theme.color.black};
        font-size: 1.8rem;
        line-height: 2.4rem;
    }
`

export const ImageWrapper = styled.div`
    height: auto;
    width: 100%;
`

export const GalleryWrapper = styled.div`
    width: 100%;
    height: 32rem;
    overflow: hidden;
`

export const GalleryDisplayer = styled.div`
    height: 22rem;
    display: flex;
    transform: ${({ active }) => `translateX(${-((active - 1) * 100)}%)`};
    transition: transform .2s ease;
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

`

export const GalleryImageWrapper = styled.div`
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    position: relative;
    cursor: pointer;

    ${overlay(.2)}
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