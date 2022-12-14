import styled from "styled-components"
import React from 'react'

export const StyledIconWrapper = styled(({ color, width, height, ...props }) => <span {...props} />)`
    display: inline-block;
    width: ${({ width }) => width ? width : '100px'};
    height: ${({ height }) => height ? height : null};

    svg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    svg path {
        stroke: none;
        fill: ${({ color }) => color ? color : null};
    }
`