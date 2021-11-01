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
    gridContainer: {
        marginBottom: "30px"
    },
    paper: {
        padding: "10px"
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
    },
    header: {
        marginBottom: "20px"
    }
}))