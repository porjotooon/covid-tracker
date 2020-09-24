import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
// card will be showing recovered,infected and death

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return "Loading..."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/*the grid inside the grid is card component*/}
                <Grid item component={Card}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of recovered cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards