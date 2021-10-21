import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserService, AuthService } from '../../Services';
import { AppBar, Snackbar, Backdrop } from '../../Components';
import {
    Paper,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Button,
    TextField,
    Container
} from '@material-ui/core';
import { MonetizationOn} from '@material-ui/icons';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { styles } from './userSearch.elements';

const UserSearch = () => {
    const [user, setUser] = useState({});
    const [ammount, setAmmount] = useState('');
    const [reference, setReference] = useState('');
    const [toggleFailureSnack, setToggleFailureSnack] = useState(false);
    const [toggleSuccessSnack, setToggleSuccessSnack] = useState(false);
    const [infoMsg, setInfoMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const classes = styles();
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const { data } = await UserService.getUser(id);
            console.log(data);
            setUser(data);
        } catch (error) {
            console.log(error)
        }
    }

    const submitScore = async () => {
        setIsLoading(false);
        const data = {
            user_id: user.id, 
            ammount: ammount,
            reference: reference,
            employeeId: AuthService.getLoggedUser().id
        }
        try {
            await UserService.registerPoints(data)
            setUser(null)
            setAmmount('');
            setReference('')
            setIsLoading(false);
            setInfoMsg("Usuário pontuado com sucesso.");
            setToggleSuccessSnack(true);
        } catch (error) {
            setIsLoading(false)
            setInfoMsg("Não foi possivel pontuar o usuário")
            setToggleFailureSnack(true)
            console.log(error)
        }
    }

    return (
        <div>
            <AppBar/>
            <Backdrop open={isLoading}/>
            <Snackbar toggleSnack={toggleFailureSnack || toggleSuccessSnack} time={4500} onClose={() => {setToggleFailureSnack(false); setToggleSuccessSnack(false)}} color={toggleSuccessSnack ? "success" : "warning"}>
                {infoMsg}
            </Snackbar>
            {user && (
                <Container>
                    <Paper variant="outlined">
                        <List dense={false}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={process.env.REACT_APP_BASE_URL +  user.photo} alt={user.name}/>
                                </ListItemAvatar>
                                <ListItemText>{user.name}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: "#604bd2"}}>
                                        <ReceiptIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>{reference || "- - -"}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: "#604bd2"}}>
                                        <AccountBalanceIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>{user.stablishment_points || "- - -"}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: "rgb(38 165 43)"}}>
                                        <MonetizationOn />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>{Math.ceil(ammount * 5)}</ListItemText>
                            </ListItem>
                        </List>
                        <div className={classes.inputs}>
                            <TextField fullWidth variant="outlined" label="Valor da compra" margin="normal" name="valor" value={ammount} onChange={e => setAmmount(e.target.value)}/>
                            <TextField fullWidth variant="outlined" label="Referencia" margin="normal" name="valor" value={reference} onChange={e => setReference(e.target.value)}/>
                        </div>
                        <div style={{padding: "10px"}}>
                            <Button className={classes.button} variant="contained" color="inherit" fullWidth size="medium" disabled={ammount === '' || reference === ''} onClick={submitScore}>Pontuar</Button>
                        </div>
                    </Paper>
                </Container>
            )}
        </div>
    )
}

export default UserSearch;
