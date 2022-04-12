import React, {createContext, useEffect, useReducer, useState} from "react";

export const BackendContext = createContext({})

export default function BackendProvider({children}) {
    const probeTypes = {
        DATA: "DATA",
        READY: "READY",
        MAX: "MAX",
        MIN: "MIN",
        OUT_OF_RANGE: "OUT_OF_RANGE"
    }

    const initialProbe = {
        data: generateZeros(24),
        ready: false,
        max: null,
        min: null,
        outOfRange: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case probeTypes.DATA:
                return {...state, data: action.value}
            case probeTypes.READY:
                return {...state, ready: action.value}
            case probeTypes.MAX:
                return {...state, max: action.value}
            case probeTypes.MIN:
                return {...state, min: action.value}
            case probeTypes.OUT_OF_RANGE:
                return {...state, outOfRange: action.value}
        }
    }

    const [phState, phDispatch] = useReducer(reducer,initialProbe);
    const [doState, doDispatch] = useReducer(reducer,initialProbe);
    const [tpState, tpDispatch] = useReducer(reducer,initialProbe);

    function newProbeData(){
        phDispatch({type: probeTypes.DATA, value: generateData(24,8.1)})
        phDispatch({type: probeTypes.READY, value:true})
        doDispatch({type: probeTypes.DATA, value: generateData(24, 7.5)})
        doDispatch({type: probeTypes.READY, value:true})
        tpDispatch({type: probeTypes.DATA, value: generateData(24, 26)})
        tpDispatch({type: probeTypes.READY, value:true})
    }

    useEffect(() => {
        setTimeout(() => {
            newProbeData()
        }, 1000)


    }, [])

    function generateData(num, center) {
        return [...new Array(num)].map((row, index) => ({
            x: index,
            y: Math.random() + center
        }));
    }

    function generateZeros(num) {
        return [...new Array(num)].map((row, index) => ({
            x: index,
            y: 0.0
        }));
    }

    return (
        <BackendContext.Provider
            value={{
                Probes: {
                    do: doState,
                    ph: phState,
                    temp: tpState,
                    update:newProbeData,
                }
            }}>
            {children}
        </BackendContext.Provider>
    )
}