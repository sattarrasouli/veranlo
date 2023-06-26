import React, { ChangeEvent, useState } from 'react'
import { API } from '@/services/API'
import { toast } from 'react-toastify'

function AddTaskForm() {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    console.log('title', title)
    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!title) {
            return toast.warn("please add title")
        }
        if (!description) {
            return toast.warn("please add description")
        }
        API.post("/tasks", { title: title, description: description, status: "idle" }).then((data) => {
            console.log('data', data)
            setTitle('')
            setDescription('')
        })
    }

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => (setTitle(e.target.value))
    const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => (setDescription(e.target.value))
    return (
        <form onSubmit={submitForm} className='flex flex-col items-center h-[250px] w-full bg-white'>
            <p className='m-2'>Add New Task</p>
            <input className='w-[60%] rounded p-2 m-2 bg-[#DDE6ED]' placeholder="Title..." type="text" onChange={handleTitle} value={title} />
            <textarea cols={3} className='w-[60%] rounded p-2 m-2 bg-[#DDE6ED]' placeholder='Description...' onChange={handleDescription} value={description} />
            <input className='cursor-pointer bg-[#DDE6ED] px-5 py-2 rounded' type="submit" value="Submit" />
        </form>
    )
}

export default AddTaskForm