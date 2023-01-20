import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '24e800e878mshf235a24f8fb6b5cp188749jsn99a96985f536',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com'
const createRequest=(url)=>({
    url,headers:cryptoApiHeaders
})
export const newsApi=createApi({
    reducerPath:'newsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})



export const{useGetNewsQuery}=newsApi