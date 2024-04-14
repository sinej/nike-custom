import { QueryClient } from '@tanstack/react-query'

export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if(!client) client = new QueryClient();
        return client
    }
})();


export const fetcher = async ({ url = "", fetchOptions = {}}: string, {}) => {
    try {
        const res = await fetch(url, fetchOptions);
        const json = await res.json();
        return json
    } catch (error) {
        throw Error(error)

    }
}

export const QueryKeys = {
    PRODUCTS: "PRODUCTS"
}