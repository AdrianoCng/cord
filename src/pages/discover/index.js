import React from "react";
import styled from 'styled-components';

import * as sizes from "../../breakpoints";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import Hamburger from "../../components/hamburger";
import { fetchPopularMovies, fetchMovieGenres, fetchMovieByKeyword } from "../../fetcher";

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
    const { results, total_results } = await fetchPopularMovies();

    this.setState({
      results: results || [],
      totalCount: total_results || 0
    })
  }

  async populateMovieGenres() {
    const movieGenres = await fetchMovieGenres();

    this.setState({
      genreOptions: movieGenres.genres || []
    })
  }

  // TODO: Update search results based on the keyword and year inputs
  async searchMovies() {
    if (!this.state.keyword) {
      this.populatePopularMovies();
      return;
    }

    const movie = await fetchMovieByKeyword(this.state.keyword, this.state.year);

    this.setState({
      results: movie.results,
      totalCount: movie.total_results || 0
    });
  }

  // TODO: Preload and set the popular movies and movie genres when page loads
  async componentDidMount() {
    this.populatePopularMovies()
    this.populateMovieGenres();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.keyword !== prevState.keyword) || (this.state.year !== prevState.year)) {
      this.searchMovies()
    }
  }


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
            onChange={(name, value) => { this.setState({ [name]: value }) }}
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

  @media (max-width: ${sizes.laptop}) {
    padding-top: 28px;
  }
`

const MovieResults = styled.div`
  display: inline-block;
  width: 100%;
  
  @media (min-width: ${sizes.laptop}) {
    width: calc(100% - 295px);
  }
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;

  @media (max-width: ${sizes.laptop}) {
    width: 100%;
  }
`

const MobilePageTitle = styled.h1`
  display: none;

  @media (max-width: ${sizes.laptop}) {
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