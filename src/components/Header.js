import { Grid, Container, styled } from '@material-ui/core';
import './Header.css';
import GridBase from "@material-ui/core/Grid";



export default function Header() {

//   const Grid = styled(GridBase)`
//   .MuiGrid-root {
//     flex-grow: 1;
//   }
// `

  return (
    <div>
    

<Grid
  container
  spacing={0}
  direction="row"
  // alignItems="center"
  justify="center"
  // style={{ minWidth: '200vw' }}
>

  <Grid 
    item xs={12}
    style={{width: '200vw'}}
  
  >
      <h1 style={{textAlign: 'center' }}>FULL STACK</h1>
      </Grid>
      </Grid>
    </div>
  )
}