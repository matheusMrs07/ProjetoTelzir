import React, { useState, useEffect } from "react";
import {  
  Paper, 
  Button,
  Grid, 
  Container, 
  Box, 
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/footer-admin';
import api from '../../services/api';


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
 
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    height: 240,
  },
  paper: {
    margin: theme.spacing(12),
    padding: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 400
  },
  item: {
    margin: 10
  }
}));

function Home() {
  const classes = useStyles();
  
  const [cities, setCities] = useState([]);
  const [plans, setPlans] = useState([]);

  const [price, setPrice] = useState('');
  const [plan, setPlan] = useState({});
  const [message, setMessage] = useState('');



  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [time, setTime] = useState('');



  async function getCities(){
    var response = await api.get('api/cities/');
      setCities(response.data);
  }

  async function getPlans(){
    var response = await api.get('api/plans/');
      setPlans(response.data);
  }

  async function getPrice(){
    if(plan && origin && destiny && time){
      var response = await api.get('api/prices/', 
      { params: { 
        origin: origin.code,
        destiny: destiny.code
      }});
      setMessage(null);
      setPrice(response.data[0].price);
     
    }else{
      setPrice(null);
      setMessage("Error when calculating! Try again");
    }
   
  }

  useEffect(() => {
    getCities();
    getPlans();
  },[]);


  return (
    <Container>
      <CssBaseline />
      <AppBar >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button color="inherit" href={'/login'}>Entrar</Button>
        </Toolbar>
      </AppBar>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <h2>List Prices</h2>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <Grid container spacing={3}>
                        <Grid item sm={3}>
                        <InputLabel id="origin">Origin</InputLabel>
                          <Select
                              required
                              id="origin"
                              name="origin"
                              label="Origin"
                              value={origin}
                              fullWidth
                              onChange={e => setOrigin(e.target.value)}>
                            
                            {cities.map((city) => (
                              <MenuItem
                                key={city.id}
                                value={city}
                              >
                                {city.code+" - "+city.name}
                              </MenuItem>
                            ))}
                          </Select>
                          
                        </Grid>
                        <Grid item sm={3}>
                        <InputLabel id="destiny">Destiny</InputLabel>
                          <Select
                            required
                              id="destiny"
                              name="destiny"
                              label="Destiny"
                              value={destiny}
                              fullWidth
                              onChange={e => setDestiny(e.target.value)}>
                            
                            {cities.map((city) => (
                              <MenuItem
                                key={city.id}
                                value={city}
                              >
                                {city.code+" - "+city.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </Grid>
                        <Grid item  sm={3}>
                        <InputLabel id="plan">Plan</InputLabel>
                          <Select
                              required
                              id="plan"
                              name="plan"
                              label="Plan"
                              value={plan}
                              fullWidth
                              onChange={e => setPlan(e.target.value)}>
                            
                            {plans.map((plan) => (
                              <MenuItem
                                key={plan.id}
                                value={plan}
                              >
                                {plan.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </Grid>
                        <Grid item sm={3}>
                          <TextField
                            required
                            id="time"
                            name="time"
                            label="Time (min)"
                            type="number"
                            fullWidth
                            value={time}
                            onChange={e => setTime(e.target.value)}
                          />
                        </Grid>
                        
                        <Grid item xs={2} sm={2} alignItems='center' >
                          <Button variant="contained" onClick={getPrice} color="primary" >
                            Calcule
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} style={{ display: price ? 'block' : 'none' }} >
                      <Grid container spacing={4}>
                        <Grid item xs={3} >
                        </Grid>
                        <Grid item xs={3} >
                          <Card >

                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Without {plan.name}
                              </Typography>
                              <Typography variant="h5" component="div">
                                    $ { (time*(price+(price*0.1))).toFixed(2) }
                              </Typography>
        
                            </CardContent>
                        
                          </Card>
                        </Grid>

                        <Grid item xs={3}  alignItems="center">
                          <Card >

                            <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                With {plan.name}
                              </Typography>
                              <Typography variant="h5" component="div">
                                    $ { (time<plan.time)? 0.0 :(price*(time-plan.time)).toFixed(2) }
                              </Typography>
        
                            </CardContent>
                          
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid>


                    <Grid item xs={12} style={{ display: message ? 'block' : 'none' }} >
                      <Grid container spacing={4}>
                        <Grid item xs={3} >
                        </Grid>
                        <Grid item xs={3} >
                          <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
                                {message}
                              </Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Grid>


                  </Grid>
                </Paper>
              </Grid>
            </Grid>
      <Box pt={4}>
          <Footer />
      </Box>
    </Container>
    
  );
}
 
export default Home;
