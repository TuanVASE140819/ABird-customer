import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { DateRangePicker } from '@material-ui/pickers'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

export default function ProductList() {
  const classes = useStyles()
  const [startDate, setStartDate] = React.useState<Date | null>(new Date())
  const [endDate, setEndDate] = React.useState<Date | null>(new Date())

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id='standard-basic' label='Từ khóa' />
      <DateRangePicker
        startText='Ngày giao'
        endText='Ngày nhận'
        value={[startDate, endDate]}
        onChange={([start, end]) => {
          setStartDate(start)
          setEndDate(end)
        }}
      />
    </form>
  )
}
