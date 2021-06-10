import emilyPhoto from '../images/emily-photo.jpeg';
import { Grid, Container } from '@material-ui/core';
import './AboutMe.css'

export default function AboutMe() {

  return (
    // <Grid item lg={5} align="center"> 
    //   <img className="profile-photo" alt="Emily Blair on beach" src={emilyPhoto}/>
    //   </Grid>

      <Grid
        container
        // spacing={20}
        // direction="row"
        justify="center"
      > 
      <img className="profile-photo" alt="Emily Blair on beach" src={emilyPhoto}/>
    </Grid>

   )
}