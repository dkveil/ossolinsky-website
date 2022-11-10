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

export const StyledInput = styled.input`
    height: 3rem;
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem 3px;
    margin-bottom: 4rem;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ error }) => error ? 'red' : '#7C8794'};
    background-color: inherit;
    color: ${({ theme, error }) => error ? 'red' : theme.color.text};
    ::placeholder {
        color: ${({ theme, error }) => error ? 'red' : theme.color.text}
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
    border-bottom: 1px solid ${({ error }) => error ? 'red' : '#7C8794'};
    color: ${({ theme, error }) => error ? 'red' : theme.color.text};
    margin-bottom: 5rem;

    ::placeholder {
        color: ${({ theme, error }) => error ? 'red' : theme.color.text}
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
    color: red;
`