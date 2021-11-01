import React from 'react'
import { Container, Paper, Typography, Divider } from '@material-ui/core';
import QrReader from 'react-qr-reader';
import { AppBar } from '../../Components';
import { styles } from './reader.elements'

const Reader = () => {
    const classes = styles();

    const handleScan = (result) => {
        if(result){
            window.location.replace(result);
        }
    }

    return (
        <div>
            <AppBar/>
            <Container>
                <div className={classes.header}>
                    <Typography variant="h6">Modo desktop</Typography>
                    <Divider/>
                </div>
                <Paper variant="outlined" className={classes.paperContent}>
                    <QrReader className={classes.qr} delay={300} onError={(error) => console.log(error)} onScan={handleScan}/>
                </Paper>
            </Container>
        </div>
    )
}

export default Reader
