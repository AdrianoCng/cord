import React from "react";
import styled from 'styled-components';
import filterIcon from "../../images/filter-icon.png";

import * as colors from "../../colors";
import * as sizes from "../../breakpoints";

export default function SearchBar({ icon, id, type, placeholder, onChange, name }) {
  return (
    <InputWrapper className="search_bar_wrapper">
      <img src={icon.src} alt={icon.alt} htmlFor={id} width="25" />
      <input type={type} id={id} name={name} onChange={e => onChange(e.target.name, e.target.value)} placeholder={placeholder} />
      <FilterIconImg src={filterIcon} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid;
  color: ${colors.primaryColor};

  input {
    width: calc(100% - 35px);
    border: 0;
    outline: none;
    color: ${colors.primaryColor};
    font-size: 1.2em;
    margin-left: 10px;
    font-weight: 900;

    &::placeholder {
      opacity: .8;
      color: ${colors.primaryColor};
      font-weight: 300;
    }
  }
`

const FilterIconImg = styled.img`
  background-repeat: none;
  @media (min-width: ${sizes.smallLaptop}) {
    display: none;
  }
`;