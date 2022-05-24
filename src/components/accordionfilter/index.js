import React from "react";
import styled from 'styled-components';
import Checkbox from "../checkbox";
import Collapsible from "react-collapsible";

export default function AccordionFilter({ label }) {
    const renderTrigger = () => {
        return (
            <TriggerContainer>
                <CloseTriggerElement />{label}
            </TriggerContainer>
        )
    }

    const renderTriggerWhenOpen = () => {
        return (
            <TriggerContainer>
                <OpenTriggerElement />{label}
            </TriggerContainer>
        )
    }

    return (
        <Collapsible trigger={renderTrigger()} triggerWhenOpen={renderTriggerWhenOpen()} >
            <Checkbox label="Test" />
            <Checkbox label="Test" />
            <Checkbox label="Test" />
            <Checkbox label="Test" />
        </Collapsible>
    )
}

const TriggerContainer = styled.div`
    margin-bottom: 25px;
    font-size: 1.05em;
    font-weight: bold;
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