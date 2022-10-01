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
    transition: background-color ${({ theme }) => theme.transition.navcart};
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

export const StyledLogoIcon = styled(StyledIcon)`
    svg path{
        transition: fill ${({ theme }) => theme.transition.navcart};
    }
`