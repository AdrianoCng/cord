import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as sizes from "../../breakpoints";

export default function MovieItem({ movie, genres }) {

  const renderGenres = () => {
    const genresNames = genres.reduce((acc, genre) => {
      if (movie.genre_ids.includes(genre.id)) {
        acc.push(genre.name);
      }

      return acc
    }, []);

    return (
      <Genres>{genresNames.join(" | ")}</Genres>
    )
  }

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont movie={movie}>
      </LeftCont>
      <RightCont>
        <Header>
          <Title>{movie.title}</Title>
          <Badge>{movie.vote_average}</Badge>
        </Header>
        {renderGenres()}
        <Overview>
          {movie.overview}
        </Overview>

        <ReleaseDate>{movie.release_date}</ReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  )
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  height: 250px;
  display: flex;
  gap: 20px;
`

const LeftCont = styled.div`
  display: inline-block;
  min-width: 150px;
  max-height: 250px;
  background-image: ${props => `url(https://image.tmdb.org/t/p/original/${props.movie.poster_path})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${sizes.largeMobile}) {
    display: none;
  }
`

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  position: relative;
`

const Title = styled.h2`
  font-size: 1.4;
  margin: 0;
`;

const Genres = styled.span`
  color: ${colors.primaryColor}
`

const Overview = styled.p`
  flex-grow: 1;
  overflow: auto;
`

const ReleaseDate = styled.span`
  color: ${colors.primaryColor};
  font-size: 0.8em;
  opacity: 0.6;
  font-weight: lighter;
`

const Badge = styled.div`
  padding: 5px;
  border-radius: 7px;
  color: white;
  font-weight: bold;
  background-color: ${colors.primaryColor};
  align-self: baseline;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`