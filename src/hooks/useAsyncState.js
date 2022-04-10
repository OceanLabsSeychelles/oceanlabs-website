import {useState, useEffect} from "react";

export default function useAsyncState(initialState) {
    const [state, setState] = useState(initialState);
    const [shouldCallback, setShouldCallback] = useState(false);
    const [callback, setCallback] = useState(null);
    const [promiseResolution, setPromiseResolution] = useState(null);
    const [isPromise, setIsPromise] = useState(false);
    const [isCallback, setIsCallback] = useState(false);

    useEffect(() => {
        if (shouldCallback) {
            if (isCallback) {
                callback();
            }
            if (isPromise) {
                promiseResolution(true);
            }
            setShouldCallback(false);
            setIsPromise(false);
            setIsCallback(false);
        }
    }, [state]);

    function setWithCallback(newState, parentCallback) {
        if(newState ===state){
            parentCallback();
        }else {
            setIsCallback(true);
            setCallback(() => parentCallback);
            setShouldCallback(true);
            setState(newState);
        }
    }

    async function setWithPromise(newState) {
        return new Promise((resolve) => {
            if (newState === state) {
                resolve(true)
            } else {
                setPromiseResolution(() => resolve);
                setIsPromise(true);
                setShouldCallback(true);
                setState(newState);
            }
        })
    }

    return ({
        state: state,
        setState: setState,
        setWithCallback: setWithCallback,
        setWithPromise: setWithPromise
    });
}