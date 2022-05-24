import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use
import { accessToken } from "./apiKeys";

const client = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    timeout: 10000,
    headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json;charset=utf-8"
    }
})

export const fetchPopularMovies = async () => {
    try {
        const { data } = await client({ url: "/movie/popular" });

        return data || [];
    } catch (error) {
        return [];
    }
}

export const fetchMovieGenres = async () => {
    try {
        const { data } = await client({ url: "/genre/movie/list" });

        return data || [];
    } catch (error) {
        return [];
    }
}

export const fetchMovieByKeyword = async (keyword, year) => {
    try {
        const { data } = await client({
            url: "/search/movie",
            params: {
                query: keyword,
                year,
            }
        });
        console.log(data);
        return data || [];
    } catch (error) {
        return [];
    }
}