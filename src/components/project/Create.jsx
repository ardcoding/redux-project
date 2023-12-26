import { Avatar, MenuList, Paper, Stack, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../../redux/features/taskAction"
import InputFileUpload from "./uploadFile"

export default function Create({ id }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const openMenu = Boolean(anchorEl)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    projectName: "",
    avatar: "",
    description: "",
    fieldManager: "",
    starTime: new Date(),
    endTime: new Date(),
  })

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleCloseClick = () => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTask(formData))
    console.log(formData)
    setFormData({
      projectName: "",
      avatar: "",
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

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
  }

  return (
    <div>
      <Paper>
        <Button variant='contained' onClick={handleClickOpen}>
          Ekle
        </Button>
        <Dialog open={open} onClose={handleCloseClick} fullWidth maxWidth='sm'>
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

                <button
                  className='rounded-full w-max self-center'
                  id='basic-button'
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup='true'
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar
                    htmlFor='file-upload'
                    src={formData.avatar}
                    alt=''
                    sx={{
                      width: 120,
                      height: 120,
                    }}
                  />
                </button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    "&.MuiMenu-paper": {
                      borderRadius: "100px",
                      backgroundColor: "red",
                    },
                  }}
                >
                  <MenuList>
                    <MenuItem htmlFor='file-upload' onClick={handleClose}>
                      <InputFileUpload
                        name='avatar'
                        id='file-upload'
                        onChange={handleFileChange}
                      />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Fotoğraf Sil</MenuItem>
                  </MenuList>
                </Menu>

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
