import React, { Component } from 'react'

export default class MovieCard extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         title: "The Avangers",
    //         plot: " Supernatural powers shown in moives.",
    //         price: 199,
    //         rating: 8.9,
    //         stars: 0,
    //         fav: false,
    //         cart: false,
    //     }

    //     // Binding the addStare method to the component instance \\ arroe functoin bundint automaticliy
    //     // this.addStar = this.addStar.bind(this);

    // }

    // addStar = () => {
    //     // console.log("this:", this);

    //     // this.state.stars +=1;
    //     // console.log("this:", this.state.stars);

    //     // //form 1
    //     // this.setState({
    //     //     stars :this.state.stars+0.5,
    //     // })
    //     // if we make two or more state state then last one is apply and rerendring done once


    //     //form 2
    //     this.setState((prev) => {
    //         if (prev.stars < 5) {

    //             return {
    //                 stars: prev.stars + .5
    //             }
    //         }
    //     }, () => { console.log("Stars inside callback", this.state.stars) })
    //     // In this form if we make two or more state state then all are apply and but rerendring done once



    // };

    // subSatr = () => {
    //     this.setState((prev) => {

    //         if (prev.stars > 0) {
    //             return {
    //                 stars: prev.stars - 0.5,
    //             };
    //         } else {
    //             console.log("sub");
    //             // Return the original state (no change) if prev.stars is 0 or negative
    //             return prev;
    //         }
    //     })
    // };

    // handleFav = () => {
    //     this.setState({ fav: !this.state.fav })

    // }

    // handleCart = () => {
    //     this.setState({ cart: !this.state.cart })

    // }
    render() {
        const { movies: data } = this.props;//destrucuting and assign name to movie

        const { movies, addStars, subStars, handleFav, handleCart } = this.props
        // const { title, plot, price, rating, stars, fav, cart } = this.props.movies;
        const { title, plot, price, rating, stars, fav, cart } = data;

        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="poster" src="https://cdn.kobo.com/book-images/179c31cf-2bc9-4f86-9fff-d45786ebf912/1200/1200/False/marvel-s-avengers-1.jpg" />
                    </div>
                    <div className='right'>
                        <div className='title'>
                            {/* {this.state.title} */}
                            {title}
                        </div>

                        <div className='plot'>
                            {plot}
                        </div>

                        <div className='price'>
                            Rs. {price}
                        </div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img alt="" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" onClick={() => { subStars(movies) }} />
                                <img alt="" className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img alt="" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={() => { addStars(movies) }} />
                                <span>{stars}</span>
                            </div>

                            {/* {fav ? <button className='unfavourite-btn' onClick={this.handleFav}>Un-favourite</button>:
                                <button className='favourite-btn' onClick={this.handleFav}>Favourite</button> } */}

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={() => { handleFav(movies) }}>{fav ? "Un-favourite" : "Favourite"}</button>
                            <button className={cart ? "unfavourite-btn" : "cart-btn"} onClick={() => { handleCart(movies) }}>{cart ? "Remove" : "Add to cart"}</button>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
