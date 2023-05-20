'use client'
import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must used within a provider')
  return context
}

export const TaskProvider = ({ children }) => {
  const tasks = [
    {
      id: 1,
      title: 'my first task',
      description: 'some task',
    },
    {
      id: 2,
      title: 'my second task',
      description: 'some second task',
    },
    {
      id: 3,
      title: 'my thrid task',
      description: 'some thrid task',
    },
  ]

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  )
}
