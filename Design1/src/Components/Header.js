import { AppBar, Grid, IconButton, Toolbar , Badge, InputBase } from '@material-ui/core'
// import { Bathtub, NotificationsNoneIcon } from '@material-ui/icons'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import React from 'react'
import  PowerSettingsNewIcon  from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme =>({

  root:{
    backgroundColor:'#fff',
    
  },
  searchInput:{
    opacity:'0.6',
    padding:'0.5rem 0.25rem',
    fontSize:'0.8rem',
    textTransform:'capitalize',
    color:'#203040',
    borderRadius:'0.75rem',
    cursor:'pointer',
    '&:hover':{
      backgroundColor:'#222',
      marginBottom:'0.3rem',
      color:'#fff'
    },
    '& MuiSvgIcon-root':{
      marginRight:'0.5rem'
    }
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position='static' className={classes.root} >
        <Toolbar >
          <Grid container alignItems='center' >
            <Grid item    >
              <InputBase className={classes.searchInput} startAdornment={<SearchIcon fontSize='small'   />} placeholder='make yoursearch' />
            </Grid>
            <Grid item sm={true}>
            </Grid>
            <Grid style={{border:'2px solid #000'}} item   >
              <IconButton  >
                <Badge badgeContent={4} color='secondary' >
                  <NotificationsNoneIcon fontSize='small' />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color='primary' >
                  <ChatBubbleOutlineIcon fontSize='small' />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge   >
                  <PowerSettingsNewIcon fontSize='small' />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
