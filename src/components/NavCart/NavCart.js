import React from 'react';
import { Wrapper, MenuWrapper, IconsWrapper, StyledSocialIcon } from './NavCart.styles'
import { PropTypes } from 'prop-types'
import { Link } from 'gatsby';
import { navItems, socialsItems } from './data';

export const NavCart = ({ isActive, toggleMenu }) => {
    return (
        <Wrapper id="menu" isActive={isActive}>
            <MenuWrapper>
                <nav>
                    <ul>
                        {navItems.map(item => (
                            <li key={item.name} onClick={toggleMenu}>
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </MenuWrapper>
            <IconsWrapper>
                {socialsItems.map(item => (
                    <StyledSocialIcon key={item.name}>
                        <a href={item.path} target="_blank" rel="noreferrer">
                            {item.icon}
                        </a>
                    </StyledSocialIcon>
                ))}
            </IconsWrapper>
        </Wrapper>
    );
}

NavCart.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func
}