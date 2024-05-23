import "../Booking.css";
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import clsx from 'clsx'

import Navbar from "../components/Navbar"
import Payment from "../components/payment";

const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

const BookingPage = () => {

    const choosenMovie = localStorage.getItem('MovieName');

    const [selectedMovie, setSelectedMovie] = useState({})
    const [selectedTheater, setSelectedTheater] = useState({})

    const [selectedSeats, setSelectedSeats] = useState([])
    const [occupiedSeats, setOccupiedSeats] = useState([10, 12, 50, 33, 28, 47])
    const [moviePrice, setMoviePrice] = useState(150)

    const navigate = useNavigate();


    return (
        <>
            <Navbar />
            <div className="App bg-black backg">
           
                    <ShowCase />
                    <Cinema
                        selectedSeats={selectedSeats}
                        occupiedSeats={occupiedSeats}
                        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
                    />
                    <p className="info">
                        You have selected <span className="count">{selectedSeats.length}</span>{' '}
                        seats for the price of{' '} 
                        <span className="total">
                            Rs.{selectedSeats.length * moviePrice}/-
                        </span>
                        for {choosenMovie} movie.
                    </p>
                    <Payment
                        noOfSeats={selectedSeats.length}
                        totalAmount ={selectedSeats.length * moviePrice}
                    /> 
            </div>
        </>
    )
}

function Cinema({ selectedSeats, onSelectedSeatsChange, occupiedSeats }) {
    function handleSelectedState(seat) {
        const isSelected = selectedSeats.includes(seat)
        if (isSelected) {
            onSelectedSeatsChange(
                selectedSeats.filter(selectedSeat => selectedSeat !== seat),
            )
        } else {
            onSelectedSeatsChange([...selectedSeats, seat])
        }
    }

    return (
        <div className="Cinema">
            <div className="screen" />

            <div className="seats">
                {seats.map(seat => {
                    const isSelected = selectedSeats.includes(seat)
                    const isOccupied = occupiedSeats.includes(seat)
                    return (
                        <span
                            tabIndex="0"
                            key={seat}
                            className={clsx(
                                'seat',
                                isSelected && 'selected',
                                isOccupied && 'occupied',
                            )}
                            onClick={isOccupied ? null : () => handleSelectedState(seat)}
                            onKeyPress={
                                isOccupied
                                    ? null
                                    : e => {
                                        if (e.key === 'Enter') {
                                            handleSelectedState(seat)
                                        }
                                    }
                            }
                        />
                    )
                })}
            </div>
        </div>
    )
}

function ShowCase() {
    return (
        <ul className="ShowCase">
            <li>
                <span className="seat" /> <small>Available</small>
            </li>
            <li>
                <span className="seat selected" /> <small>Selected</small>
            </li>
            <li>
                <span className="seat occupied" /> <small>Occupied</small>
            </li>
        </ul>
    )
}

export default BookingPage