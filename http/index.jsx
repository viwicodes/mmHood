import axios from 'axios'

const api = axios.create({
    baseURL: "http:localhost:1337",
    headers: {
        Authorization: `Bearer a669eb8dd907800291999ee64415e43934fbe598a50fc56a3be85f0cef044a897e638a51381244129d7e2f52caeca00a275a3e49986a0a9c9e215f384048047e86208cc71eb42a50a0937e83321626501e9f4162201f5d08f839387859b5977a41e43a4b3ab883b721c28d66ac1975c21c02e55c77163bf6fa0ddc037d92fde7`
    },
});

// Categories
export const getCategories = async () => api.get('/api/categories')

// Articles
export const getArticles = async (query) => api.get(`api/articles?${query}`)
// export const getArticlesBySlug = async (query) => api.get(`api/aritcles?${query}`)
export const getArticlesBySlug = async (query) => api.get(`api/articles?${query}`)