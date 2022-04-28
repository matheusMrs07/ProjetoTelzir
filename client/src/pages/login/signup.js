import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../services/api';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {login, setIdUser, setNameUser} from '../../services/auth';

import {  
  Button, 
  TextField,
  Grid, 
  Container, 
  Box,
  CssBaseline,
  Avatar,
  Typography
} from '@material-ui/core';



import Footer from '../../components/footer-admin';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }
  
}));

export default function UsersCadastrar() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function mekeLogin(email, password){

    const credentials = {
      email: email,
      password: password
    };

    await api.post("/api/login", credentials)
    .then(res =>{
        if(res.status === 200){
            if(res.data.status === 1){
                login(res.data.token);
                setIdUser(res.data.id_client);
                setNameUser(res.data.user_name);

                window.location.href = '/dashboard';

            }
        }
    })
  }

  
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
      mekeLogin(email,password);
      window.location.href='/dashboard';
    }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12}>
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
          
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
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
              <Button variant="contained"  onClick={handleSubmit} color="primary">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
    
  );
}


