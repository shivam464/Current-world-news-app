import React, { useState, createContext, useEffect } from 'react'
import axios from "axios";

export const userContext = createContext();

const url =`https://newsapi.org/v2/everything?q=keyword&apiKey=38380f03040647aab2ed13f19e5cb887`
export const NewsContext = ({ children }) => {

    const [news, setnews] = useState("");

    useEffect(() => {
        axios.get(url).then((response) => {

            setnews(response.data);
        }).catch((e) => {
            console.log(e);
        })

    }, []);
    return (
        <userContext.Provider value={news}>
            {children}
        </userContext.Provider>
    )

}
