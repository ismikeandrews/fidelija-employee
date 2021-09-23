import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
export const styles = makeStyles(theme => ({
    button: {
        color: theme.palette.common.white,
        backgroundColor: red[400],
        '&:hover': {
            backgroundColor: red[500],
        },
    },
    paper: {
        padding: "10px"
    },
    gridContainer: {
        marginBottom: "80px"
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    header: {
        marginBottom: "20px"
    }
}))