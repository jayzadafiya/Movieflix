import React, { Component } from 'react'
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movieData } from './movieData';
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: movieData,
      cartCount: 0,

    }
  }

  handleInc = (movie) => {
    const { movies } = this.state;
    const movieID = movies.indexOf(movie);
    // console.log(movieID);
    if (movies[movieID].stars < 5) {

      movies[movieID].stars += 0.5;
    }

    this.setState({
      movies: movies

    })
  };

  handleDec = (movie) => {
    const { movies } = this.state;
    const movieID = movies.indexOf(movie);
    // console.log(movieID);
    if (movies[movieID].stars > 0) {

      movies[movieID].stars -= 0.5;
    }

    this.setState({
      movies

    })
  };

  handleFav = (movie) => {
    const { movies } = this.state;
    const movieID = movies.indexOf(movie);


    movies[movieID].fav = !movies[movieID].fav

    this.setState({
      movies
    })
  };

  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieID = movies.indexOf(movie);


    movies[movieID].cart = !movies[movieID].cart
    if (movies[movieID].cart) {
      cartCount = cartCount + 1;
    } else {
      cartCount = cartCount - 1;
    }
    console.log(cartCount);
    this.setState({
      movies,
      cartCount
    })
  };


  render() {
    const { movies, cartCount } = this.state;

    return (
      <>
        {/* <h1>Movie App</h1> */}

        <Navbar cartCount={cartCount} />
        <MovieList movies={movies}
          addStars={this.handleInc}
          subStars={this.handleDec}
          handleFav={this.handleFav}
          handleCart={this.handleCart} />
      </>
    )
  }
}
