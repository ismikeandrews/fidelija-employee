import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserService, AuthService } from '../../Services';
import { AppBar, Backdrop, Fab, Dialog } from '../../Components';
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
import { AccountBox, MonetizationOn, AccountBalance, Receipt } from '@material-ui/icons';
import { styles } from './userSearch.elements';
import { VoidSvg } from '../../Assets'

const UserSearch = () => {
    const [user, setUser] = useState(null);
    const [ammount, setAmmount] = useState('');
    const [reference, setReference] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [toggleDialog, setToggleDialog] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const { id } = useParams();
    const classes = styles();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await UserService.getUser(id);
                console.log(data);
                setUser(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }
        fetchUser()
    }, [])


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
            setAmmount('');
            setReference('')
            setIsLoading(false);
            setDialogText('Usuário pontuado com sucesso.');
            setToggleDialog(true);
        } catch (error) {
            console.log(error)
            setIsLoading(false);
            setDialogText('Não foi possivel pontuar o usuário.');
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
                    {user ? (
                        <Container maxWidth="lg">
                            <Paper variant="outlined">
                                <div className={classes.inputs}>
                                    <TextField fullWidth variant="outlined" label="Valor da compra" margin="normal" name="valor" value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
                                    <TextField fullWidth variant="outlined" label="Referencia" margin="normal" name="valor" value={reference} onChange={(e) => setReference(e.target.value)}/>
                                </div>
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
                                        <ListItemText>{reference || "- - -"}</ListItemText>
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
                        </Container>
                    ) : (
                        <div className={classes.notFound}>
                            <Container maxWidth="lg">
                                <img src={VoidSvg} width="250"/>
                                <Typography variant="h6" className={classes.notFoundMsg}>
                                    O usuário não foi encontrado
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

export default UserSearch;
