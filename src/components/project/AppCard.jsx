// import React, { useEffect } from "react"
import CustomizedProgressBars from "../../utils/ProgressBar"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { useState } from "react"
import { Link } from "react-router-dom"

// import { useDispatch, useSelector } from "react-redux"
const options = ["Edit", "Sil"]
const ITEM_HEIGHT = 48
export default function AppCard({ title, details, saha }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  // const dispatch = useDispatch()
  // const tasks = useSelector((state) => state.tasks)
  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])
  // console.log(tasks)
  return (
    <div className='flex items-center p-5 flex-wrap'>
      <Link to='/'>
        <div className='flex items-center flex-col w-[300px] h-60 bg-slate-200 mx-5 border rounded-xl mb-4 '>
          <div className=' flex items-center justify-center relative top-2 left-32 border rounded-full w-6 h-6 cursor-pointer'>
            <IconButton
              aria-label='more'
              id='long-button'
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='long-menu'
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "10ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div className='flex items-center gap-5 -m-1'>
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
