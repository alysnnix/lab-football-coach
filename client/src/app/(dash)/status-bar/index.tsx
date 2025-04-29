import React from "react"
import { data } from "./data"

type ItemProps = {
  title: string
  icon: React.ReactNode
  value: string | number
}
const Item = ({ title, icon, value }: ItemProps) => {
  return (
    <div className="flex gap-3 items-center text-white cursor-default">
      {icon}
      <div className="flex gap-2 flex-col justify-between">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-md">{value}</span>
      </div>
    </div>
  )
}

export const StatusBar = () => {
  return (
    <div className="bg-ui-primary flex flex-col sm:flex-row gap-[49px] p-6 px-dash-desktop">
      {data.map((item) => (
        <Item key={item.id} title={item.title} icon={<item.Icon />} value={item.value} />
      ))}
    </div>
  )
}