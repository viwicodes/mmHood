import axios from 'axios'

export const baseURL = "https://lionfish-app-i7tdd.ondigitalocean.app"

const api = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer 5f38f8833267a8d580b77bf334b525c4f432157463e50a83bdc62df4d0fcab899345e3803c24467ef3d037782a6739e046d0ca53a248000ca05847aa4bd3a877e1bb2dc01a1d176048b9b8fcab9fe749cc5fbc61304dc37a062a486d96ba2b73544b651d11f2e28c466933b9885a52a4445dfa7f44d6d46a913d5bf1dcaa6d16`
    },
});

// Categories
export const getCategories = async () => api.get('/api/categories')

// Articles
export const getArticles = async (query) => api.get(`api/articles?${query}`)
// export const getArticlesBySlug = async (query) => api.get(`api/aritcles?${query}`)
export const getArticlesBySlug = async (query) => api.get(`api/articles?${query}`)