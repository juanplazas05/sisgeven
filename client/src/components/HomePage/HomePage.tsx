import * as React from 'react';
import Grid from '@material-ui/core/Grid';

export class HomePage extends React.Component{
    render(){
        return(
            <Grid>
                <h1>HomePage</h1>
                <Grid>
                    Administrador
                </Grid>
                <Grid>
                    Participante
                </Grid>
                <Grid>
                    Almacen
                </Grid>
            </Grid>
        )
    }
}