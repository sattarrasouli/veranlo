import PlusIcon from '@/assets/img/plus.png'
import { EditTaskDataShareLocally, RemoveTaskRequest, TaskListRequest, TaskStatusRequest } from '@/store/action'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { ITaskType } from '@/utils/Interfaces'
import { AnyAction } from '@reduxjs/toolkit'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect } from 'react'
import DeleteIcon from '../../assets/img/delete.svg'
import PencilIcon from '../../assets/img/pencil.svg'
/**
 * A List to diaplay each task including title, description and three button edit,remove, done.
 * @param param0 setModal function to open the modal
 * 
 * @returns jsx -- a list show each task and three button delete,edit, done
 */


function List({ setOpenModal }: { setOpenModal: Dispatch<SetStateAction<boolean>> }): JSX.Element {

    const dispatch: Dispatch<AnyAction> = useAppDispatch()
    const { data, isLoading, hasError, TaskStatusData, RemoveTaskData } = useAppSelector((state) => state.TaskListReducer)

    useEffect(() => {
        dispatch(TaskListRequest(''))
    }, [TaskStatusData, RemoveTaskData])

    const handleStatus = (item: ITaskType) => {
        dispatch(TaskStatusRequest({ id: item.id, title: item.title, description: item.description, status: item.status === "true" ? 'false' : "true" }))
    }

    const removeTask = (item: ITaskType) => {
        dispatch(RemoveTaskRequest({ id: item.id }))
    }

    const EditTask = (item: ITaskType[]) => {
        dispatch(EditTaskDataShareLocally(item))
        setOpenModal(true)
    }

    const handleModal: () => void = () => {
        setOpenModal(true)
        dispatch(EditTaskDataShareLocally([]))
    }
    return (
        <div className='w-full flex justify-center flex-col items-center'>
            <h3 className='text-xl text-white mt-10 mb-4'>My Tasks</h3>
            <div className='bg-white w-1/2 flex flex-col rounded-md shadow-lg shadow-gray-500/40 h-[80vh] relative'>
                <div className='flex-grow overflow-y-scroll'>
                    {
                        data && data?.map((item: any) => (
                            <div className={`flex flex-row shadow-lg shadow-gray-500/40 rounded-xl p-2 mx-2 my-1 ${item.status === "true" ? "opacity-50" : "opacity-100"}`} key={item.id}>
                                <div className='w-11/12'>
                                    <p className='text-l'>{item.title}</p>
                                    <p className='text-xs text-gray-400'>{item.description}</p>
                                </div>
                                <button onClick={() => EditTask(item)}><Image className='w-[15px] mx-3' alt='edit' src={PencilIcon} /></button>
                                <button onClick={() => removeTask(item)}><Image className='w-[15px] mx-3' alt='delete' src={DeleteIcon} /></button>
                                <input onChange={() => handleStatus(item)} className='accent-green-700' type='radio' checked={item.status === "true" ? true : false} />
                            </div>
                        ))
                    }
                    {
                        data?.length === 0 && <p className='w-full text-center my-3'>No Task!</p>
                    }
                </div>
                <div className='bottom-0 flex justify-center static rounded-xl w-[100%] bg-white opacity-80 '>
                    <button onClick={handleModal} ><Image className='w-[50px]' alt="plusIcon" src={PlusIcon} /></button>
                </div>
            </div>
        </div>
    )
}

export default List