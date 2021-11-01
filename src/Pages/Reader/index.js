import React, { useRef } from 'react'
import { Container, Paper, Typography, Divider, Button } from '@material-ui/core';
import QrReader from 'react-qr-reader';
import { AppBar } from '../../Components';
import { styles } from './reader.elements'

const Reader = () => {
    const qrRef = useRef(null);
    const classes = styles();

    const handleScan = (result) => {
        if(result){
            window.location.replace(result);
        }
    }

    const handleUploadScan = (result) => {
        if(result){
            window.location.replace(result);
        }
    }

    return (
        <div>
            <AppBar/>
            <Container>
                <div className={classes.header}>
                    <Typography variant="h5">Leitor de código QR</Typography>
                    <Divider/>
                </div>
                <Paper variant="outlined" className={classes.paperContent}>
                    <QrReader className={classes.qr} delay={300} onError={(error) => console.log(error)} onScan={handleScan}/>
                </Paper>
                <Button fullWidth variant="contained" color="primary" className={classes.button} onClick={() => qrRef.current.openImageDialog()}>Upload do Código QR</Button>
                <QrReader
                style={{display: 'none'}}
                ref={qrRef}
                delay={300}
                onError={(error) => console.log(error)}
                onScan={(result) => handleUploadScan(result)}
                legacyMode/>
            </Container>
        </div>
    )
}

export default Reader
