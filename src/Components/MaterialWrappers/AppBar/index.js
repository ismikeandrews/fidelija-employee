import React, { useState, useRef } from 'react';
import {
    AppBar as MuiAppBar,
    Toolbar,
    IconButton,
    Avatar,
    Typography,
    MenuItem,
    Menu,
    Button
} from '@material-ui/core';
import { Menu as MenuIcon, ExitToApp } from '@material-ui/icons';
import { styles } from './appbar.elements';
import { AuthService } from '../../../Services';

const AppBar = (props) => {
    const [open, setOpen] = useState(false)
    const classes = styles();
    const anchorRef = useRef(null);

    const logout = () => {
        AuthService.clearLoggedUser()
    }

    return (
        <MuiAppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Painel do funcionário
                </Typography>
                <div>
                <IconButton onClick={() => setOpen(true)} ref={anchorRef}>
                    <Avatar src={process.env.REACT_APP_BASE_URL + AuthService.getLoggedUser().photo}/>
                </IconButton>
                    <Menu anchorEl={anchorRef.current} open={open} onClose={() => setOpen(false)}>
                        <MenuItem component={Button} endIcon={<ExitToApp/>} color="secondary" onClick={() => logout()}>Sair</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar;