import { Paper, Stack, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { updateTask } from "../../redux/features/taskAction"

const AddEditTask = ({ open, setOpen, task }) => {
  const [updateData, setUpdateData] = useState({
    projectName: task.projectName,
    description: task.description,
    fieldManager: task.fieldManager,
    startTime: task.startTime,
    endTime: task.endTime,
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTask())
  }, [dispatch])

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value })
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(updateData)
    dispatch(updateTask(task.id, { ...updateData, id: task.id }))
  }
  return (
    <div>
      <Paper>
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>
          <DialogTitle>
            <span>Tasks Ekle</span>
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} direction='column'>
                <TextField
                  name='projectName'
                  value={updateData.projectName}
                  onChange={newData}
                  variant='outlined'
                  label='Project Name'
                />
                <TextField
                  name='fieldManager'
                  value={updateData.fieldManager}
                  onChange={newData}
                  variant='outlined'
                  label='Saha Sorumlusu'
                />
                <TextField
                  multiline
                  maxRows={2}
                  minRows={2}
                  name='description'
                  value={updateData.description}
                  onChange={newData}
                  variant='outlined'
                  label='Project Details'
                />
                <TextField
                  className='p-3 border-2'
                  name='starTime'
                  value={updateData.startTime}
                  onChange={newData}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='DD-MM-YYYY'
                />
                <TextField
                  className='p-3 border-2'
                  name='endTime'
                  value={updateData.endTime}
                  onChange={newData}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='DD-MM-YYYY'
                />

                <Button type='submit' variant='contained'>
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
export default AddEditTask
