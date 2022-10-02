import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

export const Heading = styled(({ variant, children, ...props }) => {
    const HtmlTag = variant;
    return <HtmlTag {...props}>{children}</HtmlTag>;
})(
    ({ theme, variant, textAlign, margin, color }) => css`
        text-transform: uppercase;
        text-align: ${textAlign ? textAlign : 'start'};
        text-shadow: 0 2px 2px ${theme.color.black};
        margin: ${margin ? margin : 0};

        color: ${() => {
            switch (color) {
                case 'black':
                    return theme.color.black;
                case 'white':
                    return theme.color.white;
            }
        }};

        ${() => {
            switch (variant) {
                case 'h1':
                    return css`
                        font-size: ${theme.font.size.mobile.heroHeading};
                        line-height: calc(
                            ${theme.font.size.mobile.heroHeading} + 4px
                        );
                        font-weight: 600;
                        text-align: center;
                    `;
                case 'h2':
                    return css`
                        position: relative;
                        font-size: ${theme.font.size.mobile.heading};
                        line-height: 3.6rem;
                        z-index: 0;

                        &::before {
                            content: '';
                            display: block;
                            position: absolute;
                            height: 4.2rem;
                            width: 13rem;
                            background-color: ${theme.color.white};
                            left: -11px;
                            top: -8px;
                            z-index: -1;
                        }
                    `;
            }
        }};
    `
);

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string.isRequired,
    margin: PropTypes.string,
};

Heading.defaultProps = {
    variant: 'h2',
};
