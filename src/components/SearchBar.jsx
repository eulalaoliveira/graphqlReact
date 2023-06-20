import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CircularProgress from '@mui/material/CircularProgress';
import 'bootstrap/dist/css/bootstrap.min.css';

const SEARCH_MOVIES_QUERY = gql`
  query SearchMovies($query: String!, $page: Int) {
    searchMovies(query: $query, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        title
        overview
        release_date
        poster_path
      }
    }
  }
`;

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMovies, { loading, error, data }] = useLazyQuery(SEARCH_MOVIES_QUERY);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    searchMovies({ variables: { query: searchTerm, page: 1 } });
  };


  return (
    <div className="search-main-container">
      <div className="search-wrapper">
        <input 
          type="text"
          className="form-control form-control-lg"
          id="inputSearch"
          placeholder="Search more movies"
          value={searchTerm}
          onChange={handleInputChange} />
        <button 
          type="button" 
          className="btn btn-danger btn-lg"
          onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="results-wrapper">
        {loading && 
          <p className="loading"> 
            <CircularProgress color="inherit"/>
          </p>}
        {error && <p>Error: {error.message}</p>}

        {data && data.searchMovies && (
          <ImageList cols={4} sx={{ paddingLeft: "1%", paddingRight: "1%" }}>
            {data.searchMovies.results.map((movie) => (
              <ImageListItem key={movie.id} sx={{  width:"99%", justifyContent: "space-between" }} >
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy" />
                )}
                <ImageListItemBar
                  title={movie.title}
                  subtitle={movie.release_date} 
                  position="below"
                  />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
