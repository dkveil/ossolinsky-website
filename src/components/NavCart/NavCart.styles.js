import styled from "styled-components";
import { StyledIcon } from 'components/StyledIcon'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding-top: ${({ theme }) => theme.height.mobileHeader};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: ${({ theme }) => theme.zindex.navcart};
    background-color: ${({ isActive }) => isActive ? ({ theme }) => theme.color.white : 'transparent'};
    transform: ${({ isActive }) => isActive ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform ${({ theme }) => theme.transition.navcart}, background-color ${({ theme }) => theme.transition.navcart};
`

export const MenuWrapper = styled.div`
    padding: 120px 0;
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
    }
    li{
        margin: 5px 0;
        color: ${({ theme }) => theme.color.black};
    }
    a{
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.size.mobile.navitem};
        color: inherit;
    }
`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 30px;
`

export const StyledSocialIcon = styled(StyledIcon)`
    display: flex;
    justify-content: center;
    width: 30px;


    svg path{
        fill: ${({ theme }) => theme.color.black};
    }
`