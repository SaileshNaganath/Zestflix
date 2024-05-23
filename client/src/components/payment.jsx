import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IoMdCloseCircleOutline } from "react-icons/io";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'50dvw',
    height:'50dvh',
    bgcolor: 'rgb(52, 52, 52)',
    color:'white',
    border: '2px solid #000',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
  };
  
const Payment = (props) => {
    const selectedMovie = localStorage.getItem('MovieName');
    const [isOpen, setIsOpen] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState({})

    const closeModal = () => {
        setPaymentStatus({})
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const finalizePayment = async () => {
        setPaymentStatus("SUCCESS")
    }

    return (
        <>
            <button  onClick={openModal}>Proceed to Payment</button>
            <Modal
                open={isOpen}
                onClose={closeModal}
            >
            <Box sx={style}>
          
                <>  
                    <h1 className="font-bold text-2xl text-center py-2">
                        ORDER SUMMARY
                    </h1>
                    <IoMdCloseCircleOutline onClick={closeModal}/>
                    <div className=''>
                        <div className="">
                            <h5>{selectedMovie}</h5>
                            <small>English</small>
                            <br />
                            <small className=''>m-Ticket</small>


                        </div>
                        <div className="">
                            <h5>{props.noOfSeats}</h5>
                            <p>Tickets</p>
                        </div>
                        <hr className='' />
                        <div className="">
                            <div className=""> <p className=''>Total</p></div>
                            <div className=""> <p className=''>Rs.{props.totalAmount}</p></div>

                        </div>
                        {
                            paymentStatus === "SUCCESS" ? (
                                <div className="">

                                    <small className=''>Booking Confirmed! </small>

                                    <div className="">
                                        <div className="">
                                            <small className=''> m-ID:</small>
                                        </div>
                                        <div className="">
                                            <small className=''>quywgdi6872123</small>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button className="" onClick={finalizePayment}>
                                    Confirm Payment
                                </button>
                            )
                        }

                    </div>
                </>
            </Box>
                    
            </Modal>
        </>
    )
}

export default Payment