import React from "react";
import styled, { css } from 'styled-components';

import * as sizes from "../../breakpoints";
import ExpandableFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

export default function SearchFilters({ genres, ratings, languages, onChange }) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          name="keyword"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
          placeholder="Search for movies"
          onChange={onChange}
        />
        <SearchBar
          id="year_search_input"
          type="number"
          name="year"
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder="Year of release"
          onChange={onChange}
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        <ExpandableFilter
          label={"Select genre(s)"}
          options={genres}
        />
        <ExpandableFilter
          label={"Select min. vote"}
          options={ratings}
        />
        <ExpandableFilter
          label={"Select language"}
          options={languages}
        />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  @media (max-width: ${sizes.smallLaptop}) {
    &:not(:first-child),
    .search_bar_wrapper:not(:first-child) {
      display: none;
    }
  }
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
`

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`