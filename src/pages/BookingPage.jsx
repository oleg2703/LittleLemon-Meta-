/* eslint-disable react/react-in-jsx-scope */
import { useReducer } from "react";
import Reservation from "../components/Reservation";
import { fetchAPI, submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

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
      <Reservation availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </>
  );
}