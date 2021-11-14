import { Card, Paper , Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(theme =>({
  root:{
    background:'#fdfdff',
  },
  PageHeader:{
    padding:theme.spacing(4),
    display:'flex',
    marginBottom:theme.spacing(2),
    
  },
  pageIcon:{
    display:'insetBlock',
    padding:theme.spacing(2),
    color:'#3c44b3'
  },
  pageTitle:{
    paddingLeft:theme.spacing(4),
    '& .MuiTypography-subtitle-2':{
      opacity:'0.6'
    }
  }
}))

const PageHeader = (content) => {
  const classes = useStyles()
  const {icon, title , subtitle} = content
  return (
    <Paper className={classes.root} elevation={0} square >
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon} >
          {icon}
        </Card>
        <div className={classes.pageTitle}>
          <Typography variant='h5' component='div' >
            {title}
          </Typography>
          <Typography variant='subtitle' component='div' >
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default PageHeader
