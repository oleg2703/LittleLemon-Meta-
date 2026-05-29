import React from 'react'
import './css/modal.css'
import { useAppContext } from '../context/AppContext'
import { FaCheck } from "react-icons/fa6";
export default function Modal() {
    const {
    isModalOpen,
    modalMessage
  } = useAppContext()

  if (!isModalOpen) return null

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-content">
                <p className='modal-text'>
                {modalMessage}
                <span><FaCheck /></span>
                </p>
        </div>
      </div>
    </>
  )
}