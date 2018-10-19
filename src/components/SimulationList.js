import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Simulation from '../components/Simulation'

class SimulationList extends Component {
    constructor() {
        super()
    }

    render() {
        return (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Simulations"
                            margin="normal"
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Simulation title={"gridTied"} imageUrl={"/simulador-solar/src/logo.svg"} description={"Prueba"} simulationUrl={"Prueba"}/>
                                </Grid>
                        </Grid>
                    </div>
        )
    }
}
export default SimulationList;
