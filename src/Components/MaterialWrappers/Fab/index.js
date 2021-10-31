import React, { useRef } from 'react'
import QrReader from 'react-qr-reader';
import { Fab as MuiFab, makeStyles } from '@material-ui/core';
import CameraAlt from '@material-ui/icons/CameraAlt';

const styles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const Fab = () => {
    const qrRef = useRef(null);
    const classes = styles();

    const handleScan = (result) => {
        if(result){
            window.location.replace(result);
        }
    }

    return (
        <div>
            <QrReader
            style={{display: 'none'}}
            ref={qrRef}
            delay={300}
            onError={(error) => console.log(error)}
            onScan={handleScan}
            legacyMode/>
            <MuiFab className={classes.fab} color="secondary" onClick={() => qrRef.current.openImageDialog()}>
                <CameraAlt/>
            </MuiFab>
        </div>
    )
}

export default Fab
