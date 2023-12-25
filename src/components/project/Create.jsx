import { Paper, Stack, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../../redux/features/taskAction"

export default function Create({ id }) {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    fieldManager: "",
    starTime: new Date(),
    endTime: new Date(),
  })

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
      projectName: "",
      description: "",
      fieldManager: "",
      starTime: new Date(),
      endTime: new Date(),
    })
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
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
            <form method='post' onSubmit={handleSubmit}>
              <Stack spacing={3} direction='column'>
                <TextField
                  name='projectName'
                  value={id || formData.projectName}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Project Name'
                />
                <TextField
                  name='fieldManager'
                  value={formData.fieldManager}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Saha Sorumlusu'
                />
                <TextField
                  multiline
                  maxRows={2}
                  minRows={2}
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Project Details'
                />
                <TextField
                  className='p-3 border-2'
                  name='starTime'
                  label='Start Date'
                  value={formData.starTime}
                  onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='YYYY-MM-DDTHH:mm'
                />
                <TextField
                  className='p-3 border-2'
                  name='endTime'
                  label='End Date'
                  value={formData.endTime}
                  onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='YYYY-MM-DDTHH:mm'
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
