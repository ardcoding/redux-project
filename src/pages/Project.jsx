import AppHeader from "../components/project/AppHeader"
import AppCard from "../components/project/AppCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTasks } from "../redux/features/taskAction"

export default function Project() {
  const tasks = useSelector((state) => state.task.tasks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])
  return (
    <div>
      <AppHeader />
      <div className='flex items-center flex-wrap -ml-4'>
        {tasks &&
          tasks.map((item, i) => <AppCard key={i} task={item} {...item} />)}
      </div>
    </div>
  )
}
