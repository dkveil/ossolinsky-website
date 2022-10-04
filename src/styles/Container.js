import React from "react";
import styled from "styled-components";

export const Container = styled(({ ...props }) => <div className="container" {...props} />)`
    display: flex;
    flex-direction: column;
    height: inherit;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;

    ${({ theme }) => theme.mq.desktop}{
        flex-direction: row;
        padding: 0;
        width: 80vw;
        max-width: 1240px;

    }
`