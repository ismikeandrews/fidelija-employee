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
    TextField,
    Container,
    Typography
} from '@material-ui/core';
import { AppBar, Snackbar, Backdrop } from '../../Components';
import { VoucherService } from '../../Services';

const Voucher = () => {
    const [voucher, setVoucher] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [toggleFailureSnack, setToggleFailureSnack] = useState(false);
    const [toggleSuccessSnack, setToggleSuccessSnack] = useState(false);
    const [infoMsg, setInfoMsg] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await VoucherService.getVoucher(id);
            console.log(data)
            setVoucher(data);
        } catch (error) {
            console.log(error);
        }
    }  

    const completeVoucher = async () => {
        // const data = {id}
        console.log(id)
        // try {
        //     await VoucherService.completeVoucher(data);
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <div>
            <AppBar/>
            <Backdrop open={isLoading}/>
            <Snackbar toggleSnack={toggleFailureSnack || toggleSuccessSnack} time={4500} onClose={() => {setToggleFailureSnack(false); setToggleSuccessSnack(false)}} color={toggleSuccessSnack ? "success" : "warning"}>
                {infoMsg}
            </Snackbar>
                <Container>
                    <Paper variant="outlined">
                        <Button variant="contained" onClick={completeVoucher}>Invalidar</Button>
                    </Paper>
                </Container>
        </div>
    )
}

export default Voucher
