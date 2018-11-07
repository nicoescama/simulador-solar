import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Simulation from './Simulation'
import foto from './sistema.png'



class SimulationList extends Component {


    render() {
        return (
          <div>
                <Grid container spacing={24} style={{padding: 24}}>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Simulation title={"Sistema gridTied"} imageUrl={foto} description={"Mejor opción si se encuentra conectado a la red"} simulationUrl={"../GridTied.js"}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Simulation title={"Sistema off-grid"} imageUrl={foto} description={"Para sistemas sin conexión a la red"} simulationUrl={"../GridTied.js"}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Simulation title={"Sistema híbrido"} imageUrl={foto} description={"Si se encuentra  conectado a la red y se quiere respaldar frente a apangones"} simulationUrl={"../GridTied.js"}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default SimulationList;
