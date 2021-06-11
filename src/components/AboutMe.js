import emilyPhoto from '../images/emily-photo.jpeg';
import { Grid, Container, Divider } from '@material-ui/core';
import './AboutMe.css'

export default function AboutMe() {

  return (
    // <Grid item lg={5} align="center"> 
    //   <img className="profile-photo" alt="Emily Blair on beach" src={emilyPhoto}/>
    //   </Grid>
    <Container>
      <Divider style={{marginTop: "6em"}} />

      <Grid
      container
      // spacing={24}
      justify="center"
      style={{  maxWidth: '100%' }}
      >
        <Grid item xs={9} align="center">
        <h2>ABOUT ME</h2>
          <p>
            Hi, I'm Emily. I'm a software engineer with a certificate in full stack web development from northwestern university.  I believe in responsive, intuitive, and innovative app design.  I approach my work with an agile perspective reevaluating and adapting as I build.
      </p>
        </Grid>

      </Grid>
      {/* <img className="profile-photo" alt="Emily Blair on beach" src={emilyPhoto}/> */}
    </Container>

  )
}