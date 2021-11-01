import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
export const styles = makeStyles(theme => ({
    button: {
        color: theme.palette.common.white,
        backgroundColor: green[400],
        '&:hover': {
            backgroundColor: green[500],
        },
    },
    paper: {
        padding: "10px"
    },
    gridContainer: {
        marginBottom: "80px"
    },
    header: {
        marginBottom: "20px"
    }
}))