import React, { ChangeEvent, useState } from 'react'
import Modal from './modal'
import { API } from '@/services/API'

function AddTaskForm() {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        API.post("/tasks", { title: title, description: description, status: "idle" }).then((data) => {
            console.log('data', data)
            setTitle('')
            setDescription('')
        })
    }

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => (setTitle(e.target.value))
    const handleDescription = (e: ChangeEvent<HTMLInputElement>) => (setDescription(e.target.value))
    return (
        <form onSubmit={submitForm} className='h-[400px] w-[200px]'>
            <input type="text" onChange={handleTitle} value={title} />
            <input type="text" onChange={handleDescription} value={description} />
            <input type="submit" value="submit" />
        </form>
    )
}

export default AddTaskForm