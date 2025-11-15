import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { roomData } from "../rooms/mockData";

export const roomsApi = createApi({
    reducerPath: "roomsApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({

        // Fetch all rooms
        getRooms: builder.query({
            queryFn: async () => {
                return { data: roomData };
            },
        }),

        // Fetch room by ID
        getRoomById: builder.query({
            queryFn: async (id) => {
                const room = roomData.find((room) => room.id === Number.parseInt(id, 10));
                return room
                    ? { data: room }
                    : { error: { status: 404, statusText: "Room not found" } };
            },
        }),
    }),
});

export const { useGetRoomsQuery, useGetRoomByIdQuery } = roomsApi;