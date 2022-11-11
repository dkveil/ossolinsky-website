import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
    position: ${({ styles }) => styles?.position ? styles.position : 'relative'};
    top: ${({ styles }) => styles?.top ? styles.top : null};
    left: ${({ styles }) => styles?.left ? styles.left : null};
    right: ${({ styles }) => styles?.right ? styles.right : null};
    bottom: ${({ styles }) => styles?.bottom ? styles.bottom : null};
    transform: ${({ styles }) => styles?.transform ? styles.transform : null};
    z-index: ${({ theme }) => theme.zindex.pagination};
`

export const DotsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`

export const Dot = styled.div`
    width: ${({ numeric }) => numeric ? null : '1rem'};
    height: ${({ numeric }) => numeric ? null : '1rem'};
    border-radius: ${({ numeric }) => numeric ? null : '100%'};
    background-color: ${({ theme, isActive, numeric }) => !numeric && isActive ? theme.color.black : numeric ? null : theme.color.text};
    transform: ${({ isActive, numeric }) => isActive && !numeric ? 'scale(1.1)' : numeric ? null : 'scale(1)'};
    transition: transform 0.4s ease;
    font-size: ${({ numeric }) => numeric ? '1.6rem' : null};
    color: ${({ numeric, isActive, theme }) => numeric && isActive ? theme.color.black : numeric ? 'rgba(0,0,0,.5)' : null};
    cursor: pointer;
`;