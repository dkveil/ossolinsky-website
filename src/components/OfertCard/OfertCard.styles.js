import styled from "styled-components";
import { overlay } from 'utils/overlay';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 45rem;
    width: 100%;
    padding: 5rem 0;

    ${overlay(0.2)}
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 28rem;
    height: 100%;
    margin: 0 auto;
    z-index: 2;
    div{
        display: flex;
        flex-direction: column;
    }
`

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.mobile.ofertHeading};
    line-height: 3.2rem;
    text-shadow: 0 2px 2px ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
`

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.mobile.ofertParagraph};
    line-height: 1.8rem;
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 4rem;
`
export const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`