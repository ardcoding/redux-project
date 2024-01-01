import { Avatar, MenuList, Paper, Stack, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTask } from "../../redux/features/taskAction"

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
})
export default function Create({ id }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const openMenu = Boolean(anchorEl)
  const [open, setOpen] = useState(false)
  const [avatar, setAvatar] = useState("")
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
    setFormData({
      projectName: "",
      avatar: avatar,
      description: "",
      fieldManager: "",
      starTime: new Date(),
      endTime: new Date(),
    })
    setAvatar(null)
  }
  console.log(formData)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setAvatar(file ? URL.createObjectURL(file) : null)
    // const reader = new FileReader()
    // reader.onload = () => {
    //   setAvatar(reader.result)
    // }
    // if (file) {
    //   reader.readAsDataURL(file)
    // }
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
                <Button
                  id='basic-button'
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar
                    src={avatar}
                    sx={{
                      width: 120,
                      height: 120,
                    }}
                  />
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuList>
                    <MenuItem onClick={handleClose}>
                      <label htmlFor='file-upload'>Upload file</label>{" "}
                    </MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </MenuList>
                </Menu>
                <VisuallyHiddenInput
                  type='file'
                  name='avatar'
                  onChange={handleFileUpload}
                  id='file-upload'
                />
                <Button
                  type='submit'
                  variant='contained'
                  onClick={handleCloseClick}
                >
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
