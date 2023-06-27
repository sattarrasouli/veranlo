"use client"
import AddTaskForm from '@/components/AddingNewTask/AddingTaskForm'
import List from '@/components/ListOfTasks/List'
import Modal from '@/components/Modal/Modal'
import { API } from '@/services/API'
import { TaskListRequest } from '@/store/action'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { store } from '@/store/store'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'

export default function Home() {

  const [isComplete, setIsComplete] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])
  const [openModal, setOpenModal] = useState(false)

  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <List setOpenModal={setOpenModal} />
        <Modal openModal={openModal} setOpenModal={setOpenModal} >
          <AddTaskForm setOpenModal={setOpenModal} openModal={openModal} />
        </Modal>
      </main>
    </Provider>

  )
}
