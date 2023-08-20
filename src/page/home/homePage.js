import React, {useEffect, useState} from 'react';
import './homePage.css'
import NavBarComponent from "../../components/navComponent/navBarComponent";
import Movie from "../../components/movieComponent/movie";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const HomePage = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);

    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };

    return (
        <div className='homePage'>
            <NavBarComponent search={search}/>
            <div className="containerHome">
                <div className="movies">
                    {loading && !errorMessage ? (
                        <span>loading...</span>
                    ) : errorMessage ? (
                        <div className="errorMessage">{errorMessage}</div>
                    ) : (
                        movies.map((movie, index) => (
                            <Movie key={`${index}-${movie.Title}`} movie={movie} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;