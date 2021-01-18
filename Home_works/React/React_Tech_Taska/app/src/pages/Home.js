import React, {useEffect, useState} from "react";
import {FilmList} from "../components/film-list";
import {moviesService,genresService} from "../services";
import styles from './Home.modules.css'

export const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async () => {
        try {
            const {results, page, total_pages, total_results} = await moviesService.getMovies()
            setMovieList(results)
        } catch (e) {
            console.error(e);
        }

    }
    const fetchGenres = async () => {
        try {
            setIsLoading(false)
            const {genres} = await genresService.getGenres();
            console.log(genres);
            return genres;
        } catch (e) {
            console.error(e);
        }
    }
const fetchMoviesData = async () =>{
const requests = [fetchMovies(),fetchGenres()];

try{
   const [movies,genres] = await Promise.all(requests);
const mergedWithGenresMovies = movies.map(movie => {
    const {genre_ids} = movie;
    const movieGenresList = genre_ids.map(genreId=>
        genres.find(el => el.id === genreId)
    )
    return {
        ...movie,
        movieGenresList,
    }
})
    console.log(mergedWithGenresMovies); ///
} catch (e){
    console.error(e)
}

}


    useEffect(() => {
        fetchMoviesData();
    }, [])

    const renderLoadingIndicator = () => (
        <div className={styles.loading}>Loading...</div>
    )


    return (<div>
            {isLoading || isLoading === null ? renderLoadingIndicator() : <FilmList items={movieList}/>}

        </div>

    )
}