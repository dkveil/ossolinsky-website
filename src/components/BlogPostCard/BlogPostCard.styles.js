import styled, { css } from 'styled-components';

export const ImageWrapper = styled.div`
    width: 100%;
    height: ${({ main, blogpage }) => main || blogpage ? '20rem' : '10rem'};


    ${({ blogpage }) => blogpage && css`
        overflow: ${({ blogpage }) => blogpage && 'hidden'};

        div {
            transition: transform .2s ease;
        }

        :hover{
            div {
                transform: scale(1.1);
            }
        }


    `}

    ${({ theme }) => theme.mq.tablet}{
        height: ${({ main }) => main ? '34rem' : '22rem'};
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        width: ${({ main, blogpage }) => main || blogpage ? '100%' : '35%'};
        height: ${({ main, blogpage }) => main ? '40rem' : blogpage ? '24rem' : '100%'};
        border-right: ${({ main, theme, blogpage }) => !main && !blogpage && `2px solid ${theme.color.gray}`};
        margin: 0;
        border: ${({ theme, blogpage }) => !blogpage && `2px solid ${theme.color.gray}`};

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

export const Wrapper = styled.article`
    width: ${({ blogpage }) => blogpage ? '100%' : 'calc(50% - 1rem)'};
    padding-bottom: ${({ blogpage }) => blogpage ? '0' : '1rem'};

    ${({ theme }) => theme.mq.tablet}{
        width: ${({ blogpage }) => blogpage ? 'calc(50% - 1rem)' : null};
    }


    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        width: ${({ blogpage }) => blogpage ? 'calc(33% - .5rem - 3px)' : 'calc(40% - 1.5rem)'};
        height: ${({ blogpage }) => blogpage ? 'auto' : '16rem'};
        padding: 0;
        display: flex;
        flex-direction: ${({ main, blogpage }) => main || blogpage ? 'column' : 'row'};
        border: ${({ main, theme, blogpage }) => !main && !blogpage && `2px solid ${theme.color.gray}`};
        z-index: 0;

        ${({ main, blogpage }) => !main && !blogpage && css`
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

    ${({ theme }) => theme.mq.bigdesktop}{
        width: ${({ blogpage }) => blogpage ? 'calc(33% - .5rem - 2px)' : 'calc(40% - 1.5rem)'};
    }

    ${({ theme }) => theme.mq.large}{
        width: ${({ blogpage }) => blogpage ? 'calc(33% - .5rem - 1px)' : 'calc(40% - 1.5rem)'};
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    h3{
        display: -webkit-box;
        font-size: ${({ blogpage }) => blogpage ? '2.4rem' : '1.6rem'};
        line-height: ${({ blogpage }) => blogpage ? '2.8rem' : '2.4rem'};
        text-transform: uppercase;
        margin-bottom: 1.5rem;
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
            font-size: ${({ blogpage }) => blogpage ? '2.4rem' : '1.6rem'};
            line-height: ${({ blogpage }) => blogpage ? '3.2rem' : '2.4rem'};
            font-weight: 600;
            -webkit-line-clamp: 2;
            margin: .6rem 0 1rem;
        }
    }
    p{
        display: ${({ blogpage }) => blogpage ? '-webkit-box' : 'none'};
        font-size: 1.2rem;
        line-height: 2;
        color: ${({ theme }) => theme.color.text};
        overflow: hidden;

        text-overflow: ellipsis " [..]";
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;

        ${({ theme }) => theme.mq.desktop}{
            display: ${({ blogpage }) => blogpage ? '-webkit-box' : 'none'};
        }

    }

    ${({ blogpage }) => !blogpage && css`

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
            display: -webkit-box;

            ${({ theme }) => theme.mq.tablet}{
                width: 75%;
            }

            ${({ theme }) => theme.mq.desktop}{
                font-size: 1.2rem;
                line-height: 2;
                width: 95%;
            }
        }}
        `

    }
`

export const Date = styled.time`
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

export const ContentWrapper = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.color.white};
    padding: 2rem 0 0;

    ${({ theme }) => theme.mq.desktop}{
        padding: ${({ main, blogpage }) => main ? '2rem 2px' : blogpage ? '2rem 0 0' : '2rem 0 2rem 2rem'};
    }

`
