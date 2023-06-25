"use client"
import { API } from '@/services/API'
import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react'
import PlusIcon from '../assets/img/plus.png'
import Image from 'next/image'
import Modal from '@/components/modal'
import AddTaskForm from '@/components/AddTaskForm'

export default function Home() {

  const [isComplete, setIsComplete] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])
  const [openModal, setOpenModal] = useState(true)

  console.log('tasks', tasks)
  useEffect(() => {
    API.get("/tasks").then((data: any) => setTasks(data.data))
    console.log("e")
  }, [])




  const handleStatus = (item: any) => {
    API.put(`/tasks/${item.id}`, { id: item.id, title: item.title, description: item.description, status: item.status === "done" ? 'notDone' : "done" })
      .then((result: any) => console.log('result', result))
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full flex justify-center flex-col items-center'>
        <h3 className='text-xl text-white mb-4'>All Tasks</h3>
        <div className='bg-white w-1/2 flex flex-col rounded-md shadow-lg shadow-gray-500/40 h-[80vh] relative'>
          <div className='flex-grow overflow-y-scroll'>
            {
              tasks.map((item: any) => (
                <div className={`flex flex-row shadow-lg shadow-gray-500/40 rounded-xl p-2 mx-2 my-1 ${item.status === "done" ? "opacity-50" : "opacity-100"}`} key={item.id}>
                  <div className='w-11/12'>
                    <p className='text-l'>{item.title}</p>
                    <p className='text-xs text-gray-400'>{item.description}</p>
                  </div>
                  <input onChange={() => handleStatus(item)} className='accent-green-700' type='radio' checked={item.status === "done" ? true : false} />
                </div>
              ))
            }
          </div>
          <div className='bottom-0 flex justify-center static rounded-xl w-[100%] bg-white opacity-80 '>
            <button onClick={() => setOpenModal(true)} ><Image className='w-[50px]' alt="plusIcon" src={PlusIcon} /></button>
          </div>
        </div>

        <Modal openModal={openModal} setOpenModal={setOpenModal} >
          <AddTaskForm />
        </Modal>
      </div>
    </main>
  )
}
