export interface IState {
    tasks: ITask[]
}

export interface ITask {
    id: number | string
    content: string
    status: IStatus
}

export enum IStatus {
    unstarted='unstarted',
    onProcess='onprocess',
    completed='completed',
}

export interface IUpdateAction {
    id: number | string
    status: IStatus 
}

