import React from 'react';
import { Container, Grid, LinearProgress } from '@material-ui/core';

export default function DeveloperJourney() {
  return (
      <Grid
        container
        spacing={10}
        direction="row"
        justify="center"
      >

        <Grid item xs={10} sm={5}>
          <p className="progress-categories">Browser-based technologies</p>
          <h3 style={{color: "#37474F"}}>React</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={50}
          />
          <h3 style={{color: "#37474F"}}>CSS 3</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={60}
          />
          <h3 style={{color: "#37474F"}}>HTML 5</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={75}
          />
          <h3 style={{color: "#37474F"}}>JavaScript</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={80}
          />
        </Grid>

        <Grid item xs={10} sm={5}>
          <p className="progress-categories">Server-side technologies</p>
          <h3 style={{color: "#37474F"}}>MongoDB & Mongoose</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={40}
          />
          <h3 style={{color: "#37474F"}}>mySQL & Sequelize</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={60}
          />
          <h3 style={{color: "#37474F"}}>Node</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={60}
          />
          <h3 style={{color: "#37474F"}}>Express</h3>
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={70}
          />

        </Grid>
           <Grid style={{marginBottom: ".8em"}} item xs={10} sm={10}>
          <h3 style={{color: "#37474F"}}>Other Technologies: Bootstrap / jQuery / Git / Heroku / Handlebars / Security and Session Storage / User Authentication / Responsive Design</h3>
           </Grid>

      </Grid>

  )
}