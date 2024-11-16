import { CATEGORY_URL } from '../endpoints';
import { apiSlice } from './apiSlice';

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=> ({
        fetchCategories: builder.query({
            query: ()=> `${CATEGORY_URL}/categories`,
        }),
    }),
});

export const { useFetchCategoriesQuery } = categoryApiSlice;

