import React from "react"
import AppHeader from "../components/project/AppHeader"
import AppCard from "../components/project/AppCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTask } from "../redux/features/taskAction"

export default function Project() {
  const tasks = useSelector((state) => state.task)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTask())
  }, [])
  return (
    <div>
      <AppHeader />
      <div>
        {tasks && tasks.map((item, i) => <AppCard key={i} {...item} />)}
      </div>
    </div>
  )
}
