import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
        }

        fetchData();
    }, [])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n -1) + "...":str;
    }

    return (

        <header className="banner"
            style={{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundSize:"cover",
                backgroundPosition: "center center"
            }}
        > 
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
                {/* BU joydagi ? if ni o'rnini bajaryapti yani buning 
                manosi agar title topilmasa name ol u ham topilmasa 
                keyin original name ol degani */}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play(From muslimCoder1995)</button>
                <button className="banner__button">My List(From muslimcoder1995)</button>
            </div>
            <h1 className="banner__description">
                {truncate(movie?.overview, 150)}
            </h1>
            {/* description */}
        </div>
        <div className="banner__fadeBottom">

        </div>
        </header>
    )
}

export default Banner