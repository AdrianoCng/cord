import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as sizes from "../../breakpoints";

export default function Hamburger({ toogleSidebar }) {
    return (
        <Wrapper onClick={toogleSidebar}>
            <Line />
            <Line />
            <Line />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 26px;
    width: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    @media (min-width: ${sizes.tablet}) {
        display: none;
    }
`

const Line = styled.span`
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: ${colors.fontColor};
`