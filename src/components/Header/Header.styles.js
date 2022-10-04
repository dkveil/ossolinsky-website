import React from 'react'
import styled from "styled-components"
import { StyledIcon } from "components/StyledIcon"

export const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: ${({ theme }) => theme.height.mobileHeader};
    width: 100%;
    background-color: ${(props) => props.bgcolor ? props.bgcolor : null};
    z-index: ${({ theme }) => theme.zindex.header};
    transition: background-color ${({ theme }) => theme.transition.navcart}, box-shadow ${({ theme }) => theme.transition.navcart};
    box-shadow: ${({ isActive, theme, bgcolor }) => {
        if (isActive) {
            return null
        }
        if (!isActive && bgcolor !== 'transparent') {
            return `
            0 0 1px ${theme.color.black}
            `
        }
    }};

    ${({ theme }) => theme.mq.desktop}{
        height: ${({ theme }) => theme.height.desktopHeader};
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const Box = styled.div`
    width: 4rem;
    height: 100%;
`

export const StyledBurger = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    div{
        position: relative;
        width: 2.55rem;
        height: 2px;
        background-color: ${({ isActive }) => isActive ? 'transparent' : (({ color }) => color ? color : ({ theme }) => theme.color.white)};
        transition: background-color ${({ theme }) => theme.transition.navcart};

        &::after, ::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: ${({ color }) => color ? color : ({ theme }) => theme.color.white};
            transition: transform ${({ theme }) => theme.transition.navcart}, background-color ${({ theme }) => theme.transition.navcart};
        }
        &::after{
            top: ${({ isActive }) => isActive ? '0' : '-7px'};
            transform: rotate(${({ isActive }) => isActive ? '45deg' : '-0'});
        }
        &::before{
            bottom: ${({ isActive }) => isActive ? '0' : '-7px'};
            transform: rotate(${({ isActive }) => isActive ? '-45deg' : '-0'});
        }

    }
`

export const StyledLogoIcon = styled(({ ...props }) => <StyledIcon {...props} />)`
    svg path{
        transition: fill ${({ theme }) => theme.transition.navcart};
    }
`

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 63.6%;
    height: 100%;
`

export const NavWrapper = styled.nav`
    display: flex;
    padding: 0 3rem;
    ul {
        display: flex;
        gap: 24px;
        flex-direction: row;
        align-items: center;
        list-style: none;
    }
`

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    height: fit-content;
    gap: 2.4rem;
`

export const StyledListItem = styled.li`
    color: ${({ color }) => color};
    text-shadow: ${({ theme, color }) => color === theme.color.black ? null : `0px 2px 4px ${theme.color.black}`};
    transition: color ${({ theme }) => theme.transition.navcart}, text-shadow ${({ theme }) => theme.transition.navcart};
    :hover {
        color: ${({ color, theme }) => color === theme.color.black ? theme.color.navhover : null};
        text-shadow: ${({ theme, color }) => color === theme.color.black ? null : `0px 2px 8px black`};
    }
    a{
        font-size: 1.4rem;
        font-weight: 600;
        text-decoration: none;
        color: inherit;
    }

`