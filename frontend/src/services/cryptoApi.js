import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'X-RapidAPI-Key': '24e800e878mshf235a24f8fb6b5cp188749jsn99a96985f536',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({
    url,headers:cryptoApiHeaders
})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins/?limit=${count}`)
        }),
        getCrypto:builder.query({
            query:(id)=>createRequest(`/coin/${id}`)
        })
    }),

})
export const{useGetCryptosQuery,useGetCryptoQuery}=cryptoApi