import { Paper, Stack, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

const AddEditTask = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
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
                  // value={formData.projectName}
                  // onChange={handleInputChange}
                  variant='outlined'
                  label='Project Name'
                />
                <TextField
                  name='fieldManager'
                  // value={formData.fieldManager}
                  // onChange={handleInputChange}
                  variant='outlined'
                  label='Saha Sorumlusu'
                />
                <TextField
                  multiline
                  maxRows={2}
                  minRows={2}
                  name='description'
                  // value={formData.description}
                  // onChange={handleInputChange}
                  variant='outlined'
                  label='Project Details'
                />
                <TextField
                  className='p-3 border-2'
                  name='starTime'
                  // value={formData.starTime}
                  // onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='DD-MM-YYYY'
                />
                <TextField
                  className='p-3 border-2'
                  name='endTime'
                  // value={formData.endTime}
                  // onChange={handleInputChange}
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
export default AddEditTask
