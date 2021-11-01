import React from 'react'
import { 
    Dialog as MuiDialog,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

const Dialog = (props) => {
    return (
        <MuiDialog open={props.open} onClose={props.close}>
        <DialogTitle>Aleta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Continuar
          </Button>
        </DialogActions>
      </MuiDialog>
    )
}

export default Dialog
