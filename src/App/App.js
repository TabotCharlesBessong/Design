import React from 'react';
import './App.css'
import SideMenu from '../Components/SideMenu';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Header from '../Components/Header';
import { createTheme, CssBaseline } from '@material-ui/core';
import PageHeader from '../Components/PageHeader'
import PeopelOutlinedTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'
import Employees from '../Pages/Employees/Employees';
// import { CssBaseline , Grid } from '@material-ui/core';

const theme = createTheme({
    palette:{
        primary:{
            main:'#333996',
            light:'#3c44b136'
        },
        secondary:{
            main:'#f83425',
            light:'#f8324526'
        },
        background:{
           default:'#f4f4fd'
        },
        overrides:{
            MuiAppBar:{
                root:{
                    transform:'translateZ(0)'
                }
            }
        },
        props:{
            MuiIconButton:{
                disableRipple:'true'
            }
        }
    }, 
    shape:{
        borderRadius:'12px',
        
    }
})
const useStyles = makeStyles({
    appMain : {
        paddingLeft:'30%',
        width:'100%',
        // boxSizing:'border-box'
    }
})

function App() {
    const classes = useStyles()
    return (
        <>
        <ThemeProvider theme={theme} >
        <SideMenu />
        <div className={classes.appMain}>
            {/* <h2>Hello love</h2> */}
            <Header />
            
            <Employees /> 
        </div>
        <CssBaseline />
        </ThemeProvider>
        </>
    )
}

export default App
