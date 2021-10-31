import React, { useState } from 'react'
import { 
    Grid,
    Typography,
    Button,
    TextField,
    Container,
    Avatar,
    FormControlLabel,
    Checkbox,
    Link,
    Box
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Backdrop, Snackbar } from '../../Components';
import { AuthService } from '../../Services'
import { styles } from './login.elements';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [toggleFailureSnack, setToggleFailureSnack] = useState(false)
    const [infoMsg, setInfoMsg] = useState('')
    const classes = styles();

    const submitLogin = async () => {
        setIsLoading(true);
        const data = {
            username: email,
            password: password,
            scope: "*",
            client_id: 1,
            grant_type: "password",
            client_secret: "IQLstf5Jhow51iiBGDxp9BPxlfMDwLvnxrsTF6n6", 
        }
        try {
            const authRes = await AuthService.authenticate(data);
            const employeeRes = await AuthService.getEmployee(authRes.data)
            if(employeeRes.data.employeeInfo || employeeRes.data.stablishment){
                await AuthService.setLoggedUser(employeeRes.data, authRes.data);
                setIsLoading(false);
                window.location.reload()
            }else {
                setIsLoading(false);
                setInfoMsg('Acesso não autorizado');
                setToggleFailureSnack(true);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            setInfoMsg("Ocorreu um erro tente novamente.")
            setToggleFailureSnack(true)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
        <Backdrop open={isLoading}/>
        <Snackbar toggleSnack={toggleFailureSnack} time={4500} onClose={() => setToggleFailureSnack(false)} color="error">
            {infoMsg}
        </Snackbar>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login de Funcionários
                    </Typography>
                    <div className={classes.form} >
                        <TextField variant="outlined" margin="normal" required fullWidth label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar-me"/>
                        <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={() => submitLogin()}>
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Esqueceu a senha?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Ainda não possui uma conta?
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            <Box mt={8}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://parceiro.fidelija.com.br/">
                        Fidelijá
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </Container>
    )
}

export default Login
