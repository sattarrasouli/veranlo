"use client"
import { API } from '@/services/API'
import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react'
import PlusIcon from '../assets/img/plus.png'
import Image from 'next/image'

export default function Home() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [isComplete, setIsComplete] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])
  console.log('tasks', tasks)
  useEffect(() => {
    API.get("/tasks").then((data: any) => setTasks(data.data))
    console.log("e")
  }, [])

  console.log('title', title)
  console.log('description', description)
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => (setTitle(e.target.value))
  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => (setDescription(e.target.value))

  const handleStatus = (item: any) => {
    API.put(`/tasks/${item.id}`, { id: item.id, title: item.title, description: item.description, status: item.status === "done" ? 'notDone' : "done" })
      .then((result: any) => console.log('result', result))
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    API.post("/tasks", { title: title, description: description, status: "idle" }).then((data) => {
      console.log('data', data)
      setTitle('')
      setDescription('')
    })
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className='w-full flex justify-center flex-col items-center'>
        <form onSubmit={submitForm}>
          <input type="text" onChange={handleTitle} value={title} />
          <input type="text" onChange={handleDescription} value={description} />
          <input type="submit" value="submit" />
        </form>
        <h3 className='text-xl text-white mb-4'>All Tasks</h3>
        <div className='bg-white w-1/2 flex flex-col rounded-md shadow-lg shadow-gray-500/40 h-[80vh] relative overflow-y-scroll'>
          <div className='flex-grow'>
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
          <div className='bottom-0 justify-center static w-[100%] bg-white opacity-90 '>
            <button ><Image className='w-[50px]' alt="plusIcon" src={PlusIcon} /></button>
          </div>
        </div>

      </div>
    </main>
  )
}
