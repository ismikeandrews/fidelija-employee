import { makeStyles } from "@material-ui/core";
import { green } from '@material-ui/core/colors';

export const styles = makeStyles(theme => ({
    button: {
        color: theme.palette.common.white,
        backgroundColor: green[400],
        '&:hover': {
            backgroundColor: green[500],
        },
    },
    inputs: {
        padding: "15px"
    },
    notFound:{
        textAlign: 'center',
        margin: '70px'
    },
    notFoundMsg: {
        marginTop: '20px',
        marginBottom: '20px'
    },
    paperPadding:{
        padding: 30
    }
}))