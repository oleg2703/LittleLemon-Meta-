import React from 'react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Reservation from '../components/Reservation.jsx'; 

describe('Компонент Reservation — Тестування валідації форми (Vitest)', () => {
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();
  const availableTimes = ['17:00', '18:00', '19:00'];

  beforeEach(() => {
    vi.clearAllMocks();
  });



  test('перевіряє наявність правильних HTML5-атрибутів валідації на полях форми', () => {
    render(
      <Reservation 
        availableTimes={availableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toBeRequired();
    expect(firstNameInput).toHaveAttribute('maxLength', '30');


    const lastNameInput = screen.getByLabelText(/Last Name/i);
    expect(lastNameInput).toBeRequired();
    expect(lastNameInput).toHaveAttribute('maxLength', '30');

    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toBeRequired();
    const today = new Date().toISOString().split("T")[0];
    expect(dateInput).toHaveAttribute('min', today);

    const timeSelect = screen.getByLabelText(/Time/i);
    expect(timeSelect).toBeRequired();

    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '100');
  });



  
  test('не дозволяє відправити форму (не викликає submitForm), якщо обов’язкові поля порожні', () => {
    render(
      <Reservation 
        availableTimes={availableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const form = screen.getByRole('form', { name: /On Submit/i });
    
  
    fireEvent.submit(form);

  
    expect(form.checkValidity()).toBe(false);
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test('успішно відправляє форму, коли всі дані валідні', () => {
    render(
      <Reservation 
        availableTimes={availableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const form = screen.getByRole('form', { name: /On Submit/i });

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(dateInput, { target: { value: '2026-10-15' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    expect(form.checkValidity()).toBe(true);

    fireEvent.submit(form);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      first_name: 'John',
      last_name: 'Doe',
      date: '2026-10-15',
      time: '18:00',
      numberGuests: '4',
      occasion: ''
    });
  });

  test('не дозволяє відправити форму (не викликає submitForm), якщо обов’язкові поля порожні', () => {
    render(
      <Reservation 
        availableTimes={availableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );

    const form = screen.getByRole('form', { name: /On Submit/i });

    const isValid = form.checkValidity();
    expect(isValid).toBe(false); 

  
    if (isValid) {
      fireEvent.submit(form);
    }


    expect(mockSubmitForm).not.toHaveBeenCalled();

  });
});