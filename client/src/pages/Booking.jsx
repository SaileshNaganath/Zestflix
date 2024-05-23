import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation ,useNavigate } from "react-router-dom";
import { Button } from "../components/button";

function Booking() {
    const location = useLocation();
    const navigate = useNavigate();
    const { movieData } = location.state || {};
    function handleBookSeat(){
        localStorage.setItem('MovieName', movieData.name);
        navigate('/seats');
    }
  return (
    <Container className='main-page'>
      <Navbar />
      <section className="hero">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="background"
        className="background-image"
      />
        <div className="container">
        
          <div className="buttons-container">
          <h1 className="text-white font-bold text-4xl">{movieData.name}</h1>
          <div className="flex flex-row gap-4">
          <Button size='small' onClick={() => navigate("/player")}>
              Watch Trailer
            </Button>
          <Button size='small' onClick={handleBookSeat}>
              Book Now
            </Button>
            
          </div>
          <p className="text-white font-bold text-md">Genre:</p>
          <p className="text-white text-sm">{movieData.genres[0]}</p>
          <p className="text-white font-bold text-md">Release:</p>
          <p className="text-white text-sm">{movieData.release}</p>
          <p className="text-white font-bold text-md">Overview:</p>
          <p className="text-white text-sm">{movieData.overview}</p>
          </div>
         
        </div>
      </section>
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
        gap: 1rem;
        }
      }
    }
  }
`;
export default Booking;