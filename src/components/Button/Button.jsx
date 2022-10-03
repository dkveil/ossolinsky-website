import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledButton } from './Button.styles';
import { Link } from 'gatsby';

export const Button = ({
    children,
    variant,
    onClickHandler,
    isLink = false,
    path,
    blank,
    boxOverlay,
    width,
    color,
}) => {
    const internal = /^\/(?!\/)/.test(path);

    if (isLink && internal) {
        return (
            <StyledButton
                variant={variant}
                onClick={onClickHandler}
                isLink={isLink}
                boxOverlay={boxOverlay}
                width={width}
                color={color}
            >
                <span>
                    <Link
                        to={path}
                        target={blank && '_blank'}
                        rel={blank && 'noreferrer'}
                    >
                        {children}
                    </Link>
                </span>
            </StyledButton>
        );
    }

    if (isLink && !internal) {
        return (
            <StyledButton
                variant={variant}
                onClick={onClickHandler}
                isLink={isLink}
                boxOverlay={boxOverlay}
            >
                <span>
                    <a
                        href={path}
                        target={blank && '_blank'}
                        rel={blank && 'noreferrer'}
                    >
                        {children}
                    </a>
                </span>
            </StyledButton>
        );
    }

    if (!isLink) {
        return (
            <StyledButton
                variant={variant}
                onClick={onClickHandler}
                boxOverlay={boxOverlay}
            >
                <span>{children}</span>
            </StyledButton>
        );
    }
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.oneOf([
        'contained',
        'contained-outlined',
        'outlined',
        'full-outlined',
    ]).isRequired,
    onClickHandler: PropTypes.func,
    isLink: PropTypes.bool,
    path: ({ isLink, path }, componentName) => {
        if (isLink === true && path === undefined && typeof path !== 'string') {
            return new Error(`Provide a path for the ${componentName}`);
        }
    },
    blank: PropTypes.bool,
    boxOverlay: PropTypes.oneOf(['bottom-left', 'bottom-right']),
    width: PropTypes.string,
    color: PropTypes.string,
};

Button.defaultProps = {
    isLink: false,
};
