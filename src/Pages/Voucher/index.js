import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    Paper,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Button,
    Container,
    Typography
} from '@material-ui/core';
import { AppBar, Snackbar, Backdrop, Fab } from '../../Components';
import { VoucherService } from '../../Services';
import { Styles } from './voucher.elements';
import { ShoppingBasket, ShowChart, AttachMoney, CalendarToday } from '@material-ui/icons';

const Voucher = () => {
    const [voucher, setVoucher] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [toggleFailureSnack, setToggleFailureSnack] = useState(false);
    const [toggleSuccessSnack, setToggleSuccessSnack] = useState(false);
    const [infoMsg, setInfoMsg] = useState('');
    const {id} = useParams();
    const classes = Styles();

    useEffect(() => {
        const fetchVoucher = async () => {
            try {
                const { data } = await VoucherService.getVoucher(id);
                setVoucher(data);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }  

        fetchVoucher()
    }, []);


    const completeVoucher = async () => {
        setIsLoading(true)
        const data = {id}
        console.log(data)
        try {
            await VoucherService.completeVoucher(data);
            setIsLoading(false)
            setInfoMsg("Prêmio resgatado.");
            setToggleSuccessSnack(true);
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setInfoMsg("Não foi possivel resgatar o prêmio")
            setToggleFailureSnack(true)
        }
    }

    return (
        <div>
            <AppBar/>
            <Backdrop open={isLoading}/>
            <Snackbar toggleSnack={toggleFailureSnack || toggleSuccessSnack} time={4500} onClose={() => {setToggleFailureSnack(false); setToggleSuccessSnack(false)}} color={toggleSuccessSnack ? "success" : "warning"}>
                {infoMsg}
            </Snackbar>
            {voucher && (
                <Container>
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
                </Container>
            )}
            <Fab/>
        </div>
    )
}

export default Voucher
