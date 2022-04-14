import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IContacts } from '../models/IContact'
import { IUserLogin } from '../models/IUserLogin'

export const requests = createApi({
    reducerPath: 'contact',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Contacts'],
    endpoints: (build) => ({
        getAllContact: build.query<IContacts[], number>({
            query: (id: number) => ({
                url: `/users/${id}/contacts/`,
            }),
            providesTags: ['Contacts'],
        }),
        createContact: build.mutation<IContacts, IContacts>({
            query: (data) => ({
                url: `/users/${data.userId}/contacts/`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: res => ['Contacts']
        }),
        editContact: build.mutation<IContacts, IContacts>({
            query: (data) => ({
                url: `/contacts/${data.id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: res => ['Contacts']
        }),
        deleteContact: build.mutation<IContacts, number>({
            query: (id: number) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: res => ['Contacts']
        })
    })
})