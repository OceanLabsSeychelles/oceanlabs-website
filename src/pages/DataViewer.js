import React, {useContext} from 'react';
import ReactJson from 'react-json-view'
import {RestDbContext} from "../context/RestDbProvider";

export default function DataViewer(){
    const dbData = useContext(RestDbContext);
    return(
        <ReactJson style={{margin:'1rem'}} src={dbData} />
    )
}