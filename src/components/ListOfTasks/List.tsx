import { API } from '@/services/API'
import React, { useEffect, useState } from 'react'
import PlusIcon from '@/assets/img/plus.png'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { TaskListRequest, TaskStatusRequest } from '@/store/action'

function List() {

    const [isComplete, setIsComplete] = useState<string>('')
    const [tasks, setTasks] = useState<string[]>([])
    const [openModal, setOpenModal] = useState(false)
    const [radioBtn, setRadioBtn] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { data, isLoading, hasError, TaskStatusData } = useAppSelector((state) => state.TaskListReducer)
    console.log('TaskStatusData', TaskStatusData)
    useEffect(() => {
        dispatch(TaskListRequest(''))
    }, [TaskStatusData])

    const handleStatus = (item: any) => {
        console.log('item', item)
        dispatch(TaskStatusRequest({ id: item.id, title: item.title, description: item.description, status: item.status === "true" ? 'false' : "true" }))
    }


    return (
        <div className='w-full flex justify-center flex-col items-center'>
            <h3 className='text-xl text-white mb-4'>All Tasks</h3>
            <div className='bg-white w-1/2 flex flex-col rounded-md shadow-lg shadow-gray-500/40 h-[80vh] relative'>
                <div className='flex-grow overflow-y-scroll'>
                    {
                        data && data?.map((item: any) => (
                            <div className={`flex flex-row shadow-lg shadow-gray-500/40 rounded-xl p-2 mx-2 my-1 ${item.status === "true" ? "opacity-50" : "opacity-100"}`} key={item.id}>
                                <div className='w-11/12'>
                                    <p className='text-l'>{item.title}</p>
                                    <p className='text-xs text-gray-400'>{item.description}</p>
                                </div>
                                <button></button>
                                <input onChange={() => handleStatus(item)} className='accent-green-700' type='radio' checked={item.status === "true" ? true : false} />
                            </div>
                        ))
                    }
                </div>
                <div className='bottom-0 flex justify-center static rounded-xl w-[100%] bg-white opacity-80 '>
                    <button onClick={() => setOpenModal(true)} ><Image className='w-[50px]' alt="plusIcon" src={PlusIcon} /></button>
                </div>
            </div>
        </div>
    )
}

export default List