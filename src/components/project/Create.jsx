import { Paper, Stack, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../../redux/features/taskAction"

export default function Create() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    saha: "",
    startDate: new Date(),
    endDate: new Date(),
  })

  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTask(formData))
    console.log(formData)
    setFormData({
      title: "",
      details: "",
      saha: "",
      startDate: new Date(),
      endDate: new Date(),
    })
    // const daysDiff = formData.endDate.getTime() - formData.startDate.getTime()
    // const days = Math.ceil(daysDiff / (1000 * 60 * 60 * 24))
    // console.log(days)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div>
      <Paper>
        <Button variant='contained' onClick={handleClickOpen}>
          Ekle
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
          <DialogTitle>
            <span>Tasks Ekle</span>
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} direction='column'>
                <TextField
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Project Name'
                />
                <TextField
                  name='saha'
                  value={formData.saha}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Saha Sorumlusu'
                />
                <TextField
                  multiline
                  maxRows={2}
                  minRows={2}
                  name='details'
                  value={formData.details}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Project Details'
                />
                <TextField
                  className='p-3 border-2'
                  name='startDate'
                  label='Start Date'
                  value={formData.startDate}
                  onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='DD-MM-YYYY'
                />
                <TextField
                  className='p-3 border-2'
                  name='endDate'
                  label='End Date'
                  value={formData.endDate}
                  onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='DD-MM-YYYY'
                />

                <Button type='submit' variant='contained' onClick={handleClose}>
                  Ekle
                </Button>
              </Stack>
            </form>
          </DialogContent>
        </Dialog>
      </Paper>
    </div>
  )
}
