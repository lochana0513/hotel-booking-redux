import { configureStore } from "@reduxjs/toolkit";
import { roomsApi } from "../features/rooms/roomsApi";
import { bookingApi } from "../features/booking/bookingApi";
import roomFilterReducer from "../features/rooms/roomFilterSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
    reducer: {
        [roomsApi.reducerPath]: roomsApi.reducer,
        [bookingApi.reducerPath]: bookingApi.reducer,
        roomFilter: roomFilterReducer,
        booking: bookingReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(roomsApi.middleware).concat(bookingApi.middleware),
});

export default store;