import React from 'react'
import { Link } from 'react-router-dom';
import { Fab as MuiFab, makeStyles } from '@material-ui/core';
import CameraAlt from '@material-ui/icons/CameraAlt';

const styles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const Fab = () => {    
    const classes = styles();

    return (
        <MuiFab className={classes.fab} color="secondary" component={Link} to="/reader">
            <CameraAlt/>
        </MuiFab>
    )
}

export default Fab
