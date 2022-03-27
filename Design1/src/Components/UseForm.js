import { makeStyles } from '@material-ui/core'
import React , { useState } from 'react'

export const  UseForm = (initialStateValues , validateOnChange = false , validate) => {
  
  const [values,setValues] = useState(initialStateValues)
  const [errors,setErrors] = useState({})
  const handleInputChange = (e) =>{
    const {name,value} = e.target
    setValues({
      ...values,
      [name]:value
    })
    if(validateOnChange)
    validate({[name]:value})
  }
  const resetForm = ()=>{
    setValues(initialStateValues)
    setErrors({})
  }
  return {
    values,
    setValues, 
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}

const useStyles = makeStyles(theme =>({
  root:{
    '& .MuiFormControl-root':{
      width:'80%',
      margin:theme.spacing(1)
    }
  }
}))
// export default UseForm


export  function Form(props) {
  const {children , ...other} = props
  const classes = useStyles()
  return (
    <form className={classes.root} autoComplete='off' {...other} >
      {props.children}
    </form>
  )
}












