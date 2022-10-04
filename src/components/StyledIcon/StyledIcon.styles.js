import styled from "styled-components"
import React from 'react'

export const StyledIconWrapper = styled(({ color, width, ...props }) => <span {...props} />)`
    display: inline-block;
    width: ${({ width }) => width ? width : '100px'};

    svg {
        width: 100%;
        height: auto;
    }

    svg path {
        stroke: none;
        fill: ${({ color }) => color ? color : ({ theme }) => theme.color.white};
    }
`