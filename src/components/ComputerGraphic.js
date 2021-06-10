import { Grid, Container } from '@material-ui/core';
import computerGraphic from '../images/computer-screen-graphic.png'

export default function ComputerGraphic() {
  return (
    <Grid
      container
      justify='center'
    >
    <img 
    src={computerGraphic} 
    style ={{height: '40em'}}
    />
    </Grid>
  )
}