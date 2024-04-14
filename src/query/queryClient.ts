import { QueryClient } from 'react-query'

export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if(!client) client = new QueryClient();
        return client
    }
})();

type AnyOBJ = { [key: string]: any}


const BASE_URL = "https://fakestoreapi.com";
export const fetcher = async ({ method, path }: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    path: string;
    body?: AnyOBJ;
    params?: AnyOBJ;
}) => {
    try {
        const url = `${BASE_URL}${path}`;
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': BASE_URL
            }
        }
        const res = await fetch(url, fetchOptions);
        const json = await res.json();
        return json
    } catch (error) {
        console.log("error", error);
    }
}

type QueryKeyType = {
    PRODUCTS: string;
}
export const QueryKeys: QueryKeyType = {
    PRODUCTS: "PRODUCTS",
}