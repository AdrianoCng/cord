import React from "react";
import styled from 'styled-components';
import Collapsible from "react-collapsible";

import Checkbox from "../checkbox";

export default function AccordionFilter({ label, options }) {
    const renderTrigger = () => {
        if (!label) {
            return null;
        }

        return (
            <TriggerContainer>
                <CloseTriggerElement />{label}
            </TriggerContainer>
        )
    }

    const renderTriggerWhenOpen = () => {
        if (!label) {
            return null;
        }

        return (
            <TriggerContainer>
                <OpenTriggerElement />{label}
            </TriggerContainer>
        )
    }

    const renderOptions = () => {
        if (options.length < 1) {
            return null;
        }

        return options.map(el => (
            <Checkbox label={el.name} name={el.name} onChange={(name, value) => console.log(`${name}=${value}`)} />
        ))
    }

    return (
        <Collapsible trigger={renderTrigger()} triggerWhenOpen={renderTriggerWhenOpen()} >
            {renderOptions()}
        </Collapsible>
    )
}

const TriggerContainer = styled.div`
    font-size: 1.05em;
    font-weight: bold;
    cursor: pointer
`

const OpenTriggerElement = styled.span`
    display: inline-block;
    width: 18px;
    height: 1.5px;
    background: black;
    margin-bottom: 5px;
    margin-right: 15px;
    position: relative;
`

const CloseTriggerElement = styled(OpenTriggerElement)`
    &:before {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        width: 18px;
        height: 1.5px;
        background: black;
        transform: rotate(90deg);
    }
`