import {  Grid} from '@material-ui/core'
// import { makeStyles } from '@material-ui/styles'
import { UseForm , Form , resetForm } from '../../Components/UseForm'
import React, { useEffect, useState } from 'react'
import { Controls } from '../../Components/Controls/Controls'
import * as EmployeeService  from '../../Services/EmployeeService'



const genderItems = [
  {id:'male',title:'Male'},
  {id:'female',title:'Female'},
  {id:'other',title:'Other'},
]

const initialStateValues = {
  id:0, 
  fullName:'',
  email:'',
  city:'',
  gender:'male',
  mobile:'',
  departmentId:'',
  hiredDate:new Date(),
  isPermanant:false

}

const EmployeeForm = (props) => {
  const {addOrEdit , recordsForEdit} = props

  const validate = (fieldValues = values)=>{
    let temp = {...errors}
    if('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'This field is required'
    if('city' in fieldValues)
      temp.city = fieldValues.city ? '' : 'This field is required'
    if('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? '' : 'Your email address is not valid'
    if('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? '':'A minimum of ten 10 numbers is required'
    if('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length !== 0  ? '' : 'This field is required'
    setErrors({
      ...temp
    })
    if(fieldValues === values)
      return Object.values(temp).every(x => x === '')
  }
  
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = UseForm(initialStateValues , true , validate)
  useEffect(()=>{

  },[])
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(validate()){
      addOrEdit(values , resetForm)
      
    }
    
      // window.alert('testing')
  }
  useEffect(()=>{
    if(recordsForEdit !== null){
      setValues({
        ...recordsForEdit
      })
    }
  },[recordsForEdit, setValues])
  return (
    <Form onSubmit={handleSubmit}  >
      <Grid container >
        <Grid item xs={6}>
          <Controls.Input
          name='fullName'
          label='Full Name'
          value={values.fullName}
          onChange={handleInputChange}
          error={errors.fullName}
           />
          <Controls.Input
          name='email'
          label='Email'
          value={values.email}
          onChange={handleInputChange}
          error = {errors.email}
           />
           <Controls.Input
            name='mobile'
            label='Mobile'
            value={values.mobile}
            onChange={handleInputChange}
            error = {errors.mobile}
            />
            <Controls.Input
              name='city'
              label='City'
              value={values.city}
              onChange={handleInputChange}
              error = {errors.city}
              />
        </Grid>
        <Grid item xs={6}>
        <Controls.RadioGroup row
          name='gender'
          value={values.gender}
          onChange={handleInputChange}
          label="Gender"
          items={genderItems}
          />
          <Controls.Select
          name="departmentId"
          label='Department'
          value={values.departmentId}
          onChange={handleInputChange}
          options={EmployeeService.getDepartmentCollection()}
          error={errors.departmentId}
           />
           <Controls.DatePicker
          name='hiredate'
          label='Hire Date'
          value={values.hiredDate}
          onChange={handleInputChange}
          />
                   
          <Controls.CheckBox
          name='isPermanent'
          label='permanent Employee'
          value={values.isPermanant}
          onChange={handleInputChange}
          />
        <div className="">
          <Controls.Buttons 
          type='submit'
             text='submit' />
          <Controls.Buttons 
            // type='submit'
            color='default'
            onClick={resetForm}
              text='reset' />
          </div>  
          
        </Grid>
      </Grid>
      </Form>
    
  )
}

export default EmployeeForm
