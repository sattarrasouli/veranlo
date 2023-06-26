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
 


  const handleStatus = (item: any) => {
    API.put(`/tasks/${item.id}`, { id: item.id, title: item.title, description: item.description, status: item.status === "done" ? 'notDone' : "done" })
      .then((result: any) => console.log('result', result))
  }


  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between">

        <List />
        <Modal openModal={openModal} setOpenModal={setOpenModal} >
          <AddTaskForm />
        </Modal>
      </main>
    </Provider>

  )
}
