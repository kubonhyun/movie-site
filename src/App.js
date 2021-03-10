import React from "react";
import Display from "./Display";
import Data from "./Data.json";
import "./Reset.css";
import "./App.css";

class App extends React.Component {
  state = {
      isLoading : true,
      movies : []
  };

  getMovies = () => {
    const {movies} = Data;
    this.setState({movies, isLoading :false})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
    <section className="max-container"><header><div className="h-text">Movie Site</div></header>{
      isLoading ? "Loading" : <div className="container">
        <ul className="t-box">{
        movies.map(movie => (
          <Display key={movie.id} rating={movie.rating} title={movie.title} id={movie.id} img={movie.img_url} des={movie.des} actor={movie.actor} />
        ))
      }</ul></div>}
      </section>
      )
  }
}


export default App;