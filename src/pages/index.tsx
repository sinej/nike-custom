import React from 'react';
import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../query/queryClient.ts";

const Home: React.FC = () => {
    const { data } = useQuery(QueryKeys.PRODUCTS, () => fetcher({
        method: "GET",
        path: "/products"
    }))

    console.log("data", data)
    return (
        <div>
           dflskajfalskdsa
        </div>
    );
};

export default Home;