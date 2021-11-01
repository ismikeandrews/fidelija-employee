import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { 
    TextField,
    Paper,
    Grid,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Container,
    Typography,
    Divider,
} from '@material-ui/core';
import { AccountBox, MonetizationOn, Receipt, AccountBalance } from '@material-ui/icons';
import { styles } from './pointUser.elements';
import { Backdrop, AppBar, Fab, Dialog } from '../../Components';
import { UserService, AuthService } from '../../Services';

const PointUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [cpf, setCpf] = useState('');
    const [ammount, setAmmount] = useState('');
    const [reference, setReference] = useState('');
    const [toggleDialog, setToggleDialog] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const classes = styles();
    
    const fetchData = async (e) => {
        if (e.key === 'Enter') {
            setIsLoading(true)
            const data = {cpf}   
            try {
                const res = await UserService.getUserByCpf(data);
                setUser(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setDialogText('Não foi possível encontrar o usuário.');
                setToggleDialog(true);
            }
        }
    }

    const submitScore = async () => {
        setIsLoading(true);
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
            setCpf('')
            setReference('')
            setIsLoading(false);
            setDialogText('Usuário pontuado com sucesso.');
            setToggleDialog(true);
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            setDialogText('Não foi possível pontuar o usuário.')
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
                    <Typography variant="h6">Pontuar usuário</Typography>
                    <Divider/>
                </div>
                <Grid className={classes.gridContainer} container spacing={3} direction="column" justifyContent="center">
                    <Grid item xs={12}>
                        <Paper variant="outlined" className={classes.paper}>
                            <InputMask mask="999.999.999-99" maskChar="" value={cpf} onChange={(e) => setCpf(e.target.value)} onKeyPress={(e) => fetchData(e)}>
                                {props => (
                                    <TextField {...props} fullWidth variant="outlined" label="CPF" margin="normal" type="text"/>
                                )}
                            </InputMask>
                            {user && (
                                <>
                                    <TextField fullWidth variant="outlined" label="Valor da compra" margin="normal" name="valor" value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
                                    <TextField fullWidth variant="outlined" label="Referência" margin="normal" name="valor" value={reference} onChange={(e) => setReference(e.target.value)}/>
                                </>
                            )}
                        </Paper>
                    </Grid>
                    {user && (
                        <Grid item xs={12}>
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
                                                <AccountBox />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>{user.cpf}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar style={{backgroundColor: "#604bd2"}}>
                                                <Receipt/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>{reference || '- - -'}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar style={{backgroundColor: "#604bd2"}}>
                                                <AccountBalance/>
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
                                <div style={{padding: "10px"}}>
                                    <Button className={classes.button} variant="contained" color="inherit" fullWidth size="medium" disabled={ammount === '' || reference === ''} onClick={() => submitScore()}>Pontuar</Button>
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

export default PointUser
