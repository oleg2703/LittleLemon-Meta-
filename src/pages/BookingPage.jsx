/* eslint-disable react/react-in-jsx-scope */
import { useReducer } from "react";
import Reservation from "../components/Reservation.jsx";
import { fetchAPI, submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));

    default:
      return state;
  }
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
  
    const success = submitAPI(formData);
    if (success) {
      localStorage.setItem('lastBooking', JSON.stringify(formData));
      navigate("/confirm");
    } else {
      alert("Something went wrong with your reservation. Please try again.");
    }
  };

  return (
    <>
      <Header/>
      <Reservation availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      <Footer/>
    </>
  );
}