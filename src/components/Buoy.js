import React, {useContext} from 'react'
import ResponsivePlot from "../components/ResponsivePlot";
import {ProbeContext} from "../context/ProbeProvider";
import {BackendContext} from "../context/BackendProvider";
import Styles from "./Styles";
import {Col} from 'react-bootstrap'

export default function Buoy(props) {
    //const {ProbeStatus, ProbeColor, ProbeVariant, ProbeDisabled} = useContext(ProbeContext)
    const {Probes} = useContext(BackendContext)

    return (
        <Col style={Styles.BootstrapCenter}>
            <ResponsivePlot data={Probes.do.data} width={0.5} height={.275} title={'DO'}
                            isMobile={false} color={color}/>
            <ResponsivePlot data={Probes.ph.data} width={0.5} height={.275} title={'pH'}
                            isMobile={false} color={color}/>
            <ResponsivePlot data={Probes.temp.data} width={0.5} height={.275} title={'Temp'}
                            isMobile={false} color={color}/>
        </Col>
    )
}