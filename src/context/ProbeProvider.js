import React, {createContext, useContext, useEffect} from 'react'
import useAsyncState from "../hooks/useAsyncState";
import {BackendContext} from "./SampleDataProvider";
export const ProbeContext = createContext({});

export default function ProbeProvider({children}) {
    const {Probes} = useContext(BackendContext)
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
        if(probeStatus.state === 'disabled')return
        if(Probes.do.outOfRange || Probes.temp.outOfRange || Probes.ph.outOfRange){
            probeStatus.setState('danger')
        }
        else if(Probes.do.ready && Probes.temp.ready && Probes.ph.ready){
            probeStatus.setState('connected')
        }
    }, [Probes.do,Probes.temp,Probes.ph])

    useEffect(() => {
        if(probeStatus.state !== 'danger' && probeStatus.state !== 'disconnected'){
            if(probeDisabled.state === false){
                probeStatus.setState('connected')
            }else{
                probeStatus.setState('disabled')
            }
        }
    }, [probeDisabled.state, probeStatus.state])


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