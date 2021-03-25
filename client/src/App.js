import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "material-ui-core";

//Components
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

const App = () => {
     return (
          <div>
               <Container maxwidth="lg">
                    <AppBar position="static" color="inherit">
                         <Typography variant="h4" align="center">
                              HGC Dashboard
                         </Typography>
                    </AppBar>
                    <Grow in>
                         <Container>
                              <Grid
                                   justify="space-between"
                                   alignContent="stretch"
                                   spacing="3"
                              >
                                   <Grid Grid item xs={12} sm={7}>
                                        <Posts />
                                   </Grid>
                                   <Grid Grid item xs={12} sm={5}>
                                        <Form />
                                   </Grid>
                              </Grid>
                         </Container>
                    </Grow>
               </Container>
          </div>
     );
};

export default App;
