import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { movieData } from './movieData';

export default class MovieList extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     movies: movieData,
  //     cartCount: 0,

  //   }
  // }

  // handleInc = (movie) => {
  //   const { movies } = this.state;
  //   const movieID = movies.indexOf(movie);
  //   // console.log(movieID);
  //   if (movies[movieID].stars < 5) {

  //     movies[movieID].stars += 0.5;
  //   }

  //   this.setState({
  //     movies: movies

  //   })
  // };

  // handleDec = (movie) => {
  //   const { movies } = this.state;
  //   const movieID = movies.indexOf(movie);
  //   // console.log(movieID);
  //   if (movies[movieID].stars > 0) {

  //     movies[movieID].stars -= 0.5;
  //   }

  //   this.setState({
  //     movies

  //   })
  // };

  // handleFav = (movie) => {
  //   const { movies } = this.state;
  //   const movieID = movies.indexOf(movie);


  //   movies[movieID].fav = !movies[movieID].fav

  //   this.setState({
  //     movies
  //   })
  // };

  // handleCart = (movie) => {
  //   const { movies } = this.state;
  //   const movieID = movies.indexOf(movie);


  //   movies[movieID].cart = !movies[movieID].cart

  //   this.setState({
  //     movies
  //   })
  // };

  render() {
    // const { title,plot,price,rating,stars,fav,cart } = this.state

    //2
    // const { movies } = this.state;

    const { movies, addStars, subStars, handleFav, handleCart } = this.props;
    return (
      <>

        {/* <MovieCard movies={this.state} /> */}

        {/* 2*/}
        {/* 
        {movies.map((movie) => <MovieCard
          movies={movie} 
          addStars={this.handleInc} 
          subStars={this.handleDec} 
          handleFav={this.handleFav} 
          handleCart={this.handleCart} />)}
        */}

          {movies.map((movie) => <MovieCard
            movies={movie}
            addStars={addStars}
            subStars={subStars}
            handleFav={handleFav}
            handleCart={handleCart} />)}


      </>

    )
  }
}
