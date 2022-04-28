import React, {useState} from 'react';

import { 
  Paper,
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Typography
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../services/api';
import {login, setIdUser, setNameUser} from '../../services/auth';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    backgroundImage: 'url(../../assets/logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(){

      const credentials = {
        email: email,
        password: password
      };
      await api.post("/api/login", credentials)
      .then(res =>{
          if(res.status === 200){
              if(res.data.status === 1){
                console.log(res.data);
                  login(res.data.token);
                  setIdUser(res.data.id_client);
                  setNameUser(res.data.user_name);

                  window.location.href = '/dashboard';
              }else {
                alert(res.data.msg);
              }
          }
      });
      
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Entrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Do you not have a account? Sing up
                </Link>
              </Grid>
            </Grid>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}