import { makeStyles } from "@material-ui/core";
import { green } from '@material-ui/core/colors';

export const Styles = makeStyles(theme => ({
    button: {
        color: theme.palette.common.white,
        backgroundColor: green[400],
        '&:hover': {
            backgroundColor: green[500],
        },
    },
    
    imageContainer: {
        display: 'flex',
        padding: '15px',
    },

    productPicture: {
        margin: 'auto',
        border: '2px solid #bdbdbd',
        width: theme.spacing(25),
        height: theme.spacing(25),
    }
}))