import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledButton, StyledArrowIcon } from './Button.styles';
import { Link } from 'gatsby';

export const Button = ({ children, variant, onClickHandler, isLink = false, path, blank, boxOverlay, width, color, boxOverlayColor }) => {
    const internal = /^\/(?!\/)/.test(path);

    if (isLink && variant === 'text') {
        return (
            <StyledButton variant={variant} onClick={onClickHandler} isLink={isLink} width={width} color={color}>
                <span>
                    <Link to={path} target={blank && '_blank'} rel={blank && 'noreferrer'}>
                        {children}
                        <StyledArrowIcon />
                    </Link>
                </span>
            </StyledButton>
        );
    }

    if (!isLink && variant === 'text') {
        return (
            <StyledButton variant={variant} onClick={onClickHandler} isLink={isLink} width={width} color={color}>
                <span>
                    {children}
                    <StyledArrowIcon />
                </span>
            </StyledButton>
        );
    }

    if (isLink && internal) {
        return (
            <StyledButton
                variant={variant}
                onClick={onClickHandler}
                isLink={isLink}
                boxOverlay={boxOverlay}
                width={width}
                color={color}
                boxOverlayColor={boxOverlayColor}
            >
                <span>
                    <Link to={path} target={blank && '_blank'} rel={blank && 'noreferrer'}>
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
                width={width}
                color={color}
                boxOverlayColor={boxOverlayColor}
            >
                <span>
                    <a href={path} target={blank && '_blank'} rel={blank && 'noreferrer'}>
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
                width={width}
                color={color}
                boxOverlayColor={boxOverlayColor}
            >
                <span>{children}</span>
            </StyledButton>
        );
    }
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['no variant', 'contained', 'contained-outlined', 'outlined', 'full-outlined', 'full-contained', 'text'])
        .isRequired,
    onClickHandler: PropTypes.func,
    isLink: PropTypes.bool,
    path: ({ isLink, path }, componentName) => {
        if (isLink === true && path === undefined && typeof path !== 'string') {
            return new Error(`Provide a path for the ${componentName}`);
        }
    },
    blank: PropTypes.bool,
    boxOverlay: PropTypes.oneOf(['bottom-left', 'bottom-right']),
    boxOverlayColor: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
};

Button.defaultProps = {
    isLink: false,
};
