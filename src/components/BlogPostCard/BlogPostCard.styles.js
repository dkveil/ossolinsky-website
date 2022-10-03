import styled from 'styled-components';

export const Wrapper = styled.article`
    width: calc(50% - 1.5rem);
    padding-bottom: 1rem;
    a{
        color: inherit;
        text-decoration: none;
    }
    h3{
        display: -webkit-box;
        height: 10rem;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.color.black};
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis " [..]";
        -webkit-line-clamp: 4; /* number of lines to show */
        line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    p{
        display: none;
    }
    span{
        font-size: 1.2rem;
    }

    :first-child{
        width: 100%;

        h3{
            font-size: 2.4rem;
            line-height: 3.2rem;
            height: fit-content;
        }
        p{
            display: block;
            font-size: 1.2rem;
            line-height: 2;
            color: ${({ theme }) => theme.color.text};
        }
        span{
            display: none;
        }
    }

`;


export const ImageWrapper = styled.div`
    width: 100%;
    height: ${({ main }) => main ? '19rem' : '10rem'};
    margin-bottom: 2rem;
`