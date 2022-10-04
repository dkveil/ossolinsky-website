import React from "react";
import styled from "styled-components";

export const Container = styled(({ ...props }) => <div className="container" {...props} />)`
    height: inherit;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;

    ${({ theme }) => theme.mq.desktop}{
        padding: 0;
        width: 80vw;
        max-width: 1240px;
    }
`