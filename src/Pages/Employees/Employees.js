import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../Components/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'
import { InputAdornment, Paper, TableBody, TableCell, TableRow , Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import UseTables from '../../Components/UseTables'
import * as EmployeeService from '../../Services/EmployeeService'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import Popup from '../../Components/Popup'
import {Controls} from '../../Components/Controls/Controls'
import  EditOutlinedIcon  from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'

const useStyles  = makeStyles(theme =>({
  pageContent:{
    margin:theme.spacing(5),
    padding:theme.spacing(3)
  },
  searchInput:{
    width:'75%'
  },
  newButton:{
    position:'absolute',
    right:'10px'
  }
}))

const headCells = [
  {id:'fullName',label:'Employee Name'},
  {id:'email',label:'Email address'},
  {id:'number',label:'Phone Number'},
  {id:'department',label:'Department'},
  {id:'action', label:'Actions', disableSorting:true}
]

const Employees = () => {
  const [records,setRecords] = useState(EmployeeService.getAllEmployees())
  const [openPopup,setOpenPopup]  = useState(false)
  const [filterFn, setFilterFn] = useState({ fn: items => { 
    return items; } })
    const [recordsForEdit, setReacordsForEdit] = useState(null)
  const classes = useStyles()
  const {
    tblContainer,
    tblHead,
    tblPagination,
    recordsAfterPagingAndSorting
  } = UseTables(records,headCells , filterFn)
  const handleSearch = (e)=>{
    let target = e.target
    setFilterFn({
      fn:items => {
        if(target.value === ''){
          return items
        }else{
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
        }
      }
    })
  }
  const addOrEdit = (employees,resetForm)=>{
    EmployeeService.insertEmployee(employees)
      resetForm()
      setOpenPopup(false)
      setRecords(EmployeeService.getAllEmployees())
  }
  const openInPopup = (item)=>{
    setReacordsForEdit(item)
    setOpenPopup(true)
  }
  return (
    <div>
      <PageHeader 
        title = 'Employee form '
        subtitle ='Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Aliquid, incidunt?'
        icon = {<PeopleOutlineTwoToneIcon fontSize='large' /
        >}
        />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
          <Controls.Input 
          label="Search Employees"
          startIcon = {<SearchIcon />}
            className={classes.searchInput}
            InputProps={{
                startAdornment: (<InputAdornment 
            position="start">
                    {/* <Search /> */}
                </InputAdornment>)
            }}
            onChange={handleSearch}
                      label="Search Employees"
            className={classes.searchInput}
            InputProps={{
                startAdornment: (<InputAdornment 
            position="start">
                    {/* <Search /> */}
                </InputAdornment>)
            }}
            onChange={handleSearch}
          />
          <Controls.Buttons
            text='Add New'
            variant = 'outlined'
            className={classes.newButton}
            startIcon = {<AddIcon />}
            onClick = {()=>setOpenPopup(!openPopup)}
            />
        </Toolbar>
 
        <tblContainer>
          <tblHead >
          </tblHead>
          <TableBody>
             {recordsAfterPagingAndSorting().map(item => (
               <TableRow key={item.id}>
                 <TableCell>
                   {item.fullName}
                 </TableCell>
                 <TableCell>
                   {item.email}
                 </TableCell> 
                 <TableCell>
                   {item.mobile}
                 </TableCell>
                 <TableCell>
                  {item.department}
                </TableCell>
                <TableCell>
                  <Controls.ActionButton color="primary"
                  onClick = {()=> {openInPopup(item)}}
                  >
                    <EditOutlinedIcon fontSize='small' />
                  </Controls.ActionButton>
                  <Controls.ActionButton color='secondary'>
                    <CloseIcon fontSize='small' />
                  </Controls.ActionButton>
                </TableCell>
               </TableRow>
             ))}
          </TableBody>
        </tblContainer>
        <tblPagination />
      </Paper>
      <Popup
      title='Employee form'
      openPopup = {openPopup}
      setOpenPopup={setOpenPopup}
      >
      <EmployeeForm 
      recordsForEdit={recordsForEdit}
      addOrEdit={addOrEdit}
      />
      </Popup>
      
    </div>
  )
}

export default Employees
