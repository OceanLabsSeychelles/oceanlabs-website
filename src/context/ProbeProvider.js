import React, {createContext, useEffect} from 'react'
import useAsyncState from "../hooks/useAsyncState";

export const ProbeContext = createContext({});

export const ProbeProvider = ({children}) => {
    const bootstrapColors = {
        "primary": "#0275d8",
        "success": "#5cb85c",
        "warning": "#f0ad4e",
        "danger": "#d9534f",
        "secondary": "lightgray"
    }

    const probeStatus = useAsyncState('disconnected')
    const probeColor = useAsyncState(bootstrapColors.secondary)
    const probeVariant = useAsyncState('secondary')
    const probeDisabled = useAsyncState(false);

    useEffect(() => {
        setTimeout(()=>{probeStatus.setState('connected')},1000)
    }, [])

    useEffect(() => {
        if(probeStatus.state !== 'danger' && probeStatus.state !== 'disconnected'){
            if(probeDisabled.state === false){
                probeStatus.setState('connected')
            }else{
                probeStatus.setState('disabled')
            }
        }
    }, [probeDisabled.state])


    useEffect(() => {
        switch (probeStatus.state) {
            case "connected":
                probeColor.setState(bootstrapColors.success);
                probeVariant.setState('success')
                break;
            case "disabled":
                probeColor.setState(bootstrapColors.warning);
                probeVariant.setState('warning')
                break;
            case "disconnected":
                probeColor.setState(bootstrapColors.secondary);
                probeVariant.setState('secondary')
                break;
            case "danger":
                probeColor.setState(bootstrapColors.danger);
                probeVariant.setState('danger')
                break;
        }
    }, [probeStatus.state])

    return (
        <ProbeContext.Provider
            value={{
                ProbeStatus: probeStatus,
                ProbeColor: probeColor,
                ProbeVariant: probeVariant,
                ProbeDisabled: probeDisabled
            }}>
            {children}
        </ProbeContext.Provider>
    )
}