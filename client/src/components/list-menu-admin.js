import React , { useState } from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import  PeopleIcon from '@material-ui/icons/People';
import  ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle
} from '@material-ui/core/';



import api from '../services/api';
import {getToken, logout} from '../services/auth';



export default function ListMenuAdmin(){ 

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  async function handleConfirm() {
    console.log("TESTE");
    const response = await api.get('/api/destroyToken', {headers: {token: getToken}});
    setOpen(false);
    if(response.status === 200){
      logout();
      window.location.href = '/';
    }else{
      alert("Não foi possivel fazer logout");
    }
  }

  return (
      <div>

        <ListItem button component="a" href="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component="a" href="/users">
          <ListItemIcon>
          <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component="a" href="/prices">
          <ListItemIcon>
          <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Prices" />
        </ListItem>
        <ListItem button component="a" href="/plans">
          <ListItemIcon>
          <PhoneIphoneIcon />
          </ListItemIcon>
          <ListItemText primary="Plans" />
        </ListItem>
        <ListItem button component="a" href="/cities">
          <ListItemIcon>
          <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary="Cities" />
        </ListItem>
        <Divider />
        <ListSubheader inset>Options</ListSubheader>
        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItem>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Do you need Logout?"}</DialogTitle>
          
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                No
              </Button>
              <Button onClick={handleConfirm} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
      </div>
  );
}






