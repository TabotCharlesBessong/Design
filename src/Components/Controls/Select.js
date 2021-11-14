import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText,} from '@material-ui/core';

const Select = (props) => {
  const {name,label,value,onChange,error=null ,  options} = props
  return (
    <FormControl
    {...(error && {error:true})}
    variant='outlined'
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      >
        <MenuItem value=''>None</MenuItem>
        {
          options.map(
            item =>(
            <MenuItem key={item.id} value={item.id}> {item.title} </MenuItem>
          ))
        }
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
    
    
  )
}

export default Select
