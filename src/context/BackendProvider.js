import React, {createContext, useEffect, useReducer, useState} from "react";
import useAsyncState from "../hooks/useAsyncState";

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

    useEffect(() => {
        async function effect() {
            phDispatch({type: probeTypes.DATA, value: generateData(24)})
            phDispatch({type: probeTypes.READY, value:true})
            doDispatch({type: probeTypes.DATA, value: generateData(24)})
            doDispatch({type: probeTypes.READY, value:true})
            tpDispatch({type: probeTypes.DATA, value: generateData(24)})
            tpDispatch({type: probeTypes.READY, value:true})

        }

        setTimeout(() => {
            effect()
        }, 1000)

        setTimeout(() => {
            phDispatch({type: probeTypes.OUT_OF_RANGE, value: true})
        }, 3000)

        setTimeout(() => {
            phDispatch({type: probeTypes.OUT_OF_RANGE, value: false})
        }, 6000)


    }, [])

    function generateData(num) {
        return [...new Array(num)].map((row, index) => ({
            x: index,
            y: Math.random() * 3 + 5
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
                }
            }}>
            {children}
        </BackendContext.Provider>
    )
}