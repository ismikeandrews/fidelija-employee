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
import { AppBar, Backdrop, Fab, Dialog } from '../../Components';
import { VoucherService } from '../../Services';
import { Styles } from './voucher.elements';
import { ShoppingBasket, ShowChart, AttachMoney, CalendarToday } from '@material-ui/icons';
import { VoidSvg } from '../../Assets'

const Voucher = () => {
    const [voucher, setVoucher] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleDialog, setToggleDialog] = useState(false);
    const [dialogText, setDialogText] = useState('');
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
    }, [id]);


    const completeVoucher = async () => {
        setIsLoading(true)
        const data = {id}
        console.log(data)
        try {
            await VoucherService.completeVoucher(data);
            setIsLoading(false);
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
            {isLoading || (
                <>
                    {voucher ? (
                        <Container maxWidth="lg">
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
                    ) : (
                        <div className={classes.notFound}>
                            <Container maxWidth="lg">
                                <img src={VoidSvg} width="250"  alt="void"/>
                                <Typography variant="h6" className={classes.notFoundMsg}>
                                    O cupom inserido é inválido ou não existe.
                                </Typography>               
                            </Container>
                        </div>
                    )}
                </>
            )}
            <Fab/>
        </div>
    )
}

export default Voucher
