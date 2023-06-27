import { AddingTaskRequest, EditingTaskRequest, TaskListRequest } from '@/store/action'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { AnyAction } from '@reduxjs/toolkit'
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
/**
 * Adding & Editing i've tried to handle it in one component, it makes it to read a little bit hard but reduce amount of code actully i can write in much better way it takes too much time.
 * @param param0 modal state and set funtion
 * @returns a form for both adding and editing
 */
function AddTaskForm({ setOpenModal, openModal }: { openModal: boolean, setOpenModal: Dispatch<SetStateAction<boolean>> }): JSX.Element {

    const { EditTaskDataLocally, EditingTaskData, data } = useAppSelector((state) => state.AddingTaskReducer)

    const [title, setTitle] = useState<string>(EditTaskDataLocally?.payload?.title || '')
    const [description, setDescription] = useState<string>(EditTaskDataLocally?.payload?.description || "")
    const dispatch: Dispatch<AnyAction> = useAppDispatch()

    useEffect(() => {
        dispatch(TaskListRequest(''))
    }, [EditingTaskData, data])

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => (setTitle(e.target.value))
    const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => (setDescription(e.target.value))

    //here check its modification or creating new task, checking the EditTaskDataLocally state if its full editing else creating new.
    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!title) {
            return toast.warn("please add title")
        }
        if (!description) {
            return toast.warn("please add description")
        }
        if (EditTaskDataLocally && EditTaskDataLocally?.payload?.length !== 0) {
            dispatch(EditingTaskRequest({ id: EditTaskDataLocally.payload.id, title: title, description: description, status: EditTaskDataLocally.payload.status }))
        }
        if (EditTaskDataLocally?.payload?.length === 0) {
            dispatch(AddingTaskRequest({ title: title, description: description, status: "false" }))
        }
        setOpenModal(false)
    }

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