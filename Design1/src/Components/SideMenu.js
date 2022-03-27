import { makeStyles  } from '@material-ui/core'
import React from 'react'

// this dunction is same as a styles file 
const useStyles = makeStyles(
  {   
    // class
      sideMenu : {
          display : 'flex',
          flexDirection:'column',
          position:'absolute',
          left:'0px',
          width:'30%',
          height:'100%',
          backgroundColor:'#2b3053',
          textTransform:'uppercase',
          color:'#fff'
      }
      }
)
const SideMenu = () => {
  const classes = useStyles()
  console.log(classes);
  return (
    <div className={classes.sideMenu} >
      <h2>hey dude</h2>
    </div>
  )
}

export default SideMenu
