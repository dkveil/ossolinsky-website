import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
    width: calc(50% - 1.5rem);
    padding-bottom: 1rem;

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        width: calc(40% - 1.5rem);
        height: 16rem;
        padding: 0;
        display: flex;
        flex-direction: ${({ main }) => main ? 'column' : 'row'};
        border: ${({ main, theme }) => !main && `2px solid ${theme.color.gray}`};
        z-index: 0;

        ${({ main }) => !main && css`
            ::after{
                content: '';
                top: -1.5rem;
                left: -1.5rem;
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: ${({ theme }) => theme.color.black};
                z-index: -1;
            }
        `}

    }

    a{
        color: inherit;
        text-decoration: none;
    }

    h3{
        display: -webkit-box;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.color.black};
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis " [..]";
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;

        ${({ theme }) => theme.mq.tablet}{
            font-size: 2rem;
            line-height: 2.8rem;
        }

        ${({ theme }) => theme.mq.desktop}{
            font-size: 1.6rem;
            line-height: 2.4rem;
            font-weight: 600;
            -webkit-line-clamp: 2;
            margin: .6rem 0 1rem;
        }
    }
    p{
        display: none;
    }

    :first-child{
        width: 100%;

        ${({ theme }) => theme.mq.desktop}{
            width: 60%;
            height: 100%;
            p {
                margin-bottom: ${({ main }) => main && '1rem'};
            }
        }

        h3{
            font-size: 2.4rem;
            line-height: 3.2rem;
            height: fit-content;

            ${({ theme }) => theme.mq.tablet}{
                font-size: 3.2rem;
                line-height: 4.2rem;
                margin: 0 0 2rem;
            }

            ${({ theme }) => theme.mq.desktop}{
                font-size: 4rem;
                line-height: 4.8rem;
                font-weight: 700;
                margin: 0 0 1rem;
            }
        }
        p{
            display: block;
            font-size: 1.2rem;
            line-height: 2;
            color: ${({ theme }) => theme.color.text};
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis " [..]";
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;


            ${({ theme }) => theme.mq.tablet}{
                width: 75%;
            }

            ${({ theme }) => theme.mq.desktop}{
                font-size: 1.2rem;
                line-height: 2;
                width: 95%;
            }
        }

    }

`;

export const Date = styled.span`
    display: ${({ main }) => main ? 'none' : 'block'};
    color: ${({ theme }) => theme.color.text};
    font-size: 1.2rem;
`

export const Category = styled.span`
    display: none;
    color: ${({ theme }) => theme.color.text};
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;

    ${({ theme }) => theme.mq.desktop}{
        display: ${({ main }) => !main && 'block'};
    }

`


export const ImageWrapper = styled.div`
    width: 100%;
    height: ${({ main }) => main ? '19rem' : '10rem'};

    ${({ theme }) => theme.mq.tablet}{
        height: ${({ main }) => main ? '34rem' : '22rem'};
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        width: ${({ main }) => main ? '100%' : '35%'};
        height: ${({ main }) => main ? '40rem' : '100%'};
        border-right: ${({ main, theme }) => !main && `2px solid ${theme.color.gray}`};
        margin: 0;
        border: ${({ theme }) => `2px solid ${theme.color.gray}`};

        ${({ main }) => main && css`
            ::after{
                content: '';
                top: -1.5rem;
                left: -1.5rem;
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: ${({ theme }) => theme.color.black};
                z-index: -1;
            }
        `}
    }
`

export const ContentWrapper = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.color.white};
    padding: 2rem 0 0;

    ${({ theme }) => theme.mq.desktop}{
        padding: ${({ main }) => main ? '2rem 2px' : '2rem 0 2rem 2rem'};
    }

`