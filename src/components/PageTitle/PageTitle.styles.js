import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};

    padding: 8rem 0 12rem;

    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.desktopHeader};
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    ${({ theme }) => theme.mq.tablet}{
        width: 70%;
        margin: 0 auto;
    }

    ${({ theme }) => theme.mq.desktop}{
        width: 45%;
    }
`

export const CategoriesList = styled.ul`
    list-style: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    ${({ theme }) => theme.mq.tablet}{
        flex-direction: row;
        gap: 2rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 3rem;
    }

`

export const CategoryItem = styled.li`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme, active }) => active ? theme.color.black : theme.color.text};

    a{
        text-decoration: none;
        color: inherit;
    }
`