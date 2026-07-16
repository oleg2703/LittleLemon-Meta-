import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import { initializeTimes, updateTimes } from "../pages/BookingPage";
import { fetchAPI } from "../api/api";

describe("BookingPage reducer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-16T12:00:00")); 
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("initializeTimes returns today's available times", () => {
    const expected = fetchAPI(new Date());

    expect(initializeTimes()).toEqual(expected);
  });

  test("updateTimes returns available times for selected date", () => {
    const selectedDate = "2026-07-16";

    const action = {
      type: "UPDATE_TIMES",
      date: selectedDate,
    };

    const expected = fetchAPI(new Date(selectedDate));

    expect(updateTimes([], action)).toEqual(expected);
  });

  test("updateTimes returns current state for unknown action", () => {
    const state = ["17:00", "18:00"];

    expect(updateTimes(state, { type: "UNKNOWN" })).toEqual(state);
  });
});