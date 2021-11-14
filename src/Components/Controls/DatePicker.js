import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'

const DatePicker = (props) => {
  const convertToDefEventPara = (name,value)=>({
    target:{
      name,value
      
    }
  }) 
  const {name,label,value,onChange} = props
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <KeyboardDatePicker disableToolbar variant='inline' inputVariant='outlined' label={label}
      format='MM/dd/yyyy'
      name={name}
      value={value}
      onChange={e => onChange(convertToDefEventPara(name.date))} />
    </MuiPickersUtilsProvider>
    
    
  )
}

export default DatePicker
