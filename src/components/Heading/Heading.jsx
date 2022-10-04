import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

export const Heading = styled(({ variant, children, overlay, overlayPosition, overlaySize, overlayColor, blackPartHeading, ...props }) => {
    const HtmlTag = variant;
    return <HtmlTag {...props}>{children}</HtmlTag>;
})(
    ({ theme, variant, textAlign, margin, color, blackPartHeading }) => css`
        text-transform: uppercase;
        text-align: ${textAlign ? textAlign : 'start'};
        text-shadow: 0 2px 2px ${theme.color.black};
        margin: ${margin ? margin : 0};
        font-weight: 600;

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
                        line-height: calc(${theme.font.size.mobile.heroHeading} + 4px);
                        text-align: center;

                        ${theme.mq.desktop} {
                            font-size: ${theme.font.size.desktop.heroHeading};
                            line-height: 5.6rem;
                            text-align: start;
                            text-shadow: none;
                            background-position: 40% 40%;
                            background: linear-gradient(
                                ${() => {
                                    return `to right, ${theme.color.black} ${blackPartHeading},${theme.color.white} calc(${blackPartHeading}), ${theme.color.white} 70%`;
                                }}
                            );
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                        ${theme.mq.large} {
                            font-size: ${theme.font.size.large.heroHeading};
                            line-height: 6.4rem;
                        }
                    `;
                case 'h2':
                    return css`
                        position: relative;
                        font-size: ${theme.font.size.mobile.heading};
                        line-height: 3.6rem;
                        z-index: 0;
                    `;
            }
        }};

        ${({ overlay, overlayColor, overlayPosition, overlaySize }) => {
            if (overlay) {
                return css`
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        height: ${overlaySize.height ? overlaySize.height : null};
                        width: ${overlaySize.width ? overlaySize.width : null};
                        background-color: ${overlayColor === 'gray' ? theme.color.gray : theme.color.white};
                        left: ${overlayPosition.left ? overlayPosition.left : null};
                        right: ${overlayPosition.right ? overlayPosition.right : null};
                        top: ${overlayPosition.top ? overlayPosition.top : null};
                        bottom: ${overlayPosition.bottom ? overlayPosition.bottom : null};
                        z-index: -1;
                    }
                `;
            }
        }}
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
