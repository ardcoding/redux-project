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

export default function AppCard({
  projectName,
  description,
  fieldManager,
  id,
  item,
  task,
  starTime,
  endTime,
}) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)
  const open = Boolean(anchorEl)

  const handleClickOpen = () => {
    setOpenEdit(true)
  }
  const handleDate = ({ starTime, endTime }) => {
    const diffMilliseconds = Date.parse(endTime) - Date.parse(starTime)
    const differenceInDays = Math.floor(
      diffMilliseconds / (1000 * 60 * 60 * 24)
    )
    const differenceInWeeks = Math.floor(differenceInDays / 7)
    if (differenceInDays < 7) {
      return `${differenceInDays} gün kaldı`
    } else {
      return `${differenceInWeeks} hafta kaldı`
    }
  }
  console.log(task)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = (id) => {
    dispatch(deleteTask(task.id))
    window.location.reload()
  }

  return (
    <div className='flex items-center flex-wrap'>
      {openEdit ? (
        <AddEditTask task={task} open={openEdit} setOpen={setOpenEdit} />
      ) : (
        ""
      )}
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

          <MenuItem onClick={() => handleDelete(task.id)}>Sil</MenuItem>
        </Menu>
      </div>
      <Link to={`/project/${id}`}>
        <div className='flex items-center flex-col w-[300px] h-60 bg-slate-200 border rounded-xl mb-4 '>
          <div className='flex items-center gap-5 p-2'>
            <img
              src='https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ'
              alt=''
              width={50}
              height={50}
            />
            <div>
              <h5>{projectName}</h5>
              <p className='text-xs'>Saha Sorumlusu:{fieldManager}</p>
            </div>
          </div>

          <div className='w-auto h-20 p-1'>
            <p className='p-3'>{description}</p>
          </div>

          <div className='w-[250px] flex items-center justify-between flex-wrap'>
            <span className='text-xs'>İlerleme:</span>
            <span className='text-xs'>50%</span>
            <CustomizedProgressBars />
          </div>
          <div className=' w-72 flex items-center justify-between p-4'>
            <div className='p-1 bg-orange-300 rounded-full'>
              {starTime && endTime && handleDate(task.starTime, task.endTime)}
            </div>
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
