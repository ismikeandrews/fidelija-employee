import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar as MuiAppBar,
    Toolbar,
    IconButton,
    Avatar,
    Typography,
    MenuItem,
    Menu,
    Button,
    SwipeableDrawer,
    List,
    ListItemText,
    ListItem,
    ListItemIcon
} from '@material-ui/core';
import { Menu as MenuIcon, ExitToApp } from '@material-ui/icons';
import { styles } from './appbar.elements';
import { AuthService } from '../../../Services';
import { History, AttachMoney, ConfirmationNumber } from '@material-ui/icons';


const AppBar = (props) => {
    const [open, setOpen] = useState(false)
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const classes = styles();
    const anchorRef = useRef(null);

    const logout = () => {
        AuthService.clearLoggedUser()
    }

    return (
        <>
            <MuiAppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setToggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Painel do funcionário
                    </Typography>
                    <div>
                    <IconButton onClick={() => setOpen(true)} ref={anchorRef} name="Profile button">
                        <Avatar src={process.env.REACT_APP_BASE_URL + AuthService.getLoggedUser().photo} alt="profile"/>
                    </IconButton>
                        <Menu anchorEl={anchorRef.current} open={open} onClose={() => setOpen(false)}>
                            <MenuItem component={Button} endIcon={<ExitToApp/>} color="secondary" onClick={() => logout()}>Sair</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </MuiAppBar>
            <SwipeableDrawer anchor="left" open={toggleDrawer} onOpen={() => setToggleDrawer(true)} onClose={() => setToggleDrawer(false)}>
                <div className={classes.list}  role="presentation" onClick={() => setToggleDrawer(false)} onKeyDown={() => setToggleDrawer(false)}>
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <History/>
                            </ListItemIcon>
                            <ListItemText>
                                Histórico
                            </ListItemText>
                        </ListItem>
                        <ListItem button component={Link} to="/point-user">
                            <ListItemIcon>
                                <AttachMoney/>
                            </ListItemIcon>
                            <ListItemText>
                                Pontuar
                            </ListItemText>
                        </ListItem>
                        <ListItem button component={Link} to="/redeem">
                            <ListItemIcon>
                                <ConfirmationNumber/>
                            </ListItemIcon>
                            <ListItemText>
                                Resgate de produto
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default AppBar;