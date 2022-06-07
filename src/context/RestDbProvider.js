import React, {createContext, useEffect, useState} from "react";

export const RestDbContext = createContext({});

export default function RestDbProvider({children}){
    const [dbData, setDbData] = useState({status:"idle",lastBuoy:{}, lastTank:{},last10:{}});

    async function fetchLastBuoyPost() {
        setDbData({status:"fetching",lastBuoy:{}, lastTank:{},last10:{}})
        let response = await fetch("https://sfasurf-8806.restdb.io/rest/pilot?x-apikey=629678a3c4d5c3756d35a40e",
            {
                headers: {
                    'X-API-KEY': '629678a3c4d5c3756d35a40e',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            },
        );
        let data = await response.json();
        data = data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

        let lastBuoy = false;
        let index = 1;
        while(!lastBuoy){
            if(data[data.length - index].tank === 'DemoBuoy'){
                lastBuoy = data[data.length - index]
            }
            index += 1;
            if(index>100){
                lastBuoy={}
            }
        }
        console.log(lastBuoy);


        let lastTank = false;
        index = 1;
        while(!lastTank){
            if(data[data.length - index].tank === 'Raceway1'){
                lastTank = data[data.length - index]
            }
            index += 1;
            if(index>100){
                lastTank={}
            }
        }
        console.log(lastTank);


        //const last = data[data.length - 1];
        const allData = {
            status:'complete',
            lastBuoy:lastBuoy,
            lastTank:lastTank,
            last10: data.slice(data.length-10,data.length).reverse(),

        }
        setDbData(allData);
    }

    useEffect(() => {
        fetchLastBuoyPost();
    }, []);

    return(
        <RestDbContext.Provider value={dbData}>
            {children}
        </RestDbContext.Provider>
    )
}