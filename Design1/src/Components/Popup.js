import { Dialog, DialogContent, DialogTitle , Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {Controls} from './Controls/Controls'


const useStyles = makeStyles(theme =>({
  dialogWrapper:{
    padding:theme.spacing(2),
    position:'absolute',
    top:theme.spacing(5)
  },
  dialogTitle:{
    paddingRight:'0px'
  }
}))
const Popup = (props) => {
  const classes = useStyles()
  const {title,children,openPopup , setOpenPopup } = props
   return (
    <Dialog open={openPopup} maxWidth='md' className={classes.dialogWrapper} >
      <DialogTitle className={classes.dialogTitle} >
        <div style={{display:'flex'}} >
          <Typography  variant='h5' component='div' style={{flexGrow:'1'}} >
            {title}
          </Typography>
          <Controls.Buttons
          color='secondary'
          text='X'
          onClick={() =>setOpenPopup(false)}
          >

          </Controls.Buttons>
        </div>
      </DialogTitle>
      <DialogContent dividers >
        {children}
      </DialogContent>
    </Dialog>
    
    
  )
}

export default Popup
