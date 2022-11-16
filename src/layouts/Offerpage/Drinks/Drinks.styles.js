import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};

`

export const ContentWrapper = styled.div`
    padding: 12rem 0;
`

export const DrinksWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const DrinkWrapper = styled.div`
    position: relative;
    height: 32rem;
    width: 100%;
    color: white;
    z-index: 1;
    padding: 5rem 3rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h4{
        font-size: 2.4rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.white};
        text-shadow: 0 2px 2px ${({ theme }) => theme.color.black};
        font-weight: 600;
    }
    p{
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.color.white};
    }

`

export const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;

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