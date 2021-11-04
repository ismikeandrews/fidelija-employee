import React, { useState } from 'react';
import { 
    Container, 
    Grid, 
    TextField, 
    Paper,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    Button,
    ListItemText,
    Typography,
    Divider,
 } from '@material-ui/core';
import { AppBar } from '../../Components';
import { styles } from './redeem.elements';
import { VoucherService } from '../../Services';
import { ShoppingBasket, ShowChart, AttachMoney, CalendarToday } from '@material-ui/icons';
import { Backdrop, Dialog, Fab } from '../../Components';

const Redeem = () => {
    const [id, setId] = useState('');
    const [voucher, setVoucher] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [toggleDialog, setToggleDialog] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const classes = styles();

    const fetchData = async (e) => {
        if (e.key === 'Enter') {
            setIsLoading(true);
            try {
                const { data } = await VoucherService.getVoucher(id);
                setVoucher(data);
                setIsLoading(false);
                if (!data) {
                    setDialogText('Cupom não encontrado.');
                    setToggleDialog(true);
                }
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setDialogText('Ocorreu um erro, tente novamente.');
                setToggleDialog(true);
            }
        }
    }

    const completeVoucher = async () => {
        setIsLoading(true)
        setVoucher(null)
        const data = {id}
        try {
            await VoucherService.completeVoucher(data);
            setIsLoading(false)
            setDialogText('Resgate concluido com sucesso.');
            setToggleDialog(true);
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setDialogText('Não foi possivel efetuar o resgate.');
            setToggleDialog(true);
        }  
    }

    return (
        <div>
            <AppBar/>
            <Backdrop open={isLoading}/>
            <Dialog open={toggleDialog} close={() => setToggleDialog(false)} text={dialogText}/>
            <Container maxWidth="lg">
                <div className={classes.header}>
                    <Typography variant="h5">Resgate</Typography>
                    <Divider/>
                </div>
                <Grid className={classes.gridContainer} container spacing={3} direction="column" justifyContent="center">
                    <Grid item className={classes.gridContainer} xs={12}>
                        <Paper variant="outlined" className={classes.paper}>
                            <TextField fullWidth variant="outlined" label="Código de resgate" margin="normal" type="text" value={id} onChange={(e) => setId(e.target.value)} onKeyPress={(e) => fetchData(e)}/>
                        </Paper>
                    </Grid>
                    {voucher && (
                        <Grid item xs={12}>
                            <Paper variant="outlined">
                                <div className={classes.imageContainer}>
                                    <Avatar className={classes.productPicture} src={process.env.REACT_APP_BASE_URL + voucher.product.image}/>
                                </div>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ShoppingBasket/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Produto" secondary={voucher.product.name}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ShowChart/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Estoque" secondary={voucher.product.stock}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AttachMoney/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Valor em pontos" secondary={voucher.product.cost}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <CalendarToday/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Validade" secondary={voucher.limit_date}/>
                                    </ListItem>
                                </List>
                                <div style={{padding: "10px"}}>
                                    <Button className={classes.button} fullWidth variant="contained" onClick={() => completeVoucher()}>
                                        Confirmar
                                    </Button>
                                </div>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </Container>
            <Fab/>
        </div>
    )
}

export default Redeem
