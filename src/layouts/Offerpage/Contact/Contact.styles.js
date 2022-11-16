import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
`


export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 12rem 0;

    address{
        text-align: center;
        font-style: normal;
        color: ${({ theme }) => theme.color.black};

        span{
            display: block;
            font-size: 1.6rem;
        }
    }
`