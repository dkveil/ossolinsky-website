import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledButton } from './Button.styles';
import { Link } from 'gatsby';

export const Button = ({ children, variant, onClickHandler, isLink = false, path }) => {

    if (isLink) {
        return (
            <StyledButton
                variant={variant}
                onClick={onClickHandler}
                isLink={isLink}
            >
                <Link to={path}>
                    {children}
                </Link>
            </StyledButton>
        )
    }

    if (!isLink) {
        return (
            <StyledButton
                variant={variant}
                onClick={onClickHandler}
            >
                {children}
            </StyledButton>
        );
    }
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['contained', 'contained-outlined']).isRequired,
    onClickHandler: PropTypes.func,
    isLink: PropTypes.bool,
    path: ({ isLink, path }, componentName) => {
        if (isLink === true && path === undefined && typeof path !== 'string') {
            return new Error(`Provide a path for the ${componentName}`)
        }
    }
}

Button.defaultProps = {
    isLink: false,
}