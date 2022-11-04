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
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: ${({ theme, isActive }) => isActive ? theme.color.black : theme.color.text};
    transform: ${({ isActive }) => isActive ? 'scale(1.1)' : 'scale(1)'};
    transition: transform 0.4s ease;
    cursor: pointer;
`;