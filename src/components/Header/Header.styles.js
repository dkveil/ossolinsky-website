import React from 'react';
import styled from "styled-components"

export const Wrapper = styled.header`
    position: fixed;
    height: 80px;
    width: 100%;
    background-color: ${(props) => props.bgcolor ? props.bgcolor : null};
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

export const StyledBurger = styled(({ color, ...props }) => <Box {...props} />)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    div{
        position: relative;
        width: 2.55rem;
        height: 2px;
        background-color: ${({ isActive }) => isActive ? 'transparent' : (({ color }) => color ? color : ({ theme }) => theme.color.white)};
        transition: background-color .1s ease-in;

        &::after, ::before{
            transition: transform .2s ease-in;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: ${({ color }) => color ? color : ({ theme }) => theme.color.white};
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
