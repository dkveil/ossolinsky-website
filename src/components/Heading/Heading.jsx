import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

export const Heading = styled(
    ({
        variant,
        children,
        overlay,
        overlayPosition,
        overlaySize,
        overlayColor,
        blackPartHeading,
        textAlign,
        smallHeading,
        mobileFontSize,
        tabletFontSize,
        desktopFontSize,
        ...props
    }) => {
        const HtmlTag = variant === 'subpage h1' ? 'h1' : variant === 'offerspage' ? 'h3' : variant;
        return <HtmlTag {...props}>{children}</HtmlTag>;
    }
)(
    ({ theme, variant, textAlign, margin, color, blackPartHeading, smallHeading, mobileFontSize, tabletFontSize, desktopFontSize }) => css`
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
                case 'subpage h1':
                    return css`
                        position: relative;
                        font-size: ${mobileFontSize ? mobileFontSize : theme.font.size.mobile.subpageHeading};
                        line-height: 3.6rem;
                        text-align: ${textAlign ? textAlign : 'start'};
                        z-index: 0;
                        display: inline;
                        width: fit-content;

                        ${theme.mq.tablet} {
                            font-size: ${tabletFontSize ? tabletFontSize : theme.font.size.tablet.subpageHeading};
                            line-height: 4.2rem;
                            text-align: ${textAlign ? textAlign : 'start'};
                        }
                        ${theme.mq.desktop} {
                            font-size: ${desktopFontSize ? desktopFontSize : theme.font.size.desktop.subpageHeading};
                            line-height: 5rem;
                            text-align: ${textAlign ? textAlign : 'start'};
                        }
                    `;
                case 'h1':
                    return css`
                        position: relative;
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
                                    return `to right, ${theme.color.black} ${blackPartHeading},${theme.color.white} ${blackPartHeading}, ${theme.color.white} 70%`;
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

                        ${theme.mq.tablet} {
                            font-size: ${theme.font.size.tablet.heading};
                            line-height: 4rem;
                        }

                        ${theme.mq.desktop} {
                            font-size: ${smallHeading ? theme.font.size.desktop.smallHeading : theme.font.size.desktop.heading};
                            line-height: 5rem;
                        }
                    `;
                case 'offerspage':
                    return css`
                        ${theme.mq.tablet} {
                            position: relative;
                            z-index: 0;
                            text-transform: uppercase;
                            font-size: 1000rem;
                            color: ${theme.color.black};
                        }

                        ${theme.mq.desktop} {
                            font-size: 4.4rem;
                            line-height: 5rem;
                            font-weight: 600;
                        }
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
