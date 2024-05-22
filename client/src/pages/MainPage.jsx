import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../actions/movieActions";
import Slider from "../components/Slider";
import { Button } from "../components/button";

function MainPage() {

  const moviesList = useSelector((state)=>state.movie);
  const {movies,genres,genresLoaded,loading,error} = moviesList

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [dispatch, genresLoaded, genres]);



  if (loading) {
    return <div>Loading...</div>; // Add a loading state
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Container className='main-page'>
      <Navbar />
      <section className="hero">
        <img
          src="/movies/dune.webp"
          alt="background"
          className="background-image"
        />
        <div className="container">
        
          <div className="buttons-container">
          <h1 className="text-white font-bold text-6xl">Dune - Part One</h1>
          <p className="text-white">#1 Trending Now</p>
          <div className="flex flex-row gap-4">
          <Button size='medium' onClick={() => navigate("/player")}>
              Book Now
            </Button>
            <Button size='medium'>
              Watch Trailer
            </Button>
          </div>
            
          </div>
        </div>
      </section>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  overflow-x:hidden;
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
      z-index:-1;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons-container {
        display:flex;
        flex-direction:column;
        margin: 2rem;
        gap: 0.5rem;
        }
      }
    }
  }
`;
export default MainPage;