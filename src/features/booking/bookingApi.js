import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { bookedRooms } from '../booking/mockData';

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        // Fetch all booked rooms
        getBookedRooms: builder.query({
            queryFn: async () => ({
                data: bookedRooms
            }),
        }),
    }),
});

export const { useGetBookedRoomsQuery } = bookingApi;
