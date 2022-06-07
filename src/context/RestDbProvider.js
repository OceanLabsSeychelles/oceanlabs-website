import React, {createContext, useEffect, useState} from "react";

export const RestDbContext = createContext({});

export default function RestDbProvider({children}){
    const [dbData, setDbData] = useState({});

    async function fetchLastBuoyPost() {
        let response = await fetch("https://sfasurf-8806.restdb.io/rest/pilot?x-apikey=629678a3c4d5c3756d35a40e",
            {
                headers: {
                    'X-API-KEY': '629678a3c4d5c3756d35a40e',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            },
        );
        const data = await response.json();
        data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        const last = data[data.length - 1];
        const allData = {
            allData: data,
            last:last
        }
        console.log(last);
        setDbData(allData);
    }

    useEffect(() => {
        fetchLastBuoyPost();
    }, []);

    setInterval(fetchLastBuoyPost, 30000)
    return(
        <RestDbContext.Provider value={dbData}>
            {children}
        </RestDbContext.Provider>
    )
}