import { GoProjectSymlink } from "react-icons/go"
import { Link } from "react-router-dom"

const dataSide = [
  {
    icon: <GoProjectSymlink />,
    name: "Yönetim",
    link: "#",
  },
  {
    icon: <GoProjectSymlink />,
    name: "Projeler",
    link: "/project",
  },
  {
    icon: <GoProjectSymlink />,
    name: "Takvim",
    link: "#",
  },
  {
    icon: <GoProjectSymlink />,
    name: "Satın Alma",
    link: "#",
  },
  {
    icon: <GoProjectSymlink />,
    name: "Envanter",
    link: "#",
  },
  {
    icon: <GoProjectSymlink />,
    name: "Muhasebe",
    link: "#",
  },
  {
    icon: <GoProjectSymlink />,
    name: "Kurumsal Hafıza",
    link: "#",
  },
]

export default function Sidebar() {
  return (
    <div className='w-56 min-h-screen border-r-2 border-slate-100 justify-between'>
      <div className='flex flex-col'>
        <Link
          href='#'
          className='flex space-x-2 items-center justify-center pt-3'
        >
          <span className='font-semibold text-xl'>Atoly-e</span>
        </Link>
      </div>
      <div className='flex flex-col pt-5'>
        {dataSide.map((data, i) => (
          <div key={i}>
            <Link
              to={data.link}
              className='flex items-center space-x-4 p-3 hover:border-l-2 border-blue-600 cursor-pointer'
            >
              <span>{data.icon}</span>
              <span>{data.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
