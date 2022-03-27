import { TextField } from '@material-ui/core'
// import { ErrorSharp } from '@material-ui/icons'
import React from 'react'

const Input = (props) => {
  const {name,value,label, error = null, onChange } = props
  return (
    <TextField
      variant='outlined'
      label={label}
      value = {value} 
      onChange = {onChange}
      name={name}
      // {...other}
      {...(error && {error:true,helperText:error})}
 />
  )
}

export default Input
