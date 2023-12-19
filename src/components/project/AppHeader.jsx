import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { useState } from "react"

import Create from "./Create"

export default function AppHeader() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='p-5 flex items-center justify-between'>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label='Tabs where selection follows focus'
        selectionFollowsFocus
      >
        <Tab label='Tümü' />
        <Tab label='Bekleyen' />
        <Tab label='tamamlanmış' />
      </Tabs>
      <Create />
    </div>
  )
}
