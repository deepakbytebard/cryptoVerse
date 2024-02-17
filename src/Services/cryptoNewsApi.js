import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  // "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  // "x-rapidapi-key": "9dd8fc41b4msh01cb0c48c6cc330p1ed2b8jsnd7ed55f68e0d",
  'X-RapidAPI-Key': '9dd8fc41b4msh01cb0c48c6cc330p1ed2b8jsnd7ed55f68e0d',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";



// url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
//   headers: {
//     'X-RapidAPI-Key': '9dd8fc41b4msh01cb0c48c6cc330p1ed2b8jsnd7ed55f68e0d',
//     'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
//   }
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ count }) => createRequest(""),
    }),
  }),
});



export const { useGetCryptoNewsQuery } = cryptoNewsApi;
