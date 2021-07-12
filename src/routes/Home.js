import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [{}, {}],
    };
    getMovies = async () => {
        //비동기
        console.log("3");
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); //axops 는 그렇게 빠르지 않으므로 componentDidMount함수가 끝날때까지 우리가 기다려야한다
        console.log("4");

        this.setState({ movies, isLoading: false }); //setState를 호출하면 render 다시실행
        console.log("5");
    };
    componentDidMount() {
        console.log("2");
        this.getMovies();
    }
    render() {
        console.log("1");
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        ); //map:배열로 다시 가져와주는것
    }
}
export default Home;
