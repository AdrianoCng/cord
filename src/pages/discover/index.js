import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";
import * as sizes from "../../breakpoints";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import Hamburger from "../../components/hamburger";
import { fetchPopularMovies, fetchMovieGenres } from "../../fetcher";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 }
      ],
      languageOptions: [
        { id: 'GR', name: 'Greek' },
        { id: 'EN', name: 'English' },
        { id: 'RU', name: 'Russian' },
        { id: 'PO', name: 'Polish' }
      ]
    };
  }

  async populatePopularMovies() {
    try {
      const popularMovies = await fetchPopularMovies();

      this.setState({ results: popularMovies.results || [] })
    } catch (error) {
      this.setState({ results: [] })
    }
  }

  async populateMovieGenres() {
    try {
      const movieGenres = await fetchMovieGenres();

      this.setState({ genreOptions: movieGenres.genres || [] })
    } catch (error) {
      this.setState({ genreOptions: [] })
    }
  }

  // TODO: Preload and set the popular movies and movie genres when page loads
  async componentDidMount() {
    this.populatePopularMovies()
    this.populateMovieGenres();
  }

  // TODO: Update search results based on the keyword and year inputs

  render() {
    const { genreOptions, languageOptions, ratingOptions, totalCount, results } = this.state;

    return (
      <DiscoverWrapper>
        <MobileHeader>
          <Hamburger toogleSidebar={this.props.toogleSidebar} />
          <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        </MobileHeader>
        <TotalCount>{totalCount} results</TotalCount>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        <MovieResults>
          <MovieList
            movies={results || []}
            genres={genreOptions || []}
          />
        </MovieResults>
      </DiscoverWrapper>
    )
  }
}

const DiscoverWrapper = styled.main`
  padding: 45px;

  @media (max-width: ${sizes.tablet}) {
    padding-top: 28px;
  }
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
  }
`

const MobilePageTitle = styled.h1`
  display: none;

  @media (max-width: ${sizes.tablet}) {
    display: block;
    margin: 0;
    margin-left: 70px;
  }
`

const TotalCount = styled.strong`
  display: block;
`

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
`