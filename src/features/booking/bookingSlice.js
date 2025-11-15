import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookings: [],
    CheckIn: null,
    CheckOut: null,
};

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action) => {
            state.bookings.push(action.payload);
        },
        setCheckIn: (state, action) => {
            state.CheckIn = action.payload;
        },
        setCheckOut: (state, action) => {
            state.CheckOut = action.payload;
        },
        resetBookings: (state) => {
            state.bookings = [];
            state.CheckIn = null;
            state.CheckOut = null;
        },
    },
});

export const { addBooking, setCheckIn, setCheckOut, resetBookings } = bookingSlice.actions;
export default bookingSlice.reducer;