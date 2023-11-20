import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Event, EventDetail} from '@types';

type GetEventDetailArgs = {
  id: number;
};

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openapi.izmir.bel.tr/api/ibb',
  }),
  endpoints: builder => ({
    getEvents: builder.query<Event[], string>({
      query: () => '/kultursanat/etkinlikler',
    }),
    getEventDetail: builder.query<EventDetail, GetEventDetailArgs>({
      query: ({id}) => `/kultursanat/etkinlikler/${id}`,
    }),
  }),
});

export const {useGetEventsQuery, useGetEventDetailQuery} = eventsApi;
