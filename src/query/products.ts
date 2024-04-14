import {useQuery} from "react-query";
import {QueryKeys, fetcher} from "./queryClient.ts";

export const ProductList = () => {
    const { data } = useQuery(QueryKeys.PRODUCTS, () => fetcher({
        method: "GET",
        path: "/products"
    }))
    console.log("data", data)

    return { data };
}