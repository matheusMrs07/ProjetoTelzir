import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../services/api';


import { 
  Paper, 
  Button, 
  TextField,
  Grid, 
  Container, 
  Box
} from '@material-ui/core';



import Footer from '../../components/footer-admin';
import MenuAdmin from '../../components/menu-admin';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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
  title: {
    flexGrow: 1,
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
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl: {
    width: '100%',
  },
  button:{
    padding: 15
  }
  
  
}));

export default function UsersCadastrar() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit(){
    const data = {
      name: name,
      phone: phone,
      email: email,
      password: password
    };

    const response = await api.post('/api/users/', data);

    if(response.status === 400){
      alert(response.message );
    }else{
      window.location.href='/users';
    }

  }

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={"Users"} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid className={classes.button} xs={12} sm={12}>
              <Button variant="contained" href="/users"  color="defauf">
                Voltar
              </Button>
            </Grid>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>Cadastrar User</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="name"
                      name="name"
                      label="Name Completo"
                      fullWidth
                      autoComplete="given-name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Grid>
                
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="phone"
                      name="phone"
                      label="Phone"
                      fullWidth
                      autoComplete="phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="E-mail"
                      type="email"
                      fullWidth
                      autoComplete="email@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth
                      autoComplete="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Grid>
            
                  <Grid item xs={12} sm={12}>
                    <Button variant="contained" onClick={handleSubmit} color="primary">
                      Salvar
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}


