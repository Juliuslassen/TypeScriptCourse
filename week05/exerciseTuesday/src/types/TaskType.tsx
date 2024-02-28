export interface ITask  {
    name: string,
    description: string,
    timeEstimation: number,
    completed: boolean,
}

export interface TaskArray{
    tasks: ITask[];
}