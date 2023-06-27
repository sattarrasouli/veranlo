export interface IInitialStateAddingEditing {
    data: string[],
    Error: boolean,
    isLoading: boolean,
    EditTaskDataLocally: string[],

    EditingTaskData: string[],
    EditingTaskLoading: boolean,
    EditingTaskError: boolean
}

export interface IAction {
    payload: {
        id?: number
    },
    type: string,
}

export interface IResponse {
    data: string[],
}

export interface IEndpoints {
    [key: string]: string
}

export interface ITaskType {
    id: number,
    title: string,
    description: string,
    status: string
}

export interface IPayload {
    id?: number,
    title?: string,
    description?: string,
    status?: string
}