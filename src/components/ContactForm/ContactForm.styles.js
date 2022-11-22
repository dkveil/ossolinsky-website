import styled from "styled-components";

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
`

export const StyledLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.color.black};
`

export const FieldWrapper = styled.div`
    position: relative;
`

export const Checkmark = styled.span`
    position: relative;
    width: 2.8rem;
    height: 2.8rem;
    background: transparent;
    border: 2px solid #7C8794;
    cursor: pointer;

    ::after {
        position: absolute;
        content: '';
        display: none;
        top: 50%;
        left: 50%;
        width: 2rem;
        height: 1.1rem;
        border: solid ${({ theme }) => theme.color.black};
        border-width: 0 0 3px 3px;
        transform: translate(-50%, -70%) rotate(-45deg) ;
        z-index: 1;
    }
`

export const Disclaimer = styled.span`
    font-size: 1.2rem;
    width: fit-content;
    max-width: calc(100% - 1.5rem - 2.8rem);
    color: ${({ theme, error }) => error ? '#FE4D4D' : theme.color.category};

    ${({ theme }) => theme.mq.desktop}{
        font-size: 1.4rem;
    }

    a{
        color: ${({ theme, error }) => error ? '#fe2020' : theme.color.text}
    }
`

export const LastFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;

    label{
        display: flex;
        align-items: center;
        gap: 1.5rem;

        input {
            position: absolute;
            opacity: 0;
            width: 2.8rem;
            height: 2.8rem;

            :hover ~ ${Checkmark} {
                background-color: rgba(124, 135, 148, .1);
            }

            :checked ~ ${Checkmark}::after{
                display: block;
            }
        }
    }

    ${({ theme }) => theme.mq.desktop}{
        width: fit-content;
        flex-direction: row-reverse;
        align-items: center;
    }
`

export const StyledInput = styled.input`
    height: 3rem;
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem 3px;
    margin-bottom: 4rem;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ error }) => error ? '#FE4D4D' : '#7C8794'};
    background-color: inherit;
    color: ${({ theme, error }) => error ? '#FE4D4D' : theme.color.text};
    ::placeholder {
        color: ${({ theme, error }) => error ? '#FE4D4D' : theme.color.text}
    }
    :focus{
        background-color: rgba(0,0,0,0.05)
    }
`

export const StyledTextArea = styled.textarea`
    font-size: 1.2rem;
    padding: 1rem 3px;
    height: 14rem;
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    background-color: inherit;
    border-bottom: 1px solid ${({ error }) => error ? '#FE4D4D' : '#7C8794'};
    color: ${({ theme, error }) => error ? '#FE4D4D' : theme.color.text};
    margin-bottom: 5rem;

    ::placeholder {
        color: ${({ theme, error }) => error ? '#FE4D4D' : theme.color.text}
    }

    :focus{
        background-color: rgba(0,0,0,0.05)
    }

    ${({ theme }) => theme.mq.desktop}{
        height: 14rem;
    }
`

export const ErrorMessage = styled.span`
    position: absolute;
    left: 3px;
    bottom: ${({ textarea }) => textarea ? '3.6rem' : '2.2rem'};
    color: #FE3939;
`