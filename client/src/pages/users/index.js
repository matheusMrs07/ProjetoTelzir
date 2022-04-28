import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';



import { 
  Paper, 
  Button,
  ButtonGroup,
  Grid, 
  Container, 
  Box, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  
} from '@material-ui/core';


import Footer from '../../components/footer-admin';
import MenuAdmin from '../../components/menu-admin';

import api from '../../services/api';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%' 
  },
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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
  
}));


export default function UsersListar() {
  const classes = useStyles();
  
  const [users, setUsers] = useState([])

  async function loadUsers(){
    const response = await api.get("/api/users/");
    setUsers(response.data);
  }

  useEffect(() =>{
    loadUsers();
  }, [])

  async function handleDelete(id){
    if(window.confirm("Deseja realmente excluir este user? ")) {
      var result = await api.delete("/api/users/"+id);
      if(result.status === 200){
        alert("Sucesso!");
        loadUsers();
      }else{
        alert("Ocorreu um erro!");
      }
    }

  }

  return (
    <div className={classes.root}>
      <MenuAdmin title={'USERS'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>List User</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <Button variant="contained" href={'/users/create/'} >
                        +Create
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} size="medium" aria-label="a simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Id</TableCell>
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Email</TableCell>
                          <TableCell align="center">Phone</TableCell>
                          <TableCell align="center">createdAt</TableCell>
                          <TableCell align="center">Options</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {users.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{new Date(row.createdAt).toLocaleString('pt-br') }</TableCell>
                            <TableCell align="center">
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                              <Button color='primary' href={'/users/edit/'+row.id} >Edit</Button>
                              <Button color='secondary' onClick={() => handleDelete(row.id) }>Delete</Button>
                            </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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