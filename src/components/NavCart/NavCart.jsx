import React from 'react';
import { Wrapper, MenuWrapper, IconsWrapper, StyledSocialIcon } from './NavCart.styles';
import { PropTypes } from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { socialmedia } from 'helpers/socialmedia';
import { navItems } from 'helpers/navigationItems';

export const NavCart = ({ isActive, toggleMenu }) => {
    const { allContentfulSocialMedia } = useStaticQuery(query);

    return (
        <Wrapper id="menu" isActive={isActive}>
            <MenuWrapper>
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name} onClick={toggleMenu}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </MenuWrapper>
            <IconsWrapper>
                {allContentfulSocialMedia?.edges.map((item) => {
                    const socialItem = item.node;
                    const Social = socialmedia.find((social) => social.id === socialItem.name);

                    return (
                        <StyledSocialIcon key={socialItem.name}>
                            <a href={socialItem.link} target="_blank" rel="noreferrer">
                                {Social.icon}
                            </a>
                        </StyledSocialIcon>
                    );
                })}
            </IconsWrapper>
        </Wrapper>
    );
};

NavCart.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func,
};

const query = graphql`
    query getSocialMedia {
        allContentfulSocialMedia(sort: { fields: priority, order: ASC }) {
            edges {
                node {
                    name
                    link
                    priority
                }
            }
        }
    }
`;
