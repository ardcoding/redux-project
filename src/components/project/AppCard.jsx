// import React, { useEffect } from "react"
import CustomizedProgressBars from "../ProgressBar"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { useState } from "react"
import { Link } from "react-router-dom"
import { deleteTask } from "../../redux/features/taskAction"
import AddEditTask from "./AddEditTask"
import { useDispatch } from "react-redux"
export default function AppCard({ title, details, saha, id, item }) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)
  const open = Boolean(anchorEl)

  const handleClickOpen = () => {
    setOpenEdit(true)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className='flex items-center p-5 flex-wrap'>
      {openEdit ? <AddEditTask open={openEdit} setOpen={setOpenEdit} /> : ""}
      <div className='relative bottom-28 left-72 cursor-pointer'>
        <Button
          id='basic-button'
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClickOpen}>Edit</MenuItem>

          <MenuItem onClick={() => handleDelete(id)}>Sil</MenuItem>
        </Menu>
      </div>
      <Link to={`/project/${id}`}>
        <div className='flex items-center flex-col w-[300px] h-60 bg-slate-200 mx-5 border rounded-xl mb-4 '>
          <div className='flex items-center gap-5 p-2'>
            <img
              src='https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ'
              alt=''
              width={50}
              height={50}
            />
            <div>
              <h5>Korsan Restaurant</h5>
              <p className='text-xs'>Saha Sorumlusu:süleyman özdemir</p>
            </div>
          </div>

          <div className='w-auto h-20 p-1'>
            <p className='p-3'>iç dizayn tasarım imalat ve uygulama</p>
          </div>

          <div className='w-[250px] flex items-center justify-between flex-wrap'>
            <span className='text-xs'>İlerleme:</span>
            <span className='text-xs'>50%</span>
            <CustomizedProgressBars />
          </div>
          <div className=' w-72 flex items-center justify-between p-4'>
            <div className='p-1 bg-orange-300 rounded-full'>15 hafta kaldı</div>
            <div className='flex items-center'>
              <Tooltip title='Süleyman Özdemir' arrow>
                <img
                  className='cursor-pointer'
                  href='#'
                  src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
                  alt=''
                  width={30}
                  height={30}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
