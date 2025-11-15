import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adults: "1 Adult",
    kids: "0 Kid",
    total: 1,
};

export const roomFilterSlice = createSlice({
    name: "roomFilter",
    initialState,
    reducers: {
        setAdults: (state, action) => {
            state.adults = action.payload;
            state.total = Number.parseInt(state.adults, 10) + Number.parseInt(state.kids, 10);
        },
        setKids: (state, action) => {
            state.kids = action.payload;
            state.total = Number.parseInt(state.adults, 10) + Number.parseInt(state.kids, 10);
        },
        resetRoomFilter: (state) => {
            state.adults = "1 Adult";
            state.kids = "0 Kid";
            state.total = 1;
        },
    },
});

export const { setAdults, setKids, resetRoomFilter } = roomFilterSlice.actions;
export default roomFilterSlice.reducer;