import React, { useState, useRef } from 'react';
import InputMask from 'react-input-mask';
import { 
    Fab, 
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
import { CameraAlt, AccountBox, MonetizationOn, Receipt, AccountBalance } from '@material-ui/icons';
import { styles } from './home.elements';
import { Backdrop, Snackbar, AppBar, NumberFormat } from '../../Components';
import { UserService, AuthService } from '../../Services';


const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [toggleFailureSnack, setToggleFailureSnack] = useState(false);
    const [toggleSuccessSnack, setToggleSuccessSnack] = useState(false);
    const [infoMsg, setInfoMsg] = useState('');
    const [user, setUser] = useState(null);
    const [cpf, setCpf] = useState('');
    const [ammount, setAmmount] = useState('');
    const [reference, setReference] = useState('')
    const classes = styles();
    const inputFile = useRef(null);

    const fetchData = async () => {
        setIsLoading(true)
        const data = {cpf}   
        try {
            const res = await UserService.getUserByCpf(data)
            console.log(res.data)
            setUser(res.data)
            setIsLoading(false)
            if(!res.data && cpf.length > 0){
                setInfoMsg("Usuário não encontrado.")
                setToggleFailureSnack(true);
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setInfoMsg("Não foi possível buscar o usuário.")
            setToggleFailureSnack(true);
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
            setCpf('')
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
            <Container maxWidth="lg">
                <div className={classes.header}>
                    <Typography variant="h6">Pontuar usuário</Typography>
                    <Divider/>
                </div>
                <Grid className={classes.gridContainer} container spacing={3} direction="column" justifyContent="center">
                    <Grid item xs={12}>
                        <Paper variant="outlined" className={classes.paper}>
                            <InputMask mask="999.999.999-99" maskChar="" value={cpf} onChange={e => setCpf(e.target.value)} onBlur={fetchData}>
                                {props => (
                                    <TextField {...props} fullWidth variant="outlined" label="CPF" margin="normal" type="text"/>
                                )}
                            </InputMask>
                            <TextField fullWidth variant="outlined" label="Valor da compra" margin="normal" name="valor" value={ammount} onChange={e => setAmmount(e.target.value)} InputProps={{inputComponent: NumberFormat}}/>
                            <TextField fullWidth variant="outlined" label="Referência" margin="normal" name="valor" value={reference} onChange={e => setReference(e.target.value)}/>
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
                                    <Button className={classes.button} variant="contained" color="inherit" fullWidth size="medium" disabled={ammount === '' || reference === ''} onClick={submitScore}>Pontuar</Button>
                                </div>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
                <input type="file" accept="image/*" capture="camera" ref={inputFile} style={{display: "none"}}/>
                <Fab className={classes.fab} color="secondary" onClick={() => inputFile.current.click()}>
                    <CameraAlt/>
                </Fab>
            </Container>
        </div>
    )
}

export default Home
